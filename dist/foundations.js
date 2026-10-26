window.PHENIX_FOUNDATIONS = [
  {
    id: "core-tones",
    level: 0,
    title: "Pinyin and the four tones",
    mission: "Make the four tone shapes, then use them in a short greeting.",
    minutes: 8,
    skills: ["Speaking", "Listening", "Reading"],
    dialogue: [
      { speaker: "You", zh: "你好！", py: "Nǐ hǎo!", en: "Hello!" },
      { speaker: "Lin", zh: "你好！你喝茶吗？", py: "Nǐ hǎo! Nǐ hē chá ma?", en: "Hello! Would you like some tea?" },
      { speaker: "You", zh: "喝。谢谢！", py: "Hē. Xièxie!", en: "Yes. Thank you!" },
      { speaker: "Lin", zh: "不客气。", py: "Bú kèqi.", en: "You're welcome." }
    ],
    phrases: [
      ["你好", "Nǐ hǎo", "Hello"],
      ["谢谢", "Xièxie", "Thank you"],
      ["不客气", "Bú kèqi", "You're welcome"],
      ["不用了，谢谢。", "Bú yòng le, xièxie.", "No, thank you."]
    ],
    pattern: {
      title: "A syllable has a sound and a tone",
      explanation: "Pinyin spells pronunciation. The marks show tone: mā stays high, má rises, mǎ is low, and mà falls. Third tone is usually low in connected speech; a full dip and rise is common in isolation. Before another third tone, the first sounds rising: nǐ hǎo → ní hǎo. 不 becomes bú before a fourth tone. 一 usually becomes yí before a fourth tone and yì before tones 1–3. Our pinyin keeps third-tone dictionary marks and shows these common 不/一 changes. Unmarked syllables have a light neutral tone."
    },
    quiz: {
      prompt: "How is the first syllable of 你好 normally pronounced in connected speech?",
      choices: ["With a rising tone, because another third tone follows", "With a falling tone", "With no tone at all"],
      answer: 0,
      explanation: "The first of two adjacent third tones changes to a rising tone. 你好 is written nǐ hǎo in dictionary-tone pinyin and normally sounds ní hǎo."
    },
    challenge: "Say mā, má, mǎ, and mà with four different pitch shapes. Then greet someone, thank them, and politely decline a drink.",
    checklist: ["Make high, rising, low, and falling tones distinct", "Let the first tone in 你好 rise", "Keep the second syllable of 谢谢 light"]
  },
  {
    id: "core-greetings",
    level: 0,
    title: "Greetings and introductions",
    mission: "Meet someone, exchange names, and close the conversation politely.",
    minutes: 6,
    skills: ["Speaking", "Listening"],
    dialogue: [
      { speaker: "Anna", zh: "你好！我叫安娜。", py: "Nǐ hǎo! Wǒ jiào Ānnà.", en: "Hello! My name is Anna." },
      { speaker: "Lin", zh: "你好，安娜！我叫林。", py: "Nǐ hǎo, Ānnà! Wǒ jiào Lín.", en: "Hello, Anna! My name is Lin." },
      { speaker: "Anna", zh: "很高兴认识你。", py: "Hěn gāoxìng rènshi nǐ.", en: "Nice to meet you." },
      { speaker: "Lin", zh: "我也很高兴。", py: "Wǒ yě hěn gāoxìng.", en: "I'm happy to meet you, too." }
    ],
    phrases: [
      ["我叫……", "Wǒ jiào…", "My name is…"],
      ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "What is your name?"],
      ["很高兴认识你。", "Hěn gāoxìng rènshi nǐ.", "Nice to meet you."],
      ["再见！", "Zàijiàn!", "Goodbye!"]
    ],
    pattern: {
      title: "我叫 + your name",
      explanation: "Use 我叫 + name to introduce yourself: 我叫安娜。Ask 你叫什么名字？The question word 什么 stays where the answer would go. 你好 is a general greeting; 您好 (nín hǎo) is a more respectful form. You can finish a brief meeting with 再见。"
    },
    quiz: {
      prompt: "Which sentence introduces your name?",
      choices: ["我很好。", "我叫安娜。", "你叫什么名字？"],
      answer: 1,
      explanation: "我叫安娜 means 'My name is Anna.' 我很好 means 'I'm well,' and 你叫什么名字 asks the other person's name."
    },
    challenge: "Introduce yourself using your own name, ask the other person's name, say 'Nice to meet you,' and say goodbye.",
    checklist: ["Begin with a greeting", "Give your name with 我叫 and ask theirs", "Use a polite meeting phrase and goodbye"]
  },
  {
    id: "core-numbers",
    level: 0,
    title: "Numbers, quantities, and prices",
    mission: "Ask a price and buy two of something.",
    minutes: 8,
    skills: ["Speaking", "Listening", "Reading"],
    dialogue: [
      { speaker: "You", zh: "这个多少钱？", py: "Zhège duōshao qián?", en: "How much is this?" },
      { speaker: "Seller", zh: "十块钱。", py: "Shí kuài qián.", en: "Ten yuan." },
      { speaker: "You", zh: "我要两个。", py: "Wǒ yào liǎng ge.", en: "I'd like two." },
      { speaker: "Seller", zh: "好的，一共二十块。", py: "Hǎo de, yígòng èrshí kuài.", en: "Okay, twenty yuan in total." }
    ],
    phrases: [
      ["多少钱？", "Duōshao qián?", "How much does it cost?"],
      ["这个十块钱。", "Zhège shí kuài qián.", "This costs ten yuan."],
      ["我要两个。", "Wǒ yào liǎng ge.", "I'd like two."],
      ["一共多少钱？", "Yígòng duōshao qián?", "How much is it in total?"]
    ],
    pattern: {
      title: "Number + measure word + item",
      explanation: "Start with 0–10: 零 líng, 一 yī, 二 èr, 三 sān, 四 sì, 五 wǔ, 六 liù, 七 qī, 八 bā, 九 jiǔ, 十 shí. Eleven is 十一 (shíyī); twenty is 二十 (èrshí). Use 两 before most measure words: 两个 (two items), 两杯茶 (liǎng bēi chá, two cups of tea). Use 二 when counting and in 二十. 个 is a common measure word, but other nouns need their own. 块 is the everyday word for yuan in a price."
    },
    quiz: {
      prompt: "How do you order two cups of tea?",
      choices: ["二杯茶。", "两十杯茶。", "两杯茶。"],
      answer: 2,
      explanation: "Use 两 before the measure word 杯: 两杯茶. 二 is used in counting and numbers such as 二十 (twenty)."
    },
    challenge: "Imagine one item costs eight yuan. Ask its price, order two, and say the total price of sixteen yuan.",
    checklist: ["Ask 这个多少钱？", "Order two with 两个", "Build sixteen as 十六 (shíliù)"]
  },
  {
    id: "core-questions",
    level: 0,
    title: "Ask everyday questions",
    mission: "Find a place and ask whether something is available.",
    minutes: 7,
    skills: ["Speaking", "Listening"],
    dialogue: [
      { speaker: "You", zh: "请问，洗手间在哪儿？", py: "Qǐngwèn, xǐshǒujiān zài nǎr?", en: "Excuse me, where is the restroom?" },
      { speaker: "Staff", zh: "在那边。", py: "Zài nàbiān.", en: "It's over there." },
      { speaker: "You", zh: "这里有水吗？", py: "Zhèlǐ yǒu shuǐ ma?", en: "Is there water here?" },
      { speaker: "Staff", zh: "有，在桌子上。", py: "Yǒu, zài zhuōzi shang.", en: "Yes, it's on the table." }
    ],
    phrases: [
      ["你要喝什么？", "Nǐ yào hē shénme?", "What would you like to drink?"],
      ["洗手间在哪儿？", "Xǐshǒujiān zài nǎr?", "Where is the restroom?"],
      ["这里有水吗？", "Zhèlǐ yǒu shuǐ ma?", "Is there water here?"],
      ["这是谁的？", "Zhè shì shéi de?", "Whose is this?"]
    ],
    pattern: {
      title: "Statement + 吗, or a question word",
      explanation: "Add 吗 to a statement for a yes-or-no question: 这里有水 → 这里有水吗？For an information question, put 什么 (what), 哪儿 (where), or 谁 (who) where the answer belongs: 洗手间在那边 → 洗手间在哪儿？Do not add 吗 to these question-word questions. 哪里 (nǎlǐ) also means 'where.' Start with 请问 to politely get someone's attention."
    },
    quiz: {
      prompt: "Which sentence asks 'What would you like to drink?'",
      choices: ["你要喝什么？", "你要喝吗？", "你要喝谁？"],
      answer: 0,
      explanation: "什么 asks 'what' and takes the drink's position after 喝. 你要喝吗 is a yes-or-no question; 谁 means 'who.'"
    },
    challenge: "Ask where the restroom is, whether there is water, and what another person would like to drink.",
    checklist: ["Use 哪儿 to ask about a place", "Add 吗 only to the yes-or-no question", "Use 什么 in the drink's position"]
  },
  {
    id: "core-patterns",
    level: 0,
    title: "Build an everyday sentence",
    mission: "Say what you do, when and where you do it, and what you do not do.",
    minutes: 8,
    skills: ["Speaking", "Writing"],
    dialogue: [
      { speaker: "Lin", zh: "你今天忙吗？", py: "Nǐ jīntiān máng ma?", en: "Are you busy today?" },
      { speaker: "You", zh: "我今天不忙。", py: "Wǒ jīntiān bù máng.", en: "I'm not busy today." },
      { speaker: "Lin", zh: "我们下午去咖啡店吧。", py: "Wǒmen xiàwǔ qù kāfēidiàn ba.", en: "Let's go to a café this afternoon." },
      { speaker: "You", zh: "好，我想喝茶。", py: "Hǎo, wǒ xiǎng hē chá.", en: "Okay, I'd like to drink tea." }
    ],
    phrases: [
      ["我今天喝茶。", "Wǒ jīntiān hē chá.", "I'm drinking tea today."],
      ["我在家学习。", "Wǒ zài jiā xuéxí.", "I study at home."],
      ["我不喝咖啡。", "Wǒ bù hē kāfēi.", "I don't drink coffee."],
      ["我没有时间。", "Wǒ méiyǒu shíjiān.", "I don't have time."]
    ],
    pattern: {
      title: "Who + when + where + action",
      explanation: "A useful basic order is subject + time + 在 + place + verb + object: 我今天在家喝茶 (Wǒ jīntiān zài jiā hē chá, I drink tea at home today). Leave out parts you do not need. For going somewhere, the destination follows 去: 我去咖啡店。Use 不 before many verbs for a general negative: 我不喝咖啡。To say 'do not have,' use 没有: 我没有时间。Adjectives can describe a subject directly: 我很忙 (I'm busy)."
    },
    quiz: {
      prompt: "How do you say 'I don't have time'?",
      choices: ["我不有时间。", "我没有时间。", "我没有是时间。"],
      answer: 1,
      explanation: "没有 is the negative of 有 ('have'). Use 我没有时间, with no extra 是."
    },
    challenge: "Make three sentences: say what you do today, say where you study or drink tea, and say one thing you do not do or do not have.",
    checklist: ["Keep the subject before the action", "Put a time or 在 + place before the action", "Choose 不 for a general action negative or 没有 for 'do not have'"]
  },
  {
    id: "core-repair",
    level: 0,
    title: "Repeat, slow down, and check",
    mission: "Keep a conversation going when you miss or misunderstand something.",
    minutes: 7,
    skills: ["Speaking", "Listening"],
    dialogue: [
      { speaker: "You", zh: "请问，地铁站怎么走？", py: "Qǐngwèn, dìtiězhàn zěnme zǒu?", en: "Excuse me, how do I get to the subway station?" },
      { speaker: "Lin", zh: "先往前走，再往右拐。", py: "Xiān wǎng qián zǒu, zài wǎng yòu guǎi.", en: "First go straight, then turn right." },
      { speaker: "You", zh: "对不起，我没听懂。请说慢一点。", py: "Duìbuqǐ, wǒ méi tīng dǒng. Qǐng shuō màn yìdiǎn.", en: "Sorry, I didn't understand. Please speak a little more slowly." },
      { speaker: "Lin", zh: "好的。往前走，然后右拐。", py: "Hǎo de. Wǎng qián zǒu, ránhòu yòu guǎi.", en: "Okay. Go straight, then turn right." }
    ],
    phrases: [
      ["请再说一遍。", "Qǐng zài shuō yí biàn.", "Please say it again."],
      ["请说慢一点。", "Qǐng shuō màn yìdiǎn.", "Please speak a little more slowly."],
      ["我没听懂。", "Wǒ méi tīng dǒng.", "I didn't understand what you said."],
      ["你的意思是……吗？", "Nǐ de yìsi shì… ma?", "Do you mean…?"]
    ],
    pattern: {
      title: "Explain the problem, then ask for help",
      explanation: "没听懂 means you did not understand what you heard. 没听清 (méi tīng qīng) means you did not hear it clearly. Follow either with 请再说一遍 or 请说慢一点. To check your understanding, use 你的意思是 + your interpretation + 吗？For example: 你的意思是右拐吗？(Nǐ de yìsi shì yòu guǎi ma?, Do you mean turn right?). A short, specific request helps the other person adjust."
    },
    quiz: {
      prompt: "You heard the words but did not understand. Which response asks for useful help?",
      choices: ["我不要。", "我叫林。", "我没听懂。请再说一遍。"],
      answer: 2,
      explanation: "我没听懂 explains the misunderstanding, and 请再说一遍 asks the speaker to repeat. 我不要 declines something; 我叫林 introduces a name."
    },
    challenge: "Imagine you miss some directions. Explain that you did not understand, ask for slower speech or repetition, then check 'Do you mean turn right?'",
    checklist: ["State the difficulty with 我没听懂 or 我没听清", "Make a polite, specific request", "Confirm your interpretation with 你的意思是……吗？"]
  }
];
