import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js"; // Import your Firebase config
import Wrapper from "@components/Layout/Wrapper.jsx";

export default function AddNew() {
  const [formData, setFormData] = useState({
    field1: "",
    likes: 0,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchTicketCount = async () => {
      const querySnapshot = await getDocs(collection(db, "anomologita"));
      console.log("Fetched ticket count: ", querySnapshot.docs.length); // Just to verify the ticket count fetching
    };

    fetchTicketCount();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // Check if field1 is not empty before submitting
    if (formData.field1.trim() !== "") {
      const currentTime = new Date().toLocaleString(); // Get current time as a string
      const ticketNumber = new Date().getTime(); // Use the current timestamp as the ticket number

      const dataToSubmit = {
        ...formData,
        time: currentTime, // Use the current time
        completed: false, // Initially, items are not completed
        likes: 0, // Initial likes count
        ticketNumber, // Add the ticket number to the document
      };

      try {
        await addDoc(collection(db, "anomologita"), dataToSubmit); // Add the document to Firestore
        console.log("Document written with ID: ", dataToSubmit);
        setFormData({ field1: "", likes: 0 }); // Reset form data after successful submission
        setIsFormSubmitted(false); // Reset the form submission status
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };


  return (
    <Wrapper>
      <div className="flex h-[85vh] w-full flex-col items-center justify-center gap-10 px-5">
        <form
          onSubmit={handleSubmit}
          className="relative flex h-auto w-full flex-col justify-around rounded-xl rounded-b-2xl bg-[#f0f0f0] lg:w-auto "
        >
          <h1 className="my-5 px-5 text-center text-lg font-extrabold uppercase text-black">
            Γραψε το ανομολογητο σου
          </h1>

          <textarea
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            className="mx-auto mb-5 h-24 w-4/5 rounded-md bg-[#d1d5db] p-3 text-center text-black  focus:outline-none focus:ring-0"
            maxLength="60"
            placeholder="Γράψε κάτι..."
          />

          <button
            type="submit"
            className="mb-0 w-full rounded-b-xl rounded-t-none bg-[#1a1a1a] px-3 py-2 text-white ring-0 hover:border-[#1a1a1a] hover:ring-0 focus:border-none focus:outline-none focus:ring-0"
            disabled={formData.field1.trim() === ""}
          >
            ΑΠΟΣΤΟΛΗ
          </button>
        </form>

        {isFormSubmitted && (
          <div className="width-full border-white">
            <p className="text-center text-white">
              Το ανομολογητό σου στάλθηκε!
            </p>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
