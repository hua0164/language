(window.PHENIX_PATHS ||= []).push(
  {
    id: 'travel', title: 'Travel & tourism', group: 'Everyday', icon: '旅',
    summary: 'Find your way, check in, and adjust a trip with confidence.',
    guide: {
      title: 'Travel with a fallback plan',
      steps: [
        'Save your destination in Chinese. Practise asking where it is before leaving.',
        'Ask about direction, journey time, then departure time. Repeat the key detail.',
        'Prepare a second route or activity. Ask whether you can change the plan if needed.'
      ],
      phrases: [
        ['请问，怎么去这里？', 'Qǐngwèn, zěnme qù zhèlǐ?', 'Excuse me, how do I get here?'],
        ['大概要多久？', 'Dàgài yào duōjiǔ?', 'About how long will it take?'],
        ['我再确认一下。', 'Wǒ zài quèrèn yíxià.', 'Let me confirm that once more.'],
        ['如果下雨，可以改时间吗？', 'Rúguǒ xià yǔ, kěyǐ gǎi shíjiān ma?', 'If it rains, can we change the time?']
      ],
      tip: 'Point to a saved place name when pronunciation is difficult. Ask the person to type a station or stop name so you can recognise it later.'
    },
    lessons: [
      {
        id: 'travel-0', level: 0, title: 'Find the metro',
        mission: 'Ask for a metro station and check the walking time.', minutes: 6,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'Traveller', zh: '请问，地铁站在哪儿？', py: 'Qǐngwèn, dìtiězhàn zài nǎr?', en: 'Excuse me, where is the metro station?'},
          {speaker: 'Local', zh: '往前走，然后右转。', py: 'Wǎng qián zǒu, ránhòu yòu zhuǎn.', en: 'Walk straight ahead, then turn right.'},
          {speaker: 'Traveller', zh: '走路要多久？', py: 'Zǒulù yào duōjiǔ?', en: 'How long does it take on foot?'},
          {speaker: 'Local', zh: '大概五分钟。', py: 'Dàgài wǔ fēnzhōng.', en: 'About five minutes.'}
        ],
        phrases: [
          ['地铁站在哪儿？', 'Dìtiězhàn zài nǎr?', 'Where is the metro station?'],
          ['往前走。', 'Wǎng qián zǒu.', 'Walk straight ahead.'],
          ['是左转还是右转？', 'Shì zuǒ zhuǎn háishi yòu zhuǎn?', 'Is it a left turn or a right turn?']
        ],
        pattern: {title: 'Place + 在哪儿？', explanation: 'Put a place before 在哪儿 to ask its location: 地铁站在哪儿？ Try replacing 地铁站 with 出口 (exit).'},
        quiz: {prompt: 'Someone says 然后右转. What should you do next?', choices: ['Turn left', 'Turn right', 'Wait for five minutes'], answer: 1, explanation: '右 is right; 转 is turn; 然后 means then.'},
        challenge: 'Ask where the metro station is, ask the walking time, then repeat a direction you hear.',
        checklist: ['I begin with 请问.', 'I can distinguish 左 from 右.', 'I ask 要多久 to check the journey time.']
      },
      {
        id: 'travel-1', level: 1, title: 'Check in at your hotel',
        mission: 'Give your booking name and confirm your stay and breakfast.', minutes: 8,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'Guest', zh: '你好，我有预订，姓林。', py: 'Nǐ hǎo, wǒ yǒu yùdìng, xìng Lín.', en: 'Hello, I have a reservation under Lin.'},
          {speaker: 'Receptionist', zh: '林先生，您住两晚，对吗？', py: 'Lín xiānsheng, nín zhù liǎng wǎn, duì ma?', en: 'Mr Lin, you are staying two nights, correct?'},
          {speaker: 'Guest', zh: '对。房费包含早餐吗？', py: 'Duì. Fángfèi bāohán zǎocān ma?', en: 'Yes. Does the room rate include breakfast?'},
          {speaker: 'Receptionist', zh: '包含，早餐七点开始。', py: 'Bāohán, zǎocān qī diǎn kāishǐ.', en: 'It does. Breakfast starts at seven.'}
        ],
        phrases: [
          ['我有预订，姓林。', 'Wǒ yǒu yùdìng, xìng Lín.', 'I have a reservation under Lin.'],
          ['我想确认一下退房时间。', 'Wǒ xiǎng quèrèn yíxià tuìfáng shíjiān.', 'I would like to confirm the checkout time.'],
          ['房费包含早餐吗？', 'Fángfèi bāohán zǎocān ma?', 'Does the room rate include breakfast?']
        ],
        pattern: {title: '包含 + what is included', explanation: '包含 means include: 房费包含早餐吗？ asks whether breakfast is included. 我想确认一下 politely introduces a confirmation.'},
        quiz: {prompt: 'The receptionist says 您住两晚，对吗？ What are they checking?', choices: ['Whether you want two rooms', 'Whether breakfast starts at two', 'Whether you are staying two nights'], answer: 2, explanation: '住 means stay; 两晚 means two nights.'},
        challenge: 'Act out a check-in using your own surname. Confirm the number of nights and ask one question about the room rate.',
        checklist: ['I introduce my booking with 我有预订.', 'I use 两晚 for two nights.', 'I ask a specific question about breakfast or checkout.']
      },
      {
        id: 'travel-2', level: 2, title: 'Change a rainy-day trip',
        mission: 'Suggest an alternative activity and check whether the timing works.', minutes: 10,
        skills: ['Speaking', 'Listening', 'Writing'],
        dialogue: [
          {speaker: 'Traveller', zh: '如果明天下雨，我们就去博物馆吧。', py: 'Rúguǒ míngtiān xià yǔ, wǒmen jiù qù bówùguǎn ba.', en: 'If it rains tomorrow, let us go to the museum.'},
          {speaker: 'Friend', zh: '好，不过我下午三点要坐火车。', py: 'Hǎo, búguò wǒ xiàwǔ sān diǎn yào zuò huǒchē.', en: 'Sure, but I have a train to catch at three in the afternoon.'},
          {speaker: 'Traveller', zh: '我们九点出发，来得及吗？', py: 'Wǒmen jiǔ diǎn chūfā, láidejí ma?', en: 'If we set off at nine, will we have enough time?'},
          {speaker: 'Friend', zh: '来得及。我们十二点以前离开就行。', py: "Láidejí. Wǒmen shí'èr diǎn yǐqián líkāi jiù xíng.", en: 'We will. We just need to leave before twelve.'}
        ],
        phrases: [
          ['如果下雨，我们就换个计划。', 'Rúguǒ xià yǔ, wǒmen jiù huàn ge jìhuà.', 'If it rains, we will change the plan.'],
          ['这样来得及吗？', 'Zhèyàng láidejí ma?', 'Will there be enough time if we do that?'],
          ['我们几点以前要离开？', 'Wǒmen jǐ diǎn yǐqián yào líkāi?', 'What time do we need to leave before?']
        ],
        pattern: {title: '如果…就…', explanation: '如果 introduces a condition; 就 gives the response: 如果下雨，我们就去博物馆. 来得及 means having enough time to carry out a plan.'},
        quiz: {prompt: 'What does 我们十二点以前离开就行 mean?', choices: ['Leaving before twelve will be enough.', 'We must arrive exactly at twelve.', 'We should stay for twelve hours.'], answer: 0, explanation: '以前 means before; 就行 means that will be enough.'},
        challenge: 'Write a three-sentence backup plan: name a weather condition, suggest another activity, and set a latest departure time.',
        checklist: ['I connect a condition and a plan with 如果…就….', 'I ask whether the schedule leaves enough time.', 'I use 以前 to give a clear deadline.']
      }
    ]
  },
  {
    id: 'living', title: 'Living abroad', group: 'Everyday', icon: '居',
    summary: 'Handle parcels, home repairs, and everyday conversations with housemates.',
    guide: {
      title: 'Make everyday requests clear',
      steps: [
        'Name the item or problem. Add a photo, collection code, or description when useful.',
        'State the action you need and offer a specific time. Repeat the agreed appointment aloud.',
        'For a shared-home issue, describe what happens and suggest one practical change you can discuss.'
      ],
      phrases: [
        ['我是来取快递的。', 'Wǒ shì lái qǔ kuàidì de.', 'I am here to pick up a parcel.'],
        ['这个怎么用？', 'Zhège zěnme yòng?', 'How do I use this?'],
        ['您什么时候方便？', 'Nín shénme shíhou fāngbiàn?', 'When would be convenient for you?'],
        ['我们商量一下，好吗？', 'Wǒmen shāngliang yíxià, hǎo ma?', 'Can we talk it over?']
      ],
      tip: 'Put a time in writing after a practical conversation. 今天晚上七点 is easier to verify than a vague 晚一点 (a bit later).'
    },
    lessons: [
      {
        id: 'living-0', level: 0, title: 'Pick up a parcel',
        mission: 'Tell a parcel-counter worker why you are there and read a collection code.', minutes: 6,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'Resident', zh: '你好，我来取快递。', py: 'Nǐ hǎo, wǒ lái qǔ kuàidì.', en: 'Hello, I am here to pick up a parcel.'},
          {speaker: 'Worker', zh: '取件码是多少？', py: 'Qǔjiànmǎ shì duōshao?', en: 'What is the collection code?'},
          {speaker: 'Resident', zh: '三八六二。', py: 'Sān bā liù èr.', en: 'Three, eight, six, two.'},
          {speaker: 'Worker', zh: '找到了，是这个小盒子。', py: 'Zhǎodào le, shì zhège xiǎo hézi.', en: 'Found it. It is this small box.'}
        ],
        phrases: [
          ['我来取快递。', 'Wǒ lái qǔ kuàidì.', 'I am here to pick up a parcel.'],
          ['取件码在这里。', 'Qǔjiànmǎ zài zhèlǐ.', 'The collection code is here.'],
          ['请再说一遍。', 'Qǐng zài shuō yí biàn.', 'Please say that again.']
        ],
        pattern: {title: '来 + action', explanation: '来 introduces a visit’s purpose: 我来取快递 means coming to collect a parcel. Read codes digit by digit: 六二 is six-two.'},
        quiz: {prompt: 'A worker asks 取件码是多少？ What should you give them?', choices: ['Your collection code', 'Your preferred delivery day', 'The size of the box'], answer: 0, explanation: '取件 means collecting an item; 码 means code.'},
        challenge: 'Say you have come to pick up a parcel. Invent a four-digit collection code and read each digit clearly.',
        checklist: ['I state my purpose with 我来取快递.', 'I read four separate digits.', 'I can ask for a repetition with 请再说一遍.']
      },
      {
        id: 'living-1', level: 1, title: 'Arrange a tap repair',
        mission: 'Describe a leaking tap and agree on a visit time.', minutes: 8,
        skills: ['Speaking', 'Listening', 'Writing'],
        dialogue: [
          {speaker: 'Resident', zh: '厨房的水龙头一直漏水。', py: 'Chúfáng de shuǐlóngtóu yìzhí lòu shuǐ.', en: 'The kitchen tap keeps leaking.'},
          {speaker: 'Repair worker', zh: '我明天下午可以过去。', py: 'Wǒ míngtiān xiàwǔ kěyǐ guòqu.', en: 'I can come over tomorrow afternoon.'},
          {speaker: 'Resident', zh: '我六点以后才在家，您方便吗？', py: 'Wǒ liù diǎn yǐhòu cái zài jiā, nín fāngbiàn ma?', en: 'I will only be home after six. Would that work for you?'},
          {speaker: 'Repair worker', zh: '可以，那就明天晚上七点。', py: 'Kěyǐ, nà jiù míngtiān wǎnshang qī diǎn.', en: 'Yes. Let us make it seven tomorrow evening.'}
        ],
        phrases: [
          ['厨房的水龙头漏水了。', 'Chúfáng de shuǐlóngtóu lòu shuǐ le.', 'The kitchen tap has started leaking.'],
          ['我六点以后才在家。', 'Wǒ liù diǎn yǐhòu cái zài jiā.', 'I will only be home after six.'],
          ['我发张照片给您。', 'Wǒ fā zhāng zhàopiàn gěi nín.', 'I will send you a photo.']
        ],
        pattern: {title: 'Time + 以后才…', explanation: '以后 means after; 才 stresses not until then: 六点以后才在家. 一直 describes an ongoing situation, as in 一直漏水 (keeps leaking).'},
        quiz: {prompt: 'You say 我六点以后才在家. Which visit fits your availability?', choices: ['Tomorrow at four in the afternoon', 'Tomorrow at seven in the evening', 'Tomorrow at noon'], answer: 1, explanation: '六点以后 means after six. Seven in the evening fits.'},
        challenge: 'Write a repair message naming the room, the problem, and your availability. Add an appointment confirmation.',
        checklist: ['I identify the faulty item and its room.', 'I give an exact day and time.', 'I repeat the agreed appointment in my confirmation.']
      },
      {
        id: 'living-2', level: 2, title: 'Agree on quiet hours',
        mission: 'Raise a housemate issue politely and negotiate a workable compromise.', minutes: 10,
        skills: ['Speaking', 'Listening', 'Writing'],
        dialogue: [
          {speaker: 'Housemate A', zh: '我最近要早起，能商量一下晚上的音量吗？', py: 'Wǒ zuìjìn yào zǎoqǐ, néng shāngliang yíxià wǎnshang de yīnliàng ma?', en: 'I need to get up early these days. Could we discuss the volume in the evenings?'},
          {speaker: 'Housemate B', zh: '不好意思，我没注意。几点以后要小声一点？', py: 'Bù hǎoyìsi, wǒ méi zhùyì. Jǐ diǎn yǐhòu yào xiǎoshēng yìdiǎn?', en: 'Sorry, I had not noticed. After what time should I keep it down?'},
          {speaker: 'Housemate A', zh: '虽然周末不用早起，但十点以后我想安静一点。', py: 'Suīrán zhōumò bú yòng zǎoqǐ, dàn shí diǎn yǐhòu wǒ xiǎng ānjìng yìdiǎn.', en: 'Although I do not need to get up early at weekends, I would like it quieter after ten.'},
          {speaker: 'Housemate B', zh: '没问题，十点以后我戴耳机。', py: 'Méi wèntí, shí diǎn yǐhòu wǒ dài ěrjī.', en: 'No problem. I will wear headphones after ten.'}
        ],
        phrases: [
          ['能商量一下吗？', 'Néng shāngliang yíxià ma?', 'Could we talk it over?'],
          ['能不能小声一点？', 'Néng bu néng xiǎoshēng yìdiǎn?', 'Could you keep it down a little?'],
          ['这样对你方便吗？', 'Zhèyàng duì nǐ fāngbiàn ma?', 'Would that arrangement work for you?']
        ],
        pattern: {title: '虽然…但…', explanation: '虽然 acknowledges a fact; 但 adds a contrasting point. Here weekend flexibility contrasts with a need for quiet. 能不能…一点 softens a request.'},
        quiz: {prompt: 'Which sentence invites a discussion about a shared-home problem?', choices: ['你必须马上搬走。', '你从来不听我说话。', '我们能商量一下吗？'], answer: 2, explanation: '商量一下 means talk it over. It invites discussion without an accusation.'},
        challenge: 'Prepare four housemate lines: explain your need, request a change, acknowledge their needs, and agree on one action.',
        checklist: ['I describe my own need before making the request.', 'I soften the request with 能不能 or 一点.', 'I finish with an action and a clear time.']
      }
    ]
  },
  {
    id: 'dining', title: 'Food & restaurants', group: 'Everyday', icon: '食',
    summary: 'Order a meal, share dishes, and sort out a mistaken order politely.',
    guide: {
      title: 'Build a useful restaurant exchange',
      steps: [
        'Choose a dish and practise its measure word: 一碗面, 一份饭, or 一杯茶.',
        'Add one clear preference, then confirm the portion size or total before ordering for a group.',
        'If something differs from your order, name what you ordered and ask for the specific change you need.'
      ],
      phrases: [
        ['我要一碗面。', 'Wǒ yào yì wǎn miàn.', 'I would like a bowl of noodles.'],
        ['请问，这个辣吗？', 'Qǐngwèn, zhège là ma?', 'Excuse me, is this spicy?'],
        ['这些够三个人吃吗？', 'Zhèxiē gòu sān ge rén chī ma?', 'Is this enough for three people?'],
        ['麻烦您帮我看一下。', 'Máfan nín bāng wǒ kàn yíxià.', 'Could you please take a look for me?']
      ],
      tip: '少辣 means less spicy; 不放辣椒 asks for no chilli to be added. State the preparation you want clearly rather than relying on a vague preference.'
    },
    lessons: [
      {
        id: 'dining-0', level: 0, title: 'Order noodles your way',
        mission: 'Order one bowl of noodles and make a simple ingredient request.', minutes: 6,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'Customer', zh: '你好，我要一碗牛肉面。', py: 'Nǐ hǎo, wǒ yào yì wǎn niúròumiàn.', en: 'Hello, I would like a bowl of beef noodles.'},
          {speaker: 'Server', zh: '好的，要香菜吗？', py: 'Hǎo de, yào xiāngcài ma?', en: 'Sure. Would you like coriander?'},
          {speaker: 'Customer', zh: '不要香菜，也不要辣椒。', py: 'Bú yào xiāngcài, yě bú yào làjiāo.', en: 'No coriander, and no chilli either.'},
          {speaker: 'Server', zh: '好，一碗牛肉面，不放香菜和辣椒。', py: 'Hǎo, yì wǎn niúròumiàn, bú fàng xiāngcài hé làjiāo.', en: 'All right, one bowl of beef noodles with no coriander or chilli added.'}
        ],
        phrases: [
          ['我要一碗牛肉面。', 'Wǒ yào yì wǎn niúròumiàn.', 'I would like a bowl of beef noodles.'],
          ['不要香菜。', 'Bú yào xiāngcài.', 'No coriander, please.'],
          ['请少放一点辣椒。', 'Qǐng shǎo fàng yìdiǎn làjiāo.', 'Please add a little less chilli.']
        ],
        pattern: {title: '一 + measure word + food', explanation: '碗 counts bowls: 一碗牛肉面. 不要 declines an ingredient. 也 adds a parallel request: 也不要辣椒 (no chilli either).'},
        quiz: {prompt: 'Which phrase orders one bowl of beef noodles?', choices: ['一杯牛肉面', '一碗牛肉面', '一个牛肉面馆'], answer: 1, explanation: '碗 counts bowls; 杯 counts cups. 面馆 means noodle restaurant.'},
        challenge: 'Order a bowl of noodles, decline one ingredient, and repeat the server’s confirmation in your own words.',
        checklist: ['I use 一碗 with noodles.', 'I put 不要 before an ingredient.', 'I check that the server repeats my preference correctly.']
      },
      {
        id: 'dining-1', level: 1, title: 'Order dishes to share',
        mission: 'Choose portions for a group and agree how to handle the bill.', minutes: 8,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'Diner', zh: '我们三个人，点两个菜一个汤够吗？', py: 'Wǒmen sān ge rén, diǎn liǎng ge cài yí ge tāng gòu ma?', en: 'There are three of us. Would two dishes and one soup be enough?'},
          {speaker: 'Server', zh: '这两个菜分量挺大的，应该够。', py: 'Zhè liǎng ge cài fènliàng tǐng dà de, yīnggāi gòu.', en: 'These two dishes are quite large. That should be enough.'},
          {speaker: 'Diner', zh: '那先点这些，不够再加。', py: 'Nà xiān diǎn zhèxiē, bú gòu zài jiā.', en: 'Then let us order these first and add more if we need to.'},
          {speaker: 'Friend', zh: '好，吃完我们再算，每个人付一样多。', py: 'Hǎo, chī wán wǒmen zài suàn, měi ge rén fù yíyàng duō.', en: 'Sure. We can work it out after eating and each pay the same amount.'}
        ],
        phrases: [
          ['这个菜分量大吗？', 'Zhège cài fènliàng dà ma?', 'Is this dish a large portion?'],
          ['先点这些，不够再加。', 'Xiān diǎn zhèxiē, bú gòu zài jiā.', 'Let us order these first and add more if needed.'],
          ['我们平摊吧。', 'Wǒmen píngtān ba.', 'Let us split the cost equally.']
        ],
        pattern: {title: '先…再…', explanation: '先 marks the first step; 再 marks the next. 不够再加 means add more if it is insufficient. 平摊 means sharing a cost equally.'},
        quiz: {prompt: 'What plan does 先点这些，不够再加 describe?', choices: ['Order these first, then add more if needed.', 'Order every dish immediately.', 'Cancel the order and leave.'], answer: 0, explanation: '先 means first. 不够再加 means add more if it is not enough.'},
        challenge: 'Plan a meal for three people. Ask about portions, suggest an initial order, and propose an equal split of the bill.',
        checklist: ['I state how many people are eating.', 'I ask about portions before ordering more.', 'I make the payment arrangement explicit.']
      },
      {
        id: 'dining-2', level: 2, title: 'Resolve a mistaken order',
        mission: 'Explain a mismatch calmly and ask for the dish you ordered.', minutes: 9,
        skills: ['Speaking', 'Listening', 'Writing'],
        dialogue: [
          {speaker: 'Customer', zh: '不好意思，我点的是番茄鸡蛋面，不是牛肉面。', py: 'Bù hǎoyìsi, wǒ diǎn de shì fānqié jīdàn miàn, bú shì niúròumiàn.', en: 'Excuse me, I ordered tomato and egg noodles, not beef noodles.'},
          {speaker: 'Server', zh: '抱歉，可能是送错了。我帮您换。', py: 'Bàoqiàn, kěnéng shì sòng cuò le. Wǒ bāng nín huàn.', en: 'Sorry, it may have gone to the wrong table. I will replace it for you.'},
          {speaker: 'Customer', zh: '谢谢。重新做大概要多久？', py: 'Xièxie. Chóngxīn zuò dàgài yào duōjiǔ?', en: 'Thank you. About how long will it take to make it again?'},
          {speaker: 'Server', zh: '大概五分钟，给您添麻烦了。', py: 'Dàgài wǔ fēnzhōng, gěi nín tiān máfan le.', en: 'About five minutes. Sorry for the inconvenience.'}
        ],
        phrases: [
          ['我点的是这个。', 'Wǒ diǎn de shì zhège.', 'This is what I ordered.'],
          ['可能是弄错了。', 'Kěnéng shì nòng cuò le.', 'There may have been a mix-up.'],
          ['麻烦您帮我换一下。', 'Máfan nín bāng wǒ huàn yíxià.', 'Could you please replace it for me?']
        ],
        pattern: {title: '我点的是…，不是…', explanation: '我点的 means what I ordered. 是…不是… contrasts the intended and received dishes. 可能 (possibly) softens your explanation of a mix-up.'},
        quiz: {prompt: 'Which sentence both identifies the mismatch and stays polite?', choices: ['你们怎么什么都做不好？', '算了，我什么都没点。', '不好意思，我点的是番茄鸡蛋面。'], answer: 2, explanation: 'It politely names the dish ordered, giving staff a detail to check.'},
        challenge: 'Correct a wrong dish: open politely, name your order, request a replacement, and ask about the wait.',
        checklist: ['I name what I ordered, not only what is wrong.', 'I make one clear request for a replacement.', 'I ask how long the replacement will take.']
      }
    ]
  },
  {
    id: 'friends', title: 'Making friends', group: 'Connections', icon: '友',
    summary: 'Introduce yourself, arrange a meetup, and keep a friendship moving.',
    guide: {
      title: 'Turn an introduction into a conversation',
      steps: [
        'Share your name and a real interest. Ask an easy follow-up about the other person.',
        'Invite them to an activity with a day and time. Allow room for another option.',
        'Follow up with a short message tied to something you discussed. Keep the invitation easy to decline.'
      ],
      phrases: [
        ['你平时喜欢做什么？', 'Nǐ píngshí xǐhuan zuò shénme?', 'What do you like doing in your free time?'],
        ['我也喜欢这个。', 'Wǒ yě xǐhuan zhège.', 'I like that too.'],
        ['你周末有空吗？', 'Nǐ zhōumò yǒu kòng ma?', 'Are you free this weekend?'],
        ['不方便也没关系。', 'Bù fāngbiàn yě méi guānxi.', 'It is fine if that does not work for you.']
      ],
      tip: 'Answer your own question briefly too. A small shared detail gives the other person something to respond to and keeps an introduction from feeling like an interview.'
    },
    lessons: [
      {
        id: 'friends-0', level: 0, title: 'Meet someone at a club',
        mission: 'Introduce yourself and discover a shared interest.', minutes: 6,
        skills: ['Speaking', 'Listening'],
        dialogue: [
          {speaker: 'Lin', zh: '你好，我叫林安。你叫什么名字？', py: 'Nǐ hǎo, wǒ jiào Lín Ān. Nǐ jiào shénme míngzi?', en: 'Hi, my name is Lin An. What is your name?'},
          {speaker: 'Xiaoyu', zh: '我叫小雨，很高兴认识你。', py: 'Wǒ jiào Xiǎoyǔ, hěn gāoxìng rènshi nǐ.', en: 'My name is Xiaoyu. Nice to meet you.'},
          {speaker: 'Lin', zh: '我喜欢摄影，你呢？', py: 'Wǒ xǐhuan shèyǐng, nǐ ne?', en: 'I like photography. What about you?'},
          {speaker: 'Xiaoyu', zh: '我也喜欢！你常拍什么？', py: 'Wǒ yě xǐhuan! Nǐ cháng pāi shénme?', en: 'I do too! What do you often photograph?'}
        ],
        phrases: [
          ['我叫林安。', 'Wǒ jiào Lín Ān.', 'My name is Lin An.'],
          ['你呢？', 'Nǐ ne?', 'What about you?'],
          ['我也喜欢摄影。', 'Wǒ yě xǐhuan shèyǐng.', 'I like photography too.']
        ],
        pattern: {title: '我喜欢…，你呢？', explanation: 'Share an interest with 我喜欢, then ask 你呢？ for their answer. 也 before 喜欢 shows a shared interest: 我也喜欢摄影.'},
        quiz: {prompt: 'You say 我喜欢摄影，你呢？ What does 你呢 invite?', choices: ['The other person to leave', 'The other person to share their interest', 'The other person to spell your name'], answer: 1, explanation: '你呢？ returns the topic to the other person, asking about their interests.'},
        challenge: 'Give your name and one real hobby. Ask 你呢？, then ask one follow-up about the answer.',
        checklist: ['I introduce myself with 我叫.', 'I share a specific interest.', 'I ask a follow-up linked to the other person’s answer.']
      },
      {
        id: 'friends-1', level: 1, title: 'Make a weekend plan',
        mission: 'Invite a friend out and find a time that suits both of you.', minutes: 8,
        skills: ['Speaking', 'Listening', 'Writing'],
        dialogue: [
          {speaker: 'Lin', zh: '你周六下午有空吗？一起喝咖啡吧。', py: 'Nǐ zhōuliù xiàwǔ yǒu kòng ma? Yìqǐ hē kāfēi ba.', en: 'Are you free on Saturday afternoon? Let us get coffee.'},
          {speaker: 'Xiaoyu', zh: '周六我有事，周日可以吗？', py: 'Zhōuliù wǒ yǒu shì, zhōurì kěyǐ ma?', en: 'I have something on Saturday. Would Sunday work?'},
          {speaker: 'Lin', zh: '可以，要不我们周日两点见吧？', py: 'Kěyǐ, yàobù wǒmen zhōurì liǎng diǎn jiàn ba?', en: 'Yes. How about meeting at two on Sunday?'},
          {speaker: 'Xiaoyu', zh: '好，就在地铁站旁边那家店。', py: 'Hǎo, jiù zài dìtiězhàn pángbiān nà jiā diàn.', en: 'Great, at that café beside the metro station.'}
        ],
        phrases: [
          ['你周六下午有空吗？', 'Nǐ zhōuliù xiàwǔ yǒu kòng ma?', 'Are you free on Saturday afternoon?'],
          ['要不我们周日见吧？', 'Yàobù wǒmen zhōurì jiàn ba?', 'How about meeting on Sunday?'],
          ['那就周日两点见。', 'Nà jiù zhōurì liǎng diǎn jiàn.', 'Then let us meet at two on Sunday.']
        ],
        pattern: {title: '要不…吧？', explanation: '要不…吧？ suggests an option. 那就… confirms it once both people agree. In 有空 (have free time), 空 is pronounced kòng.'},
        quiz: {prompt: 'Your friend cannot meet on Saturday. Which reply suggests an alternative?', choices: ['要不我们周日见吧？', '你为什么不来？', '周六已经过去了。'], answer: 0, explanation: '要不…吧？ offers Sunday as another option.'},
        challenge: 'Write three messages: invite a friend, offer another day, and confirm a time and place.',
        checklist: ['My invitation names an activity.', 'I can offer another day with 要不…吧？.', 'My final message includes the day, time, and place.']
      },
      {
        id: 'friends-2', level: 2, title: 'Reconnect after a late reply',
        mission: 'Acknowledge a delayed reply and reopen a conversation without pressure.', minutes: 9,
        skills: ['Speaking', 'Reading', 'Writing'],
        dialogue: [
          {speaker: 'Lin', zh: '不好意思，最近有点忙，一直没回你。', py: 'Bù hǎoyìsi, zuìjìn yǒudiǎn máng, yìzhí méi huí nǐ.', en: 'Sorry, I have been a bit busy lately and have not replied.'},
          {speaker: 'Xiaoyu', zh: '没关系，你有空再回就好。', py: 'Méi guānxi, nǐ yǒu kòng zài huí jiù hǎo.', en: 'No worries. Just reply when you have time.'},
          {speaker: 'Lin', zh: '上次你说的展览，我还是很想去。', py: 'Shàng cì nǐ shuō de zhǎnlǎn, wǒ háishi hěn xiǎng qù.', en: 'I would still really like to go to that exhibition you mentioned.'},
          {speaker: 'Xiaoyu', zh: '我也是！等你忙完，我们再约时间。', py: 'Wǒ yě shì! Děng nǐ máng wán, wǒmen zài yuē shíjiān.', en: 'Me too! When you are less busy, we can arrange a time.'}
        ],
        phrases: [
          ['抱歉，现在才回你。', 'Bàoqiàn, xiànzài cái huí nǐ.', 'Sorry I am only replying now.'],
          ['有空再回就好。', 'Yǒu kòng zài huí jiù hǎo.', 'Just reply when you have time.'],
          ['等你忙完，我们再约。', 'Děng nǐ máng wán, wǒmen zài yuē.', 'Let us make plans once you are less busy.']
        ],
        pattern: {title: '等…，再…', explanation: '等 gives a condition to wait for; 再 gives the later action: 等你忙完，我们再约. 现在才回你 highlights a delayed reply.'},
        quiz: {prompt: 'What does 有空再回就好 communicate here?', choices: ['Reply immediately.', 'Do not contact me again.', 'You can reply when you have time.'], answer: 2, explanation: '有空 means having free time. 再回就好 allows a later reply.'},
        challenge: 'Write a follow-up: acknowledge your delayed reply, mention a shared topic, and suggest reconnecting when convenient.',
        checklist: ['I acknowledge the delay without a long excuse.', 'I mention a specific shared topic.', 'I leave room for the other person’s schedule.']
      }
    ]
  },
  {
    id: 'family', title: 'Family & heritage', group: 'Connections', icon: '亲',
    summary: 'Talk about relatives, explore family traditions, and pass on a memory.',
    guide: {
      title: 'Start a family story collection',
      steps: [
        'Choose a family photo. Ask who each person is; write their name and family term.',
        'Ask about a recurring event or dish. Follow up with who, when, and how.',
        'Ask permission to write down a short memory. Retell it in three sentences and check the details with your relative.'
      ],
      phrases: [
        ['照片里这个人是谁？', 'Zhàopiàn lǐ zhège rén shì shéi?', 'Who is this person in the photo?'],
        ['我们家以前怎么过年？', 'Wǒmen jiā yǐqián zěnme guò nián?', 'How did our family celebrate the New Year in the past?'],
        ['您小时候住在哪儿？', 'Nín xiǎoshíhou zhù zài nǎr?', 'Where did you live as a child?'],
        ['我可以把这个故事写下来吗？', 'Wǒ kěyǐ bǎ zhège gùshi xiě xiàlai ma?', 'May I write this story down?']
      ],
      tip: 'Family terms vary by region and household. Learn the terms your family actually uses, and ask which side of the family a relative belongs to when you are unsure.'
    },
    lessons: [
      {
        id: 'family-0', level: 0, title: 'Name people in a photo',
        mission: 'Identify relatives in a photo and describe one relationship.', minutes: 6,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'Learner', zh: '照片里这是谁？', py: 'Zhàopiàn lǐ zhè shì shéi?', en: 'Who is this in the photo?'},
          {speaker: 'Relative', zh: '这是你姨妈，她是你妈妈的姐姐。', py: 'Zhè shì nǐ yímā, tā shì nǐ māma de jiějie.', en: 'This is your aunt. She is your mother’s older sister.'},
          {speaker: 'Learner', zh: '旁边是我哥哥吗？', py: 'Pángbiān shì wǒ gēge ma?', en: 'Is that my older brother beside her?'},
          {speaker: 'Relative', zh: '对，那时候他才五岁。', py: 'Duì, nà shíhou tā cái wǔ suì.', en: 'Yes. He was only five then.'}
        ],
        phrases: [
          ['这是谁？', 'Zhè shì shéi?', 'Who is this?'],
          ['她是我妈妈的姐姐。', 'Tā shì wǒ māma de jiějie.', 'She is my mother’s older sister.'],
          ['这是我哥哥。', 'Zhè shì wǒ gēge.', 'This is my older brother.']
        ],
        pattern: {title: 'Person + 的 + relationship', explanation: '的 links relationships: 妈妈的姐姐 is mother’s older sister, called 姨妈 here. 哥哥 means older brother; 姐姐 means older sister.'},
        quiz: {prompt: 'In the dialogue, who is 姨妈?', choices: ['The father’s younger brother', 'The mother’s older sister', 'The learner’s older brother'], answer: 1, explanation: '妈妈的姐姐 means mother’s older sister.'},
        challenge: 'Choose a real or invented family photo. Introduce two people and explain one relationship with 的.',
        checklist: ['I can ask 这是谁？.', 'I distinguish an older brother from an older sister.', 'I explain one relationship using 的.']
      },
      {
        id: 'family-1', level: 1, title: 'Ask about a family tradition',
        mission: 'Explore what your family does for a celebration and offer to join in.', minutes: 8,
        skills: ['Speaking', 'Listening', 'Writing'],
        dialogue: [
          {speaker: 'Learner', zh: '我们家过年有什么习惯？', py: 'Wǒmen jiā guò nián yǒu shénme xíguàn?', en: 'What traditions does our family have for the New Year?'},
          {speaker: 'Relative', zh: '我们每次都一起包饺子。', py: 'Wǒmen měi cì dōu yìqǐ bāo jiǎozi.', en: 'We make dumplings together every time.'},
          {speaker: 'Learner', zh: '谁教你包的？今年我也想学。', py: 'Shéi jiāo nǐ bāo de? Jīnnián wǒ yě xiǎng xué.', en: 'Who taught you to make them? I would like to learn this year too.'},
          {speaker: 'Relative', zh: '是你外婆教的。今年我们一起做。', py: 'Shì nǐ wàipó jiāo de. Jīnnián wǒmen yìqǐ zuò.', en: 'Your maternal grandmother taught me. Let us make them together this year.'}
        ],
        phrases: [
          ['我们家有什么习惯？', 'Wǒmen jiā yǒu shénme xíguàn?', 'What traditions does our family have?'],
          ['每次都一起做吗？', 'Měi cì dōu yìqǐ zuò ma?', 'Do you do it together every time?'],
          ['你能教我吗？', 'Nǐ néng jiāo wǒ ma?', 'Could you teach me?']
        ],
        pattern: {title: '每次都…', explanation: '每次都 means on every occasion. 我们每次都一起包饺子 describes this family’s practice. 谁教你的？ asks who passed on a skill.'},
        quiz: {prompt: 'What does 我们每次都一起包饺子 tell you?', choices: ['They make dumplings together on each occasion.', 'Every family makes dumplings.', 'They will try dumplings for the first time.'], answer: 0, explanation: '我们 refers to this group. 每次都 describes their repeated practice.'},
        challenge: 'Ask a relative about one celebration. Write three notes: what they do, who taught them, and how you could take part.',
        checklist: ['I ask about our family rather than assuming a custom.', 'I use 每次都 for a repeated activity.', 'I ask who taught the tradition and offer to learn.']
      },
      {
        id: 'family-2', level: 2, title: 'Retell a grandparent’s memory',
        mission: 'Ask about the past and retell a short memory while naming your source.', minutes: 10,
        skills: ['Speaking', 'Listening', 'Writing'],
        dialogue: [
          {speaker: 'Learner', zh: '爷爷，您小时候怎么去上学？', py: 'Yéye, nín xiǎoshíhou zěnme qù shàngxué?', en: 'Grandpa, how did you get to school when you were a child?'},
          {speaker: 'Grandfather', zh: '我每天走路去，路上要半个小时。', py: 'Wǒ měitiān zǒulù qù, lùshang yào bàn ge xiǎoshí.', en: 'I walked every day. It took half an hour on the way.'},
          {speaker: 'Learner', zh: '听您这么说，那时候上学真不容易。', py: 'Tīng nín zhème shuō, nà shíhou shàngxué zhēn bù róngyì.', en: 'From what you have said, getting to school was really not easy then.'},
          {speaker: 'Grandfather', zh: '是啊，不过一路上有朋友作伴，也很开心。', py: 'Shì a, búguò yí lùshang yǒu péngyou zuòbàn, yě hěn kāixīn.', en: 'Yes, but I had friends for company along the way, so it was fun too.'}
        ],
        phrases: [
          ['听爷爷说，他小时候走路上学。', 'Tīng yéye shuō, tā xiǎoshíhou zǒulù shàngxué.', 'Grandpa says he walked to school as a child.'],
          ['那时候和现在有什么不同？', 'Nà shíhou hé xiànzài yǒu shénme bùtóng?', 'What was different between then and now?'],
          ['我这样理解对吗？', 'Wǒ zhèyàng lǐjiě duì ma?', 'Have I understood that correctly?']
        ],
        pattern: {title: '听 + person + 说…', explanation: '听爷爷说 names Grandpa as your source. 小时候 means in childhood; 那时候 anchors later details in that period.'},
        quiz: {prompt: 'Why begin a retelling with 听爷爷说？', choices: ['To say Grandpa heard you speak', 'To claim you experienced the event yourself', 'To show Grandpa is the source of the story'], answer: 2, explanation: '听爷爷说 means you heard it from Grandpa, naming the story’s source.'},
        challenge: 'Retell the memory in three sentences: name Grandpa as your source, describe his journey, and mention his friends.',
        checklist: ['I identify who told me the memory.', 'I preserve the journey time accurately.', 'I include the speaker’s feelings without adding invented details.']
      }
    ]
  },
  {
    id: 'online', title: 'Online & gaming', group: 'Connections', icon: '游',
    summary: 'Join a lobby, coordinate a round, and keep group chat comfortable.',
    guide: {
      title: 'Keep online messages easy to act on',
      steps: [
        'Practise a greeting, sound check, and request to wait before joining voice chat.',
        'During a round, give one location and one action. Check teammates are ready before changing plans.',
        'If chat becomes uncomfortable, name the behaviour and state the boundary you want in calm, direct words.'
      ],
      phrases: [
        ['听得到我说话吗？', 'Tīngdedào wǒ shuōhuà ma?', 'Can you hear me?'],
        ['等我一下。', 'Děng wǒ yíxià.', 'Wait a moment for me.'],
        ['我们先集合。', 'Wǒmen xiān jíhé.', 'Let us group up first.'],
        ['请别刷屏。', 'Qǐng bié shuāpíng.', 'Please do not flood the chat.']
      ],
      tip: 'Start with clear standard Mandarin. Community slang changes quickly; ask 这个词是什么意思？ (What does this word mean?) when a shortcut or meme is unfamiliar.'
    },
    lessons: [
      {
        id: 'online-0', level: 0, title: 'Join a game lobby',
        mission: 'Check your microphone and tell teammates when you are ready.', minutes: 6,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'New player', zh: '大家好，听得到我说话吗？', py: 'Dàjiā hǎo, tīngdedào wǒ shuōhuà ma?', en: 'Hi everyone, can you hear me?'},
          {speaker: 'Teammate', zh: '听得到，你准备好了吗？', py: 'Tīngdedào, nǐ zhǔnbèi hǎo le ma?', en: 'Yes. Are you ready?'},
          {speaker: 'New player', zh: '等我一下，我还没准备好。', py: 'Děng wǒ yíxià, wǒ hái méi zhǔnbèi hǎo.', en: 'Give me a moment. I am not ready yet.'},
          {speaker: 'New player', zh: '好了，可以开始了！', py: 'Hǎo le, kěyǐ kāishǐ le!', en: 'Ready! We can start!'}
        ],
        phrases: [
          ['听得到吗？', 'Tīngdedào ma?', 'Can you hear me?'],
          ['我还没准备好。', 'Wǒ hái méi zhǔnbèi hǎo.', 'I am not ready yet.'],
          ['可以开始了。', 'Kěyǐ kāishǐ le.', 'We can start now.']
        ],
        pattern: {title: '还没 + completed action', explanation: '还没 means not yet. 准备好 means finish getting ready: 我还没准备好 says you are not ready. When ready, say 我准备好了.'},
        quiz: {prompt: 'A teammate says 我还没准备好. What should you understand?', choices: ['They have already left.', 'They are not ready yet.', 'They cannot hear anyone.'], answer: 1, explanation: '还没 means not yet; 准备好 means ready.'},
        challenge: 'Practise a lobby check: greet the group, ask if they can hear you, ask them to wait, then announce you are ready.',
        checklist: ['I open with 大家好.', 'I distinguish 还没准备好 from 准备好了.', 'I announce clearly when the game can begin.']
      },
      {
        id: 'online-1', level: 1, title: 'Coordinate a team round',
        mission: 'Give a short location call and agree on the order of two team actions.', minutes: 8,
        skills: ['Speaking', 'Listening', 'Reading'],
        dialogue: [
          {speaker: 'Player A', zh: '我们先在桥边集合，别急。', py: 'Wǒmen xiān zài qiáo biān jíhé, bié jí.', en: 'Let us gather beside the bridge first. No rush.'},
          {speaker: 'Player B', zh: '我在左边，十秒以后到。', py: 'Wǒ zài zuǒbiān, shí miǎo yǐhòu dào.', en: 'I am on the left. I will be there in ten seconds.'},
          {speaker: 'Player A', zh: '等人齐了，再一起去拿旗子。', py: 'Děng rén qí le, zài yìqǐ qù ná qízi.', en: 'Once everyone is here, we will go get the flag together.'},
          {speaker: 'Player B', zh: '收到，我到了就告诉你。', py: 'Shōudào, wǒ dào le jiù gàosu nǐ.', en: 'Got it. I will tell you as soon as I arrive.'}
        ],
        phrases: [
          ['先在桥边集合。', 'Xiān zài qiáo biān jíhé.', 'Gather beside the bridge first.'],
          ['等人齐了再走。', 'Děng rén qí le zài zǒu.', 'Wait until everyone is here before moving.'],
          ['收到，我马上到。', 'Shōudào, wǒ mǎshàng dào.', 'Got it. I will be there shortly.']
        ],
        pattern: {title: '等…了，再…', explanation: '等人齐了 means wait until everyone is here. 再 puts the next action after that condition. 收到 briefly acknowledges a team message.'},
        quiz: {prompt: 'What is the team’s agreed order?', choices: ['Gather at the bridge, then get the flag together.', 'Get the flag alone, then find the bridge.', 'Wait ten minutes, then leave the game.'], answer: 0, explanation: '先…集合 puts gathering first. Wait for everyone before getting the flag.'},
        challenge: 'Give a meeting location, a wait condition, and the next action. Reply with your arrival estimate.',
        checklist: ['I give a specific landmark.', 'I use 等…再… to prevent an early start.', 'I acknowledge the plan and state when I will arrive.']
      },
      {
        id: 'online-2', level: 2, title: 'Set a group-chat boundary',
        mission: 'Ask someone to stop an unwanted joke and agree on a clear chat norm.', minutes: 10,
        skills: ['Speaking', 'Reading', 'Writing'],
        dialogue: [
          {speaker: 'Player A', zh: '刚才那个玩笑让我有点不舒服。', py: 'Gāngcái nàge wánxiào ràng wǒ yǒudiǎn bù shūfu.', en: 'That joke just now made me a bit uncomfortable.'},
          {speaker: 'Player B', zh: '抱歉，我没想到。以后不说了。', py: 'Bàoqiàn, wǒ méi xiǎngdào. Yǐhòu bù shuō le.', en: 'Sorry, I had not realised. I will not say it again.'},
          {speaker: 'Player A', zh: '谢谢。开玩笑可以，但别拿口音开玩笑。', py: 'Xièxie. Kāi wánxiào kěyǐ, dàn bié ná kǒuyīn kāi wánxiào.', en: 'Thank you. Joking is fine, but please do not make jokes about accents.'},
          {speaker: 'Player B', zh: '明白，我们继续玩吧。', py: 'Míngbai, wǒmen jìxù wán ba.', en: 'Understood. Let us keep playing.'}
        ],
        phrases: [
          ['这让我有点不舒服。', 'Zhè ràng wǒ yǒudiǎn bù shūfu.', 'That makes me a bit uncomfortable.'],
          ['请别拿口音开玩笑。', 'Qǐng bié ná kǒuyīn kāi wánxiào.', 'Please do not make jokes about accents.'],
          ['我们换个话题吧。', 'Wǒmen huàn ge huàtí ba.', 'Let us change the subject.']
        ],
        pattern: {title: '…可以，但别…', explanation: 'Accept an activity and set a limit: 开玩笑可以，但别拿口音开玩笑. 别 introduces what you want someone to stop. Name the behaviour clearly.'},
        quiz: {prompt: 'What boundary does 开玩笑可以，但别拿口音开玩笑 set?', choices: ['Nobody may speak in the chat.', 'Only one accent is allowed.', 'Jokes are fine, but not jokes about accents.'], answer: 2, explanation: '可以 accepts joking; 但别 sets a limit on jokes targeting accents.'},
        challenge: 'Write two calm chat messages: describe an unwanted behaviour and request a specific change. Add a possible respectful reply.',
        checklist: ['I describe the behaviour rather than insulting a person.', 'I use 请别 or 但别 for a clear boundary.', 'I can acknowledge a boundary with 明白 or 抱歉.']
      }
    ]
  }
);
