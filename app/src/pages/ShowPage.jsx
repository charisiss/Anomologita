import { useState, useEffect, useMemo } from "react";
import { collection, query, where, onSnapshot, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../services/firebaseConfig.js";
import Wrapper from "../components/Layout/Wrapper";
import MessageComponent from "../components/MessageComponent";

export default function ShowPage() {

  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "anomologita"),
      where("completed", "==", true)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompletedItems(items);
    });

    return () => unsubscribe();
  }, []);

  // useMemo will re-calculate the top three liked items whenever completedItems changes
  const topThreeLiked = useMemo(() => {
    return [...completedItems]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3);
  }, [completedItems]);

  const handleLike = (docId) => {
    const docRef = doc(db, "anomologita", docId);
    updateDoc(docRef, {
      likes: increment(1)
    });
  };


  return (
    <Wrapper hideHeaderMenu="true">
      <div className="flex flex-col items-center w-full h-[87vh] gap-10 relative">
        <div className="absolute bottom-0 right-0 z-20">
          <p className="text-xl">SCAN TO WRITE</p>

          <img className="w-44 rounded-tl-xl" src="/qr-red.png"></img>
        </div>
        <div className="p-10">
                <h2 className="text-center text-5xl font-bold pb-3 text-white shadow-lg">
                  TOP 3
                </h2>
                  <div className="grid grid-cols-3 gap-5">
                    {topThreeLiked.map((item) => (
                      <MessageComponent
                        key={item.id}
                        title={item.field1}
                        likeCount={item.likes}
                        color={"red"}
                        stroke={"white"}
                        onLike={() => handleLike(item.id)}
                      />
                    ))}
                  </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-3 gap-10 h-4/5 p-10">
                {completedItems.map((item) => (
                  <MessageComponent
                    key={item.id}
                    title={item.field1}
                    likeCount={item.likes}
                    onLike={() => handleLike(item.id)}
                  />
                ))}
              </div>
      </div>
    </Wrapper>
  );
}
