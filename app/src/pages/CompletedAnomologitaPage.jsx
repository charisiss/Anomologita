import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebaseConfig.js'; // Import your Firebase config

function CompletedAnomologitaPage() {
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    // Set up a real-time listener using onSnapshot
    const q = query(collection(db, 'anomologita'), where('completed', '==', true));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompletedItems(items);
    });

    // Detach the listener when the component is unmounted
    return unsubscribe;
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Completed Anomologita</h1>
      <div className="grid grid-cols-3 gap-4">
        {completedItems.map((item) => (
          <div key={item.id} className="bg-white p-4 border border-gray-200 rounded shadow">
            <p className="text-gray-800">{item.field1}</p>
            <p className="text-gray-600">{item.field2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedAnomologitaPage;
