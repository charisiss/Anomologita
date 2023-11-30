import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../services/firebaseConfig.js"; // Import your Firebase config
import Wrapper from "../components/Layout/Wrapper";
import MessageComponent from "../components/MessageComponent";

export default function ShowPage() {
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    // Set up a real-time listener using onSnapshot
    // and order the results by the ticket number in descending order
    const q = query(
      collection(db, "anomologita"),
      where("completed", "==", true),
      orderBy("ticket", "desc")
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

  const handleLike = (docId) => {
    // Assuming 'docId' is the ID of the document in Firestore
    const docRef = doc(db, "anomologita", docId);
    updateDoc(docRef, {
      likes: increment(1) // Using Firestore's increment to update like count
    }).catch(error => {
      console.error("Error updating likes: ", error);
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
            <MessageComponent
              title="WEB DD MONO"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
            <MessageComponent
              title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
            <MessageComponent
              title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
          </div>
        </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-10 h-4/5 p-10">
          {completedItems.map((item, index) => (
            <MessageComponent key={item.id} title={item.field1} likeCount={0} onLike={() => handleLike(someDocId)} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
