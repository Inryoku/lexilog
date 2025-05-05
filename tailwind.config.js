export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spot: "#E2DED0", // スポットカラー（背景色）
        subSpot: "#D9D4C0", // サブスポットカラー（背景色）
        boldLabel: "#000000", // 太字ラベル色
        accent: "#FF0000", // アクション・強調色（primary）
        text: "#000000", // 通常テキスト色
        subText: "#868686", // サブテキスト色
        bg: "#E7E2CD",
      },
    },
  },
  plugins: [],
};
