import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js"; // Import your Firebase config
import Wrapper from "@components/Layout/Wrapper.jsx";
import Footer from "@components/Layout/Footer.jsx";
import MessageComponent from "@components/MessageComponent.jsx";

export default function ReadPage() {
  const [data, setData] = useState([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "anomologita"));
      const dataList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        docId: doc.id,
      })); // Store Firestore document ID in 'docId'
      setData(dataList);
    };

    fetchData();
  }, []);

  // Function to update the boolean value
  const updateBooleanValue = async (docId, value) => {
    const docRef = doc(db, "anomologita", docId); // Use the correct Firestore document ID to update
    try {
      await updateDoc(docRef, {
        completed: value, // Set 'completed' to the value passed in
      });
      // Optimistically update the UI
      const updatedData = data.map((item) => {
        if (item.docId === docId) {
          return { ...item, completed: value };
        }
        return item;
      });
      setData(updatedData);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  return (
    <Wrapper>
      <div className="flex h-[87vh] w-full flex-col items-start justify-center gap-5 px-5">
        <MessageComponent title="WEB DD MONO" likeCount={142} />
        <MessageComponent
          title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
          likeCount={142}
        />
        <MessageComponent
          title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
          likeCount={142}
        />
        <MessageComponent
          title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
          likeCount={142}
        />
        <MessageComponent
          title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
          likeCount={142}
        />
        <MessageComponent
          title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
          likeCount={142}
        />
      </div>
    </Wrapper>
  );
}
