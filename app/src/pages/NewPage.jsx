import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../services/firebaseConfig.js'; // Import your Firebase config

function NewPage() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: ''
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
    try {
      await addDoc(collection(db, 'anomologita'), formData);
      console.log('Data submitted');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
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
      <input 
        name="field3" 
        value={formData.field3} 
        onChange={handleChange} 
        placeholder="Field 3"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPage;
