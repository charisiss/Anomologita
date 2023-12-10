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
import { db } from "../services/firebaseConfig.js"; // Import your Firebase config
import Wrapper from "../components/Layout/Wrapper";
import MessageComponent from "../components/MessageComponent";
import MessagesComponent from "../components/MessagesComponent";

export default function ShowPage() {
  const [completedItems, setCompletedItems] = useState([]);
  const [topThreeLiked, setTopThreeLiked] = useState([]);

  useEffect(() => {
    // Set up a real-time listener for completed items
    const q = query(
      collection(db, "anomologita"),
      where("completed", "==", true),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompletedItems(items);
    });

    return unsubscribe; // Detach the listener when the component is unmounted
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
      })
      .catch((error) => {
        console.error("Error updating likes: ", error);
      });
  };

  return (
    <Wrapper hideHeaderMenu="true" fullWidth={"true"}>
      <div className="relative flex h-[87vh] w-full flex-col items-center gap-10">
        <div className="absolute bottom-0 right-0 z-20">
          <p className="text-xl">SCAN TO WRITE</p>

          <img className="w-44 rounded-tl-xl" src="/qr-red.png"></img>
        </div>
        <div className="w-full p-10">
          <h2 className="pb-3 text-center text-5xl font-bold text-white shadow-lg">
            TOP 3
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {topThreeLiked.map((item, index) => (
              // Yours

              // <MessageComponent
              //   key={item.id}
              //   title={item.field1}
              //   likeCount={item.likes}
              //   color={"red"}
              //   stroke={"white"}
              //   onLike={() => handleLike(item.id)}
              //   customClass={index != 1 ? "" : "drop-shadow-2xl"}
              // />

              // Manos
              <MessagesComponent
                type={"send"}
                key={item.id}
                title={item.field1}
                likeCount={item.likes}
                color={"red"}
                stroke={"white"}
                onLike={() => handleLike(item.id)}
                customClass={index != 1 ? "" : "drop-shadow-2xl"}
              />
            ))}
          </div>
        </div>
        <div className="grid h-4/5 w-4/5 grid-cols-3 grid-rows-3 gap-10 p-10">
          {completedItems.slice(-9).map((item) => (
            // Yours

            // <MessageComponent
            //   key={item.id}
            //   title={item.field1}
            //   likeCount={item.likes}
            //   onLike={() => handleLike(item.id)}
            //   // ... other props ...
            // />

            // Manos
            <MessagesComponent
              type={"receive"}
              key={item.id}
              title={item.field1}
              likeCount={item.likes}
              onLike={() => handleLike(item.id)}
              // ... other props ...
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
