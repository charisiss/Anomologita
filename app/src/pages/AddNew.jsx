import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../services/firebaseConfig.js";
import Wrapper from "../components/Layout/Wrapper";

export default function AddNew() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uniqueID = uuidv4(); // Generate a unique ID
    const dataToSubmit = {
      id: uniqueID, // Include the unique ID in the document
      ...formData,
      completed: false, // Add a boolean field set to false
    };

    try {
      addDoc(collection(db, "anomologita"), dataToSubmit);
      console.log("Document written with ID: ", uniqueID);
      // Reset the form or perform other actions after successful submission
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-start w-full h-[85vh] px-5 gap-10">
        <form
          className="bg-[#f0f0f0] rounded-xl w-full h-auto flexflex-col justify-around border-2 border-[#1a1a1a]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-lg font-extrabold text-black uppercase my-5">
            Γραψε το ανομολογητο σου
          </h1>
          <input
            className="bg-[#d1d5db] rounded-md w-4/5 h-12 text-center mb-5 text-black"
            placeholder="Γράψε κάτι..."
            name="field1"
            value={formData.field1}
            onChange={handleChange}
          ></input>
          <input
            className="bg-[#d1d5db] rounded-md w-4/5 h-12 text-center mb-5 text-black"
            placeholder="#Ο Αριθμός Σου"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
          ></input>
          <button
            type="submit"
            className="bg-[#1a1a1a] w-full rounded-t-none rounded-b-xl px-3 m-[-1px]"
          >
            ΑΠΟΣΤΟΛΗ
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
