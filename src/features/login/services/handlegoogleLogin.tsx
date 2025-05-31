import { auth } from "../../../firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

export const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log("✅ ログイン成功");
  } catch (err) {
    console.error("❌ ログイン失敗", err);
  }
};
