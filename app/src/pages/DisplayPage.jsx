import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig.js'; // Import your Firebase config

function DisplayPage() {
    const [data, setData] = useState([]);
  
    // Fetch data from Firestore
    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'anomologita'));
        const dataList = querySnapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id })); // Store Firestore document ID in 'docId'
        setData(dataList);
      };
  
      fetchData();
    }, []);
  
    // Function to update the boolean value
    const updateBooleanValue = async (docId, value) => {
      const docRef = doc(db, 'anomologita', docId); // Use the correct Firestore document ID to update
      try {
        await updateDoc(docRef, {
          completed: value // Set 'completed' to the value passed in
        });
        // Optimistically update the UI
        const updatedData = data.map(item => {
          if (item.docId === docId) {
            return { ...item, completed: value };
          }
          return item;
        });
        setData(updatedData);
      } catch (error) {
        console.error('Error updating document:', error);
      }
    };
  
    return (
      <div>
        <h1>Data from Anomologita</h1>
        {data.map(item => (
          <div key={item.docId}> {/* Use the correct key */}
            <div>{item.field1} - {item.field2} - Completed: {item.completed.toString()}</div>
            <button onClick={() => updateBooleanValue(item.docId, true)}>Set True</button>
            <button onClick={() => updateBooleanValue(item.docId, false)}>Set False</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default DisplayPage;