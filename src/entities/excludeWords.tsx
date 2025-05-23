const EXCLUDED_WORDS = [
  // 冠詞
  "the",
  "a",
  "an",
  "s",

  // 前置詞
  "in",
  "on",
  "at",
  "by",
  "for",
  "with",
  "of",
  "to",
  "from",
  "about",
  "as",
  "into",
  "like",
  "through",
  "after",
  "over",
  "between",
  "under",
  "against",
  "during",
  "before",
  "around",
  "without",
  "within",
  "behind",
  "beyond",

  // 接続詞
  "and",
  "or",
  "but",
  // 動詞 (be 動詞, have, do)
  "be",
  "am",
  "are",
  "is",
  "was",
  "were",
  "been",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  // 代名詞
  "he",
  "she",
  "it",
  "they",
  "we",
  "i",
  "you",
  "this",
  "that",
  "these",
  "there",
  "those",
  "me",
  "him",
  "her",
  "us",
  "them",

  // 副詞
  "not",
  "no",

  //所有格
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "mine",
  "yours",
  "hers",
  "its",
  "ours",
  "theirs",

  // 省略形
  "re",
  "ve",
  "ll",
  "d",
  "t",
  "m",
  "s",

  // その他　現在の仕様では対応できないもの
  // アルファベット一文字系
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default EXCLUDED_WORDS;
