import { doc, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "@/configs/firebase";
import { generateRandomString } from "@/helpers/str";

export default function useCreateTask() {
  return async (title, priority, status) => {
    try {
      const payload = { title, priority, status };
      console.log("Firestore - useCreateTask payload:", payload);
      const ref = doc(firebaseFirestore, "tasks", Date.now() + generateRandomString(8));
      const response = await setDoc(ref, payload);
      console.log("Firestore - useCreateTask response:", response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
