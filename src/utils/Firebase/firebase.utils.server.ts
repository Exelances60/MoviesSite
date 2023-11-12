import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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

export const singOut = async () => {
  "use server";
  try {
    await cookies().delete("user");
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
