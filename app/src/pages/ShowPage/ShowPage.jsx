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
import { db } from "../../services/firebaseConfig.js"; // Import your Firebase config
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
        .sort((a, b) => b.ticket - a.ticket) // Sort by ticket number
        .slice(0, 9); // Take only the top 9 items

      setCompletedItems(items);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Sort the completedItems by likes and take the top 3
    const sortedByLikes = [...completedItems].sort((a, b) => b.likes - a.likes);
    setTopThreeLiked(sortedByLikes.slice(0, 3));
  }, [completedItems]);

  const handleLike = (docId) => {
    // Increment the 'likes' field of the document
    const docRef = doc(db, "anomologita", docId);
    updateDoc(docRef, {
      likes: increment(1),
    })
      .then(() => {
        console.log("Like count incremented in Firestore");
        // After updating the likes in Firestore, update the local state to reflect the change
        setCompletedItems((prevItems) =>
          prevItems.map((item) =>
            item.id === docId ? { ...item, likes: item.likes + 1 } : item,
          ),
        );
        // Also update the top three liked items
        setTopThreeLiked((prevItems) =>
          prevItems.map((item) =>
            item.id === docId ? { ...item, likes: item.likes + 1 } : item,
          ),
        );
      })
      .catch((error) => {
        console.error("Error updating likes: ", error);
      });
  };

  return (
    <Wrapper fullWidth={"true"}>
      <div className="grid w-full grid-cols-12 ">
        <h2 className="col-span-12 py-3 text-center text-5xl font-bold text-white">
          TOP 3
        </h2>
        <div className="col-span-12 grid grid-cols-3 gap-5">
          {topThreeLiked.map((item) => (
            <ShowCard
              key={item.id}
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
