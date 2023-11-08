import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { cookies } from "next/headers";

const firebaseConfig = {
  apiKey: "AIzaSyDNcz7OOXlLBBg5Cu-tfKCIlkLA9TwBpMg",
  authDomain: "admin-panel-daeaa.firebaseapp.com",
  projectId: "admin-panel-daeaa",
  storageBucket: "admin-panel-daeaa.appspot.com",
  messagingSenderId: "292044834353",
  appId: "1:292044834353:web:c2a67bfc41ddee7cf57710",
  measurementId: "G-VK9ZFCMX2P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const dataBase = getFirestore(app);

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    const querySnapshot = query(
      collection(dataBase, "users"),
      where("uid", "==", user?.uid)
    );
    const docs = await getDocs(querySnapshot);
    const userData = docs.docs[0].data();
    return userData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const singOut = async () => {
  "use server";
  try {
    await signOut(auth);
    cookies().delete("user");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
