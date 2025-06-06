import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // リポジトリ名を指定
  server: {
    host: "0.0.0.0", // すべてのIPアドレスからアクセス可能にする
  },
});
