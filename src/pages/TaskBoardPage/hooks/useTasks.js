import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { firebaseFirestore } from "@/configs/firebase";

export default function useTasks() {
  const [isFetching, setIsFetching] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stm = query(collection(firebaseFirestore, "tasks"));
    getDocs(stm)
      .then((snapshot) => {
        const shape = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTasks(shape);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsFetching(false));
  }, []);

  console.log("useTasks data:", tasks);

  return { isFetching, tasks };
}
