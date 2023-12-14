import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js"; // Import your Firebase config
import Wrapper from "@components/Layout/Wrapper.jsx";
import NewWrapper from "../../components/Layout/NewWrapper.jsx";

export default function AddNew() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    likes: 0,
  });
  const [ticketNumber, setTicketNumber] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchTicketCount = async () => {
      const querySnapshot = await getDocs(collection(db, "anomologita"));
      setTicketNumber(querySnapshot.docs.length + 1);
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

    // Check if field1 is not empty before submitting
    if (formData.field1.trim() !== "") {
      const dataToSubmit = {
        ...formData,
        ticket: ticketNumber,
        completed: false,
        likes: 0,
      };

      try {
        await addDoc(collection(db, "anomologita"), dataToSubmit);
        console.log("Document written with ticket number: ", ticketNumber);
        setTicketNumber((prevNumber) => prevNumber + 1);
        setFormData({ field1: "", field2: "", likes: 0 });
        setIsFormSubmitted(true);
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
          <h1 className="my-5 px-5 text-lg font-extrabold uppercase text-black">
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

          <img
            src="/kiss.png"
            className="absolute bottom-[-10px] right-[-10px] h-12"
          />
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
