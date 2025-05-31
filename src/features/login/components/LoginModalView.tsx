import React from "react";

export default function LoginModalView({
  isLoginModalOpen,
}: {
  isLoginModalOpen: boolean;
}) {
  if (!isLoginModalOpen) {
    return null;
  }
  return (
    <div className="login-modal">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
