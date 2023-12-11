import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig.js";
import Wrapper from "../components/Layout/Wrapper";
import MessageComponent from "../components/MessageComponent";

function AdminPage() {
  const [data, setData] = useState([]);
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState("");
  const correctPassword = "demo";

  useEffect(() => {
    if (!isLocked) {
      const q = query(
        collection(db, "anomologita"),
        where("completed", "!=", null)
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
        setIsLocked(true);
        await updateDoc(docRef, {
          completed: value,
        });
        if (value === null) {
          setData((prevData) =>
            prevData.filter((item) => item.docId !== docId)
          );
        } else {
          setData((prevData) =>
            prevData.map((item) =>
              item.docId === docId ? { ...item, completed: value } : item
            )
          );
        }
      } catch (error) {
        console.error("Error updating document:", error);
      } finally {
        setIsLocked(false);
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
        <h1 className="text-center">ADMIN</h1>
        {isLocked ? (
          <div className="w-full h-[50vh] flex flex-col gap-2 justify-center items-center">
            <label htmlFor="password" className="text-2xl">
              ΚΩΔΙΚΟΣ:
            </label>
            <input
              type="password"
              id="password"
              className="bg-white text-red"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handlePasswordSubmit}
              className="bg-white border-4 border-[#1a1a1a] hover:border-[#900009] text-[#1a1a1a]"
            >
              Συνδεση
            </button>
          </div>
        ) : (
          data.map((item) => (
            <div key={item.docId}>
              <div className="flex flex-col justify-center items-center py-2">
                <MessageComponent title={item.field1} likeCount={item.field3} />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-red text-white mr-5 hover:border-none"
                  onClick={() => updateBooleanValue(item.docId, false)}
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
