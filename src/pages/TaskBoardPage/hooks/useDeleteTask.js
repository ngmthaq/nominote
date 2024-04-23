import { deleteDoc, doc } from "firebase/firestore";
import { firebaseFirestore } from "@/configs/firebase";

export default function useDeleteTask() {
  return async (id) => {
    try {
      console.log("Firestore - useDeleteTask id:", id);
      const ref = doc(firebaseFirestore, "tasks", id);
      const response = await deleteDoc(ref);
      console.log("Firestore - useDeleteTask response:", response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
