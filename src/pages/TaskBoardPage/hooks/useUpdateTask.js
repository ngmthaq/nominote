import { doc, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "@/configs/firebase";

export default function useUpdateTask() {
  return async (id, title, priority, status) => {
    try {
      const payload = { title, priority, status };
      console.log("Firestore - useUpdateTask id:", id);
      console.log("Firestore - useUpdateTask payload:", payload);
      const ref = doc(firebaseFirestore, "tasks", id);
      const response = await setDoc(ref, payload);
      console.log("Firestore - useUpdateTask response:", response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
