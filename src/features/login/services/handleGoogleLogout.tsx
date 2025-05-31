import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";

export const handleGoogleLogout = async () => {
  try {
    await signOut(auth);
    console.log("✅ ログアウトしました");
  } catch (error) {
    console.error("❌ ログアウト失敗:", error);
  }
};
