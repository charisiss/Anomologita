import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";
import Wrapper from "@components/Layout/Wrapper.jsx";
import MessageComponent from "@components/MessageComponent.jsx";

export default function ReadPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "anomologita"),
      where("completed", "==", true),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const dataList = querySnapshot.docs
        .map(doc => ({
          ...doc.data(),
          docId: doc.id,
        }))
        .sort((a, b) => {
          // Parse the custom date format "dd/mm/yyyy, hh:mm:ss" to a Date object
          const dateA = parseDateString(a.time);
          const dateB = parseDateString(b.time);
          return dateB - dateA; // Sort by time in descending order
        });

      setData(dataList);
    });

    return () => unsubscribe(); // Detach the listener when the component unmounts
  }, []);

  // Helper function to parse the custom date format
  function parseDateString(dateString) {
    const [date, time] = dateString.split(', ');
    const [day, month, year] = date.split('/');
    const [hours, minutes, seconds] = time.split(':');
    return new Date(`${month}/${day}/${year} ${time}`);
  }

  const handleLike = (docId) => {
    const docRef = doc(db, "anomologita", docId);
    updateDoc(docRef, {
      likes: increment(1),
    }).catch((error) => {
      console.error("Error updating likes: ", error);
    });
  };

  return (
    <Wrapper>
      <div className="flex w-full flex-col items-start justify-center gap-5 px-5">
        {data.map((item) => (
          <MessageComponent
            key={`${item.docId}-${item.likes}`}
            title={item.field1}
            likeCount={item.likes}
            onLike={() => handleLike(item.docId)}
          />
        ))}
      </div>
    </Wrapper>
  );
}
