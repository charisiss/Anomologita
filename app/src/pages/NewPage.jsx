import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate a unique ID
import { db } from '../services/firebaseConfig.js'; // Import your Firebase config

function NewPage() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uniqueID = uuidv4(); // Generate a unique ID
    const dataToSubmit = {
      id: uniqueID, // Include the unique ID in the document
      ...formData,
      completed: false // Add a boolean field set to false
    };

    try {
      await addDoc(collection(db, 'anomologita'), dataToSubmit);
      console.log('Document written with ID: ', uniqueID);
      // Reset the form or perform other actions after successful submission
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <h1>New Page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name="field1" 
          value={formData.field1} 
          onChange={handleChange} 
          placeholder="Field 1"
        />
        <input 
          name="field2" 
          value={formData.field2} 
          onChange={handleChange} 
          placeholder="Field 2"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPage;
