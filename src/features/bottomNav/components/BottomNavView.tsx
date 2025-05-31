import React from "react";
import { Link } from "react-router-dom";
import { BookMarked } from "lucide-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaNewspaper, FaRegNewspaper } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { handleGoogleLogin } from "../../login/services/handlegoogleLogin";
import { handleGoogleLogout } from "../../login/services/handleGoogleLogout";
import { useAuth } from "../../auth/AuthContext";

export const BottomNavView = () => {
  const { user } = useAuth();
  return (
    <nav className="fixed bottom-0 w-full bg-bg text-text border-t border-y-black flex justify-around py-2">
      <Link to="/">
        <FaRegNewspaper
          size={32}
          className="transition-all duration-300 ease-in-out hover:text-gray-500 hover:scale-110"
        />
      </Link>

      <Link to="/wordbook">
        <BookMarked
          size={32}
          className="transition-all duration-300 ease-in-out hover:text-gray-500 hover:scale-110"
        />
      </Link>
      {user ? (
        <button onClick={handleGoogleLogout}>
          <MdLogout
            size={28}
            className="transition-all duration-300 ease-in-out hover:text-gray-500 hover:scale-110"
          />
        </button>
      ) : (
        <button onClick={handleGoogleLogin}>
          <FaGoogle
            size={28}
            className="transition-all duration-300 ease-in-out hover:text-gray-500 hover:scale-110"
          />
        </button>
      )}
    </nav>
  );
};
