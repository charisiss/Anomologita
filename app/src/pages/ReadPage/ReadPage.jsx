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
        .sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort by time in descending order

      setData(dataList);
    });

    return () => unsubscribe(); // Detach the listener when the component unmounts
  }, []);

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
