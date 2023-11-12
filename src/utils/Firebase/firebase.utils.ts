import { openNotification } from "@/hooks/useToast";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
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

export const createUser = async (
  email: string,
  password: string,
  nickname: string
) => {
  "use client";
  if (!email || !password || !nickname) return;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(dataBase, "users"), {
      uid: user?.uid,
      email: user?.email,
      password: password,
      nickname,
    });
    return "User created successfully";
  } catch (error: any) {
    return Promise.reject(error.message);
  }
};

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
    console.log(error.message);
    return Promise.reject(error.message);
  }
};
