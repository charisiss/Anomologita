import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";
import Wrapper from "@components/Layout/Wrapper.jsx";
import MessageComponent from "@components/MessageComponent.jsx";

export default function ReadPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "anomologita"),
        where("completed", "==", true)
      );
      const querySnapshot = await getDocs(q);
      const dataList = querySnapshot.docs
        .map(doc => ({
          ...doc.data(),
          docId: doc.id,
        }))
        .sort((a, b) => b.ticket - a.ticket); // Sort by ticket number in descending order

      setData(dataList);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-start w-full h-[87vh] px-5 gap-5">
        {data.map((item) => (
          <MessageComponent key={item.docId} title={item.field1} likeCount={item.likes} />
        ))}
      </div>
    </Wrapper>
  );
}
