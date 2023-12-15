import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";
import Wrapper from "@components/Layout/Wrapper.jsx";
import MessageComponent from "@components/MessageComponent.jsx";

function AdminPage() {
  const [data, setData] = useState([]);
  const [isLocked, setIsLocked] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false); // New state for update status
  const [password, setPassword] = useState("");
  const correctPassword = "infadmin";

  useEffect(() => {
    if (!isLocked) {
      const q = query(
        collection(db, "anomologita"),
        where("completed", "==", false), // Fetch items where completed is false
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const dataList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        setData(dataList);
      });

      return () => unsubscribe();
    }
  }, [isLocked]);

  const updateBooleanValue = async (docId, value) => {
    if (!isLocked) {
      const docRef = doc(db, "anomologita", docId);
      try {
        setIsUpdating(true); // Use isUpdating state here
        await updateDoc(docRef, {
          completed: value,
        });
        // No need to manually update data, as onSnapshot will handle this
      } catch (error) {
        console.error("Error updating document:", error);
      } finally {
        setIsUpdating(false); // Reset isUpdating state here
      }
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsLocked(false);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <Wrapper>
      <div>
        <h1 className="text-center text-white">ADMIN</h1>
        {isLocked && !isUpdating ? (
          <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-2">
            <label htmlFor="password" className="text-3xl font-bold">
              ΚΩΔΙΚΟΣ:
            </label>
            <input
              type="password"
              id="password"
              className="bg-white text-xl text-red"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handlePasswordSubmit}
              className="border-none bg-white text-xl font-bold text-red outline-none hover:border-none hover:outline-none hover:ring-0 focus:outline-none focus:ring-0"
            >
              ΣΥΝΔΕΣΗ
            </button>
          </div>
        ) : (
          data.map((item) => (
            <div key={item.docId}>
              <div className="flex flex-col items-center justify-center py-2">
                <MessageComponent title={item.field1} likeCount={item.field3} />
              </div>
              <div className="flex justify-center">
                <button
                  className="mr-5 bg-red text-white hover:border-none"
                  onClick={() => updateBooleanValue(item.docId, null)}
                >
                  ΑΠΟΡΡΙΨΗ
                </button>
                <button
                  className="bg-white text-red hover:border-none "
                  onClick={() => updateBooleanValue(item.docId, true)}
                >
                  ΕΓΚΡΙΣΗ
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
}

export default AdminPage;
