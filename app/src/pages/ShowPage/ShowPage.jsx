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
import { db } from "../../services/firebaseConfig";
import Wrapper from "@components/Layout/Wrapper";
import ShowCard from "@components/ShowCard";
export default function ShowPage() {
  const [completedItems, setCompletedItems] = useState([]);

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
        // Sort items by ticketNumber in descending order (most recent first)
        .sort((a, b) => b.ticketNumber - a.ticketNumber)
        // Take only the first 9 items after sorting
        .slice(0, 9);

      setCompletedItems(items);
    });

    return () => unsubscribe();
  }, []);

  const handleLike = (docId) => {
    const docRef = doc(db, "anomologita", docId);
    const timeoutDuration = 30000; // Set your desired timeout duration

    setTimeout(() => {
      updateDoc(docRef, {
        likes: increment(1),
      })
        .then(() => {
          console.log("Likes updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating likes: ", error);
        });
    }, timeoutDuration);
  };

  return (
    <Wrapper hideHeaderMenu="true" fullWidth={"true"}>
      <div className="gap-15 relative flex w-full flex-col items-center">
        <div className="w-full">
          <div className="flex justify-center">
            <h2 className="w-auto rounded-xl bg-red p-10 text-center text-7xl font-bold text-white underline">
              bit.ly/forfestivals
            </h2>
          </div>
          {/* <h2 className="py-5 text-center text-5xl font-bold text-white ">
            TOP 3
          </h2>
          <div className="grid grid-cols-3 gap-5 px-16">
            {topThreeLiked.map((item) => (
              <ShowCard
                key={`${item.id}-${item.likes}`} // Change the key when likes change
                message={item.field1}
                likeCount={item.likes}
                onLike={() => handleLike(item.id)}
              />
            ))}
          </div> */}
        </div>

        <div className="col-span-12 grid grid-cols-12 grid-rows-1 gap-5 pt-16">
          <div className="col-span-2 row-span-3 flex flex-col items-center">
            <div className="flex flex-col pb-4">
              <div className="flex justify-center">
                <h2 className="w-full rounded-t-xl bg-red px-3 py-5 text-center text-3xl font-bold text-white">
                  bit.ly/forfestivals
                </h2>
              </div>

              <img className="w-[280px] rounded-b-xl" src="/qr-ftf.png"></img>
              <p className="mt-2 text-center text-4xl font-bold text-white">
                SCAN TO WRITE
              </p>
            </div>
            <img className="w-56" src="/Infititis-Logo.png"></img>
            <img className="w-56" src="/infinityGreeceLogo.png"></img>
          </div>

          <div className="col-span-10 grid grid-cols-9 gap-5">
            {completedItems.slice(-9).map((item) => (
              <div className="col-span-3" key={item.id}>
                <ShowCard
                  key={`${item.id}-${item.likes}`} // Change the key when likes change
                  message={item.field1}
                  likeCount={item.likes}
                  onLike={() => handleLike(item.id)}
                  messageId={item.id} // Changed to use `id` as `ticket` is no longer used
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
