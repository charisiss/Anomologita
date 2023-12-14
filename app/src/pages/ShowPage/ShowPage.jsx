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
import ShowCard from "@components/ShowCard";

export default function ShowPage() {
  const [completedItems, setCompletedItems] = useState([]);
  const [topThreeLiked, setTopThreeLiked] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "anomologita"),
      where("completed", "==", true),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => b.ticket - a.ticket);

      setCompletedItems(items.slice(0, 9));
      const sortedByLikes = [...items].sort((a, b) => b.likes - a.likes);
      setTopThreeLiked(sortedByLikes.slice(0, 3));
    });

    return () => unsubscribe();
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
    <Wrapper hideHeaderMenu="true" fullWidth={"true"}>
      <div className="relative flex w-full flex-col items-center gap-10">
        <div className="absolute bottom-0 right-0 z-20">
          <p className="text-xl">SCAN TO WRITE</p>

          <img className="w-44 rounded-tl-xl" src="/qr-red.png"></img>
        </div>

        <div className="w-full p-10">
          <h2 className="pb-3 text-center text-5xl font-bold text-white ">
            TOP 3
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {topThreeLiked.map((item) => (
              <ShowCard
                key={`${item.id}-${item.likes}`} // Change the key when likes change
                message={item.field1}
                likeCount={item.likes}
                onLike={() => handleLike(item.id)}
              />

              // <MessageComponent
              //   key={item.id}
              //   title={item.field1}
              //   likeCount={item.likes}
              //   color={"red"}
              //   stroke={"white"}
              //   onLike={() => handleLike(item.id)}
              //   customClass={index != 1 ? "" : "drop-shadow-2xl"}
              // />
            ))}
          </div>
        </div>
        <div className="grid h-4/5 w-4/5 grid-cols-3 grid-rows-3 gap-10 p-10">
          {completedItems.slice(-9).map((item) => (
            // Yours
            <ShowCard
              key={`${item.id}-${item.likes}`} // Change the key when likes change
              message={item.field1}
              likeCount={item.likes}
              onLike={() => handleLike(item.id)}
            />
          ))}
        </div>

        <div className="col-span-12 grid grid-cols-12 grid-rows-1 gap-5 pt-16">
          <div className="col-span-2 row-span-3 flex flex-col items-center">
            <img className="w-full" src="/Infititis-Logo.png"></img>
            <img className="w-64" src="/infinityGreeceLogo.png"></img>
            <img className="w-32" src="xoxo.png" alt="xoxo" />
            <img className="w-50 rounded-xl" src="/redxmaslogo.png"></img>
          </div>

          <div className="col-span-8 grid grid-cols-9 gap-3">
            {completedItems.slice(-9).map((item) => (
              <div className="col-span-3" key={item.id}>
                <ShowCard
                  key={item.id}
                  message={item.field1}
                  likeCount={item.likes}
                  onLike={() => handleLike(item.id)}
                  messageId={item.ticket}
                />
              </div>
            ))}
          </div>
          <div className="order-3 col-span-2 row-span-3 flex justify-center">
            <div className="">
              <p className="mb-1 text-center text-4xl font-bold">
                SCAN TO WRITE
              </p>

              <img className="w-50 rounded-xl" src="/qr-red.png"></img>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
