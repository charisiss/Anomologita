import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  doc,
  updateDoc,
  increment,
  getDocs,
} from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";
import Wrapper from "@components/Layout/Wrapper.jsx";
import MessageComponent from "@components/MessageComponent.jsx";

export default function ReadPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "anomologita"),
        where("completed", "==", true),
      );
      const querySnapshot = await getDocs(q);
      const dataList = querySnapshot.docs
        .map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }))
        .sort((a, b) => b.ticket - a.ticket); // Sort by ticket number in descending order

      setData(dataList);
    };

    fetchData();
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
            key={item.docId}
            title={item.field1}
            likeCount={item.likes}
            onLike={() => handleLike(item.docId)}
          />
        ))}
      </div>
    </Wrapper>
  );
}
