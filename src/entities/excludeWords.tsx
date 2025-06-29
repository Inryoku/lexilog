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
  "off",
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

  //疑問詞
  "who",
  "what",
  "where",
  "when",
  "why",
  "how",
  "which",
  "whom",
  "whose",
  "whichever",
  "whatever",
  "whenever",
  "wherever",
  "whichever",
  "whomever",
  "whosoever",
  "whoso",
  "whence",

  // 副詞
  "not",
  "no",
  "only",
  "just",
  "very",
  "too",
  "also",
  "even",
  "still",
  "yet",
  "so",
  "now",
  "then",

  //  動詞のing形
  "being",
  "having",
  "doing",
  "going",

  // 比較級・最上級
  "more",
  "most",
  "less",
  "least",
  "better",
  "best",
  "worse",
  "worst",

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

  // 助動詞
  "will",
  "shall",
  "can",
  "may",
  "might",
  "must",
  "could",
  "would",
  "should",
  "ought",
  "need",
  "used",

  // 指示詞
  "here",
  "there",

  // 感嘆詞
  "oh",
  "ah",
  "wow",
  "ouch",
  "oops",
  "yay",
  "hmm",
  "uh",
  "um",
  "eh",
  "huh",

  //  thing body one 系
  "something",
  "everything",
  "everyone",
  "everybody",
  "anything",
  "anyone",
  "anybody",
  "nothing",
  "nobody",
  "somebody",

  // 省略形
  "re",
  "ve",
  "ll",
  "d",
  "t",
  "m",
  "s",

  // 数字
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
  "hundred",

  // 反応
  "yes",
  "no",
  "okay",
  "ok",

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

  // Sports
  "football",
  "soccer",
  "basketball",
  "baseball",
  "tennis",
  "golf",
  "hockey",
  "cricket",
  "rugby",
  "volleyball",
  "swimming",
  "boxing",

  //Basic Words
  "hello",
  "hi",
  "goodbye",
  "bye",
  "thanks",
  "thank",
  "please",
  "welcome",
  "sorry",
  "yes",
  "no",
  "okay",
  "fine",
  "great",
  "good",
  "bad",
  "happy",
  "sad",
  "angry",
  "new",
  "old",
  "big",
  "small",
  "long",
  "short",
  "high",
  "low",
  "fast",
  "slow",
  "hot",
  "cold",
  "easy",
  "hard",
  "right",
  "left",
  "up",
  "down",
  "day",
  "night",
  "morning",
  "afternoon",
  "evening",
  "week",
  "month",
  "year",
  "time",
  "today",
  "tomorrow",
  "yesterday",
  "kids",
  "everyone",
  "everybody",
  "anyone",
  "anybody",
  "someone",
  "somebody",
  "nobody",
  "everywhere",
  "anywhere",

  // Common Verbs
  "love",
  "loved",
  "read",

  // Common Names
  "james",
  "michael",
  "john",
  "robert",
  "david",
  "william",
  "richard",
  "joseph",
  "thomas",
  "christopher",
  "charles",
  "daniel",
  "matthew",
  "anthony",
  "mark",
  "steven",
  "donald",
  "andrew",
  "joshua",
  "paul",
  "kenneth",
  "kevin",
  "brian",
  "timothy",
  "ronald",
  "jason",
  "george",
  "edward",
  "jeffrey",
  "ryan",
  "jacob",
  "nicholas",
  "gary",
  "eric",
  "jonathan",
  "stephen",
  "larry",
  "justin",
  "benjamin",
  "scott",
  "brandon",
  "samuel",
  "gregory",
  "alexander",
  "patrick",
  "frank",
  "jack",
  "raymond",
  "dennis",
  "tyler",
  "aaron",
  "jerry",
  "jose",
  "nathan",
  "adam",
  "henry",
  "zachary",
  "douglas",
  "peter",
  "noah",
  "kyle",
  "ethan",
  "christian",
  "jeremy",
  "keith",
  "austin",
  "sean",
  "roger",
  "terry",
  "walter",
  "dylan",
  "gerald",
  "carl",
  "jordan",
  "bryan",
  "gabriel",
  "jesse",
  "harold",
  "lawrence",
  "logan",
  "arthur",
  "bruce",
  "billy",
  "elijah",
  "joe",
  "alan",
  "juan",
  "liam",
  "willie",
  "mason",
  "albert",
  "randy",
  "wayne",
  "vincent",
  "lucas",
  "caleb",
  "luke",
  "bobby",
  "isaac",
  "bradley",
  "mary",
  "patricia",
  "jennifer",
  "linda",
  "elizabeth",
  "barbara",
  "susan",
  "jessica",
  "karen",
  "sarah",
  "lisa",
  "nancy",
  "sandra",
  "ashley",
  "emily",
  "kimberly",
  "betty",
  "margaret",
  "donna",
  "michelle",
  "carol",
  "amanda",
  "melissa",
  "deborah",
  "stephanie",
  "rebecca",
  "sharon",
  "laura",
  "cynthia",
  "amy",
  "kathleen",
  "angela",
  "dorothy",
  "shirley",
  "emma",
  "brenda",
  "nicole",
  "pamela",
  "samantha",
  "anna",
  "katherine",
  "christine",
  "debra",
  "rachel",
  "olivia",
  "carolyn",
  "maria",
  "janet",
  "heather",
  "diane",
  "catherine",
  "julie",
  "victoria",
  "helen",
  "joyce",
  "lauren",
  "kelly",
  "christina",
  "joan",
  "judith",
  "ruth",
  "hannah",
  "evelyn",
  "andrea",
  "virginia",
  "megan",
  "cheryl",
  "jacqueline",
  "madison",
  "sophia",
  "abigail",
  "teresa",
  "isabella",
  "sara",
  "janice",
  "martha",
  "gloria",
  "kathryn",
  "ann",
  "charlotte",
  "judy",
  "amber",
  "julia",
  "grace",
  "denise",
  "danielle",
  "natalie",
  "alice",
  "marilyn",
  "diana",
  "beverly",
  "jean",
  "brittany",
  "theresa",
  "frances",
  "kayla",
  "alexis",
  "tiffany",
  "lori",
  "kathy",
  "chris",
  "lebron",
  "dwight",
  "carmelo",
  "stephen",
  "maya",
  "sylvia",
  "danny",
  "micky",

  // Common Surnames
  "crawford",
  "donovan",
  "arison",
  "fowles",
  "smith",
  "johnson",
  "williams",
  "brown",
  "jones",
  "garcia",
  "miller",
  "davis",
  "rodriguez",
  "martinez",
  "hernandez",
  "lopez",
  "gonzales",
  "wilson",
  "anderson",
  "thomas",
  "taylor",
  "moore",
  "jackson",
  "martin",
  "lee",
  "perez",
  "thompson",
  "white",
  "harris",
  "sanchez",
  "clark",
  "ramirez",
  "lewis",
  "robinson",
  "walker",
  "young",
  "allen",
  "king",
  "wright",
  "scott",
  "torres",
  "nguyen",
  "hill",
  "flores",
  "green",
  "adams",
  "nelson",
  "baker",
  "hall",
  "rivera",
  "campbell",
  "mitchell",
  "carter",
  "roberts",
  "gomez",
  "phillips",
  "evans",
  "turner",
  "diaz",
  "parker",
  "cruz",
  "edwards",
  "collins",
  "reyes",
  "stewart",
  "morris",
  "morales",
  "murphy",
  "cook",
  "rogers",
  "gutierrez",
  "ortiz",
  "morgan",
  "cooper",
  "peterson",
  "bailey",
  "reed",
  "kelly",
  "howard",
  "ramos",
  "kim",
  "cox",
  "ward",
  "richardson",
  "watson",
  "brooks",
  "chavez",
  "wood",
  "james",
  "bennet",
  "gray",
  "mendoza",
  "ruiz",
  "hughes",
  "price",
  "alvarez",
  "castillo",
  "sanders",
  "patel",
  "myers",
  "long",
  "ross",
  "foster",

  //Top200 Words
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "january",
  "february",
  "april",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
  "zero",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
  "hundred",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "the",
  "be",
  "and",
  "of",
  "to",
  "a",
  "in",
  "have",
  "it",
  "you",
  "he",
  "for",
  "they",
  "not",
  "that",
  "we",
  "on",
  "with",
  "this",
  "I",
  "do",
  "as",
  "at",
  "she",
  "but",
  "from",
  "by",
  "will",
  "or",
  "say",
  "go",
  "so",
  "all",
  "if",
  "one",
  "would",
  "about",
  "can",
  "which",
  "there",
  "know",
  "more",
  "get",
  "who",
  "like",
  "when",
  "think",
  "make",
  "time",
  "see",
  "what",
  "up",
  "some",
  "other",
  "out",
  "good",
  "people",
  "year",
  "take",
  "no",
  "well",
  "because",
  "very",
  "just",
  "come",
  "could",
  "work",
  "use",
  "than",
  "now",
  "then",
  "also",
  "into",
  "only",
  "look",
  "want",
  "give",
  "first",
  "new",
  "way",
  "find",
  "over",
  "any",
  "after",
  "day",
  "where",
  "thing",
  "most",
  "should",
  "need",
  "much",
  "right",
  "how",
  "back",
  "mean",
  "even",
  "may",
  "here",
  "many",
  "such",
  "last",
  "child",
  "tell",
  "really",
  "call",
  "before",
  "company",
  "through",
  "down",
  "show",
  "life",
  "man",
  "change",
  "place",
  "long",
  "between",
  "feel",
  "too",
  "still",
  "problem",
  "write",
  "same",
  "lot",
  "great",
  "try",
  "leave",
  "number",
  "both",
  "own",
  "part",
  "point",
  "little",
  "help",
  "ask",
  "meet",
  "start",
  "talk",
  "something",
  "put",
  "another",
  "become",
  "interest",
  "country",
  "old",
  "each",
  "school",
  "late",
  "high",
  "different",
  "off",
  "next",
];

export default EXCLUDED_WORDS;
