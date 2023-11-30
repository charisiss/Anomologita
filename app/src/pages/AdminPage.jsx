import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig.js"; // Import your Firebase config
import Wrapper from "../components/Layout/Wrapper";
import MessageComponent from "../components/MessageComponent";

function AdminPage() {
  const [data, setData] = useState([]);
  const [isLocked, setIsLocked] = useState(true); // Initially locked
  const [password, setPassword] = useState("");
  const correctPassword = "demo";

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      // Check if the page is not locked before fetching data
      if (!isLocked) {
        const querySnapshot = await getDocs(collection(db, "anomologita"));
        const dataList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        setData(dataList);
      }
    };

    fetchData();
  }, [isLocked]);

  // Function to update the boolean value
  const updateBooleanValue = async (docId, value) => {
    // Check if the page is not locked before updating data
    if (!isLocked) {
      const docRef = doc(db, "anomologita", docId);
      try {
        setIsLocked(true); // Lock the page during the update
        await updateDoc(docRef, {
          completed: value,
        });
        const updatedData = data.map((item) => {
          if (item.docId === docId) {
            return { ...item, completed: value };
          }
          return item;
        });
        setData(updatedData);
      } catch (error) {
        console.error("Error updating document:", error);
      } finally {
        setIsLocked(false); // Unlock the page after the update
      }
    }
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsLocked(false); // Unlock the page if the password is correct
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <Wrapper>
      <div>
        <h1>ADMIN</h1>
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
              <button
                className="bg-red text-white mr-5 hover:border-none"
                onClick={() => updateBooleanValue(item.docId, false)}
              >
                ΑΠΟΡΡΙΨΗ
              </button>
              <button
                className="bg-white text-red hover:border-none hover:grow"
                onClick={() => updateBooleanValue(item.docId, true)}
              >
                ΕΓΚΡΙΣΗ
              </button>
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
}

export default AdminPage;
