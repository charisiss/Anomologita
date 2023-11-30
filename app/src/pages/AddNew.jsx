import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig.js"; // Import your Firebase config
import Wrapper from "../components/Layout/Wrapper";

export default function AddNew() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    likes: 0, // Initialize 'likes' with default value 0
  });
  const [ticketNumber, setTicketNumber] = useState(1); // Initialize ticket number

  useEffect(() => {
    // Fetch the number of documents to determine the next ticket number
    const fetchTicketCount = async () => {
      const querySnapshot = await getDocs(collection(db, "anomologita"));
      setTicketNumber(querySnapshot.docs.length + 1); // Next ticket number
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
    const dataToSubmit = {
      ...formData,
      ticket: ticketNumber, // Use the state ticket number
      completed: false, // Add a boolean field set to false
      likes: 0, // Initialize 'likes' with default value 0
    };

    try {
      await addDoc(collection(db, "anomologita"), dataToSubmit);
      console.log("Document written with ticket number: ", ticketNumber);
      // Increment ticket number for the next submission
      setTicketNumber((prevNumber) => prevNumber + 1);
      // Reset the form fields after successful submission
      setFormData({ field1: "", field2: "", likes: 0 });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-start w-full h-[85vh] px-5 gap-10">
        <form onSubmit={handleSubmit} className="bg-[#f0f0f0] rounded-xl w-full h-auto flex flex-col justify-around border-2 border-[#1a1a1a]">
          <h1 className="text-lg font-extrabold text-black uppercase my-5 px-5">
            Γραψε το ανομολογητο σου
          </h1>

          <input
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            className="bg-[#d1d5db] rounded-md w-4/5 h-12 text-center mb-5 text-black mx-auto"
            placeholder="Γράψε κάτι..."
          />
          <input
            name="field2"
            value={formData.field2}
            onChange={handleChange}
            className="bg-[#d1d5db] rounded-md w-4/5 h-12 text-center mb-5 text-black mx-auto"
            placeholder="#Ο Αριθμός Σου"
          />
          <button type="submit" className="bg-[#1a1a1a] w-full rounded-t-none rounded-b-xl px-3 m-[-1px] py-2 text-white">
            ΑΠΟΣΤΟΛΗ
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
