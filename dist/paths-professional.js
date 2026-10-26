(window.PHENIX_PATHS||=[]).push(
{
id:'work',
title:'Working with colleagues',
group:'Work & study',
icon:'工',
summary:'Meet your team, coordinate meetings, and explain progress clearly.',
guide:{
title:'Make everyday teamwork easier',
steps:[
'Introduce your name and team, then ask a colleague one simple question.',
'Repeat a meeting time or task in your own words to check the details.',
'Give a short update: what is finished, what comes next, and what help you need.'
],
phrases:[
['我负责这个项目。','Wǒ fùzé zhège xiàngmù.','I am responsible for this project.'],
['我们几点开会？','Wǒmen jǐ diǎn kāihuì?','What time is our meeting?'],
['我确认一下。','Wǒ quèrèn yíxià.','Let me check.'],
['我需要一点帮助。','Wǒ xūyào yìdiǎn bāngzhù.','I need a little help.']
],
tip:'Use a colleague’s name plus 请问 to open a question politely. Confirm the task and deadline separately if either is unclear.'
},
lessons:[
{
id:'work-0',level:0,
title:'Meet a new colleague',
mission:'Introduce yourself and find out which team a colleague works in.',
minutes:9,
skills:['Speaking','Listening','Reading'],
dialogue:[
{speaker:'林悦',zh:'你好，我叫林悦，今天第一天上班。',py:'Nǐ hǎo, wǒ jiào Lín Yuè, jīntiān dì yī tiān shàngbān.',en:'Hello, I am Lin Yue. Today is my first day at work.'},
{speaker:'陈明',zh:'欢迎！我叫陈明，在设计部工作。',py:'Huānyíng! Wǒ jiào Chén Míng, zài shèjì bù gōngzuò.',en:'Welcome! I am Chen Ming. I work in the design department.'},
{speaker:'林悦',zh:'很高兴认识你。我在市场部。',py:'Hěn gāoxìng rènshi nǐ. Wǒ zài shìchǎng bù.',en:'Nice to meet you. I am in the marketing department.'},
{speaker:'陈明',zh:'我也很高兴认识你。你的座位在这边。',py:'Wǒ yě hěn gāoxìng rènshi nǐ. Nǐ de zuòwèi zài zhèbiān.',en:'Nice to meet you too. Your desk is over here.'}
],
phrases:[
['今天是我第一天上班。','Jīntiān shì wǒ dì yī tiān shàngbān.','Today is my first day at work.'],
['你在哪个部门工作？','Nǐ zài nǎge bùmén gōngzuò?','Which department do you work in?'],
['请问，会议室在哪儿？','Qǐngwèn, huìyìshì zài nǎr?','Excuse me, where is the meeting room?']
],
pattern:{title:'在 + place + 工作',explanation:'在 introduces where you work: 我在设计部工作。Ask 哪个部门 for the department.'},
quiz:{prompt:'How do you ask which department a colleague works in?',choices:['你在哪个部门工作？','你几点下班？','你的座位在这边。'],answer:0,explanation:'在哪个部门 asks “in which department.” 几点下班 asks what time someone finishes work.'},
challenge:'Say your name, say that it is your first day, and name a real or imagined department. Then ask your new colleague which department they work in.',
checklist:['I can introduce my name with 我叫.','I can place 在 before my department.','I can ask about a department with 哪个.']
},
{
id:'work-1',level:1,
title:'Confirm a meeting',
mission:'Check a meeting time and place, and ask to make a small change.',
minutes:11,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'陈明',zh:'我们明天下午两点开会，可以吗？',py:'Wǒmen míngtiān xiàwǔ liǎng diǎn kāihuì, kěyǐ ma?',en:'Can we meet tomorrow at two in the afternoon?'},
{speaker:'林悦',zh:'两点我有事，可以改到两点半吗？',py:'Liǎng diǎn wǒ yǒu shì, kěyǐ gǎi dào liǎng diǎn bàn ma?',en:'I have something on at two. Could we change it to two thirty?'},
{speaker:'陈明',zh:'可以，在三楼的小会议室。',py:'Kěyǐ, zài sān lóu de xiǎo huìyìshì.',en:'Yes, in the small meeting room on the third floor.'},
{speaker:'林悦',zh:'好的，明天下午两点半，三楼见。',py:'Hǎo de, míngtiān xiàwǔ liǎng diǎn bàn, sān lóu jiàn.',en:'Great. Tomorrow at two thirty in the afternoon. See you on the third floor.'}
],
phrases:[
['可以改到三点吗？','Kěyǐ gǎi dào sān diǎn ma?','Could we change it to three?'],
['是在二楼吗？','Shì zài èr lóu ma?','Is it on the second floor?'],
['我会提前五分钟到。','Wǒ huì tíqián wǔ fēnzhōng dào.','I will arrive five minutes early.']
],
pattern:{title:'可以改到……吗？',explanation:'可以改到 + new time + 吗 proposes a change. Repeat the agreed day, time, and place to check them.'},
quiz:{prompt:'The final agreed meeting time is…',choices:['今天下午两点','明天下午两点半','明天上午两点半'],answer:1,explanation:'They move the meeting from two to two thirty tomorrow afternoon. 下午 means afternoon; 半 adds half an hour.'},
challenge:'Write a two-message exchange: suggest a meeting tomorrow, then reply with a different time and a room. Read both messages aloud.',
checklist:['I include a day and 上午 or 下午.','I can propose a change with 改到.','I repeat the final time and place accurately.']
},
{
id:'work-2',level:2,
title:'Give a useful progress update',
mission:'Explain what is done, name a blocker, and ask for specific help.',
minutes:14,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'林悦',zh:'报告的第一部分已经写好了。',py:'Bàogào de dì yī bùfen yǐjīng xiě hǎo le.',en:'The first part of the report is already written.'},
{speaker:'陈明',zh:'太好了，剩下的部分怎么样？',py:'Tài hǎo le, shèngxià de bùfen zěnmeyàng?',en:'Great. How is the rest going?'},
{speaker:'林悦',zh:'还缺销售数据，你能帮我联系销售部吗？',py:'Hái quē xiāoshòu shùjù, nǐ néng bāng wǒ liánxì xiāoshòu bù ma?',en:'I am still missing sales data. Could you help me contact the sales department?'},
{speaker:'陈明',zh:'可以，我现在问一下，有消息就告诉你。',py:'Kěyǐ, wǒ xiànzài wèn yíxià, yǒu xiāoxi jiù gàosu nǐ.',en:'Sure. I will ask now and let you know when I hear anything.'}
],
phrases:[
['我已经完成了初稿。','Wǒ yǐjīng wánchéng le chūgǎo.','I have finished the first draft.'],
['我还在等客户的回复。','Wǒ hái zài děng kèhù de huífù.','I am still waiting for the client’s reply.'],
['如果今天收到数据，我明天就能完成。','Rúguǒ jīntiān shōudào shùjù, wǒ míngtiān jiù néng wánchéng.','If I receive the data today, I can finish tomorrow.']
],
pattern:{title:'已经……了 / 还在……',explanation:'已经……了 marks completion; 还在…… marks ongoing work. Ask for specific help with 你能帮我……吗.'},
quiz:{prompt:'Which sentence clearly says the first draft is finished?',choices:['我还在写初稿。','我明天开始写初稿。','我已经完成了初稿。'],answer:2,explanation:'已经完成了 marks completion. 还在写 means you are still writing, and 明天开始 means you start tomorrow.'},
challenge:'Give a three-sentence project update: one finished task, one unfinished task, and one specific request. Add a conditional completion date if you can.',
checklist:['I distinguish finished and ongoing work.','I name the missing item or next action.','I ask for one concrete form of help.']
}
]
},
{
id:'business',
title:'Business & suppliers',
group:'Work & study',
icon:'商',
summary:'Ask about products, compare quotations, and check order details.',
guide:{
title:'Turn an inquiry into clear terms',
steps:[
'Name the product and ask about a specific size, material, or quantity.',
'Request a written quotation and check what the price includes.',
'Repeat the quantity, delivery date, and payment arrangement before confirming an order.'
],
phrases:[
['请发一份报价单。','Qǐng fā yí fèn bàojiàdān.','Please send a quotation.'],
['这个价格含运费吗？','Zhège jiàgé hán yùnfèi ma?','Does this price include shipping?'],
['最少订多少？','Zuìshǎo dìng duōshao?','What is the minimum order quantity?'],
['我想确认一下交货日期。','Wǒ xiǎng quèrèn yíxià jiāohuò rìqī.','I would like to confirm the delivery date.']
],
tip:'Read back numbers with their units: 个 for individual items, 箱 for boxes, and 元 for yuan. Ask for written confirmation of important commercial terms.'
},
lessons:[
{
id:'business-0',level:0,
title:'Ask a supplier about stock',
mission:'Check whether a supplier has the product and version you need.',
minutes:10,
skills:['Speaking','Listening','Reading'],
dialogue:[
{speaker:'采购员',zh:'你好，请问你们有这种纸袋吗？',py:'Nǐ hǎo, qǐngwèn nǐmen yǒu zhè zhǒng zhǐdài ma?',en:'Hello. Do you have this kind of paper bag?'},
{speaker:'供应商',zh:'有，您需要什么尺寸？',py:'Yǒu, nín xūyào shénme chǐcùn?',en:'Yes. What size do you need?'},
{speaker:'采购员',zh:'中号的，有白色的吗？',py:'Zhōng hào de, yǒu báisè de ma?',en:'Medium. Do you have white ones?'},
{speaker:'供应商',zh:'有，中号白色的现在有货。',py:'Yǒu, zhōng hào báisè de xiànzài yǒu huò.',en:'Yes. The medium white ones are currently in stock.'}
],
phrases:[
['这种产品有货吗？','Zhè zhǒng chǎnpǐn yǒu huò ma?','Is this product in stock?'],
['我需要大号的。','Wǒ xūyào dà hào de.','I need the large ones.'],
['可以先看一个样品吗？','Kěyǐ xiān kàn yí ge yàngpǐn ma?','Could I see a sample first?']
],
pattern:{title:'有 + specification + 的 + 吗？',explanation:'After naming a product, 的 replaces it: 有白色的吗 means “Do you have white ones?” The product must already be clear.'},
quiz:{prompt:'What does 有货 mean in a supplier conversation?',choices:['Shipping is free','It is in stock','A sample is required'],answer:1,explanation:'有货 means stock is available. It does not tell you the shipping cost or confirm that a sample is free.'},
challenge:'Ask a supplier for a product in a particular size and color. Ask to see a sample before discussing an order.',
checklist:['I name the product before using 的 alone.','I can ask whether an item is in stock.','I give both a size and a color.']
},
{
id:'business-1',level:1,
title:'Understand a quotation',
mission:'Ask about unit price, shipping, and a quantity discount.',
minutes:12,
skills:['Speaking','Listening','Reading'],
dialogue:[
{speaker:'采购员',zh:'订五百个的话，每个多少钱？',py:'Dìng wǔbǎi ge de huà, měi ge duōshao qián?',en:'If we order five hundred, how much is each one?'},
{speaker:'供应商',zh:'每个两元，不含运费。',py:'Měi ge liǎng yuán, bù hán yùnfèi.',en:'Two yuan each, excluding shipping.'},
{speaker:'采购员',zh:'如果订一千个，价格能低一点吗？',py:'Rúguǒ dìng yìqiān ge, jiàgé néng dī yìdiǎn ma?',en:'If we order one thousand, could the price be a little lower?'},
{speaker:'供应商',zh:'可以，每个一元八角，我把报价单发给您。',py:'Kěyǐ, měi ge yì yuán bā jiǎo, wǒ bǎ bàojiàdān fā gěi nín.',en:'Yes, one yuan eighty each. I will send you the quotation.'}
],
phrases:[
['这是单价还是总价？','Zhè shì dānjià háishi zǒngjià?','Is this the unit price or the total price?'],
['运费需要另外付吗？','Yùnfèi xūyào lìngwài fù ma?','Does shipping need to be paid separately?'],
['请把价格和数量写清楚。','Qǐng bǎ jiàgé hé shùliàng xiě qīngchu.','Please write the price and quantity clearly.']
],
pattern:{title:'如果……，能……吗？',explanation:'如果 introduces a condition; 能……吗 asks about its effect. Check any agreed change in the written quotation.'},
quiz:{prompt:'For five hundred items, what does the quoted two-yuan price include?',choices:['The item only; shipping is separate','The item and all shipping','A whole box of items'],answer:0,explanation:'每个两元 gives the price per item. 不含运费 explicitly excludes shipping.'},
challenge:'Request prices for two different quantities. Ask whether shipping is included, and write a short English note of the terms you understood.',
checklist:['I distinguish 单价 from 总价.','I say the exact quantity with its unit.','I check whether the quotation includes shipping.']
},
{
id:'business-2',level:2,
title:'Check terms before ordering',
mission:'Confirm delivery and payment details without assuming an order is final.',
minutes:14,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'采购员',zh:'我想确认一下，八百个纸袋能在周五前送到吗？',py:'Wǒ xiǎng quèrèn yíxià, bābǎi ge zhǐdài néng zài Zhōuwǔ qián sòng dào ma?',en:'I would like to check: can eight hundred paper bags arrive before Friday?'},
{speaker:'供应商',zh:'可以，但需要明天上午确认订单。',py:'Kěyǐ, dàn xūyào míngtiān shàngwǔ quèrèn dìngdān.',en:'Yes, but the order needs to be confirmed tomorrow morning.'},
{speaker:'采购员',zh:'付款方式是什么？请一起写进邮件。',py:'Fùkuǎn fāngshì shì shénme? Qǐng yìqǐ xiě jìn yóujiàn.',en:'What is the payment arrangement? Please include it in the email as well.'},
{speaker:'供应商',zh:'好的，我会写明付款方式和送货地址，请您核对。',py:'Hǎo de, wǒ huì xiě míng fùkuǎn fāngshì hé sònghuò dìzhǐ, qǐng nín héduì.',en:'Certainly. I will state the payment arrangement and delivery address. Please check them.'}
],
phrases:[
['收到邮件后，我再确认订单。','Shōudào yóujiàn hòu, wǒ zài quèrèn dìngdān.','I will confirm the order after receiving the email.'],
['请以邮件里的地址为准。','Qǐng yǐ yóujiàn lǐ de dìzhǐ wéi zhǔn.','Please use the address in the email as the reference.'],
['如果不能按时送到，请提前通知我们。','Rúguǒ bù néng ànshí sòng dào, qǐng tíqián tōngzhī wǒmen.','If delivery cannot be on time, please tell us in advance.']
],
pattern:{title:'……后，再……',explanation:'Action + 后，再 + next action makes the order explicit: receive the email first, then confirm. Confirmation has not happened yet.'},
quiz:{prompt:'Which sentence makes confirmation depend on receiving the email first?',choices:['我已经确认订单了。','请明天上午送货。','收到邮件后，我再确认订单。'],answer:2,explanation:'后 and 再 put receipt of the email before order confirmation. 已经确认 would say the order is already confirmed.'},
challenge:'Write a supplier message checking quantity, delivery date, and payment arrangement. End by saying what you need to receive before confirming.',
checklist:['I include quantity and a clear delivery date.','I ask about payment instead of assuming the terms.','I clearly distinguish checking details from confirming an order.']
}
]
},
{
id:'service',
title:'Customer service',
group:'Work & study',
icon:'服',
summary:'Understand a customer’s need and explain a helpful next step.',
guide:{
title:'Listen, check, and offer a next step',
steps:[
'Ask an open question, then repeat the customer’s key need.',
'For a problem, apologize briefly and check the order or item details.',
'Explain one available next step and check whether the customer agrees.'
],
phrases:[
['有什么可以帮您？','Yǒu shénme kěyǐ bāng nín?','How can I help you?'],
['我帮您查一下。','Wǒ bāng nín chá yíxià.','I will check that for you.'],
['给您添麻烦了。','Gěi nín tiān máfan le.','Sorry for the trouble.'],
['这样处理可以吗？','Zhèyàng chǔlǐ kěyǐ ma?','Would this way of handling it work for you?']
],
tip:'您 adds respect in service conversations. Promise only a next step you can actually take; checking a policy is different from promising a refund.'
},
lessons:[
{
id:'service-0',level:0,
title:'Find out what a customer needs',
mission:'Welcome a customer and ask two useful questions about their request.',
minutes:9,
skills:['Speaking','Listening'],
dialogue:[
{speaker:'店员',zh:'您好，有什么可以帮您？',py:'Nín hǎo, yǒu shénme kěyǐ bāng nín?',en:'Hello. How can I help you?'},
{speaker:'顾客',zh:'我想买一个杯子。',py:'Wǒ xiǎng mǎi yí ge bēizi.',en:'I would like to buy a cup.'},
{speaker:'店员',zh:'您想要大一点的，还是小一点的？',py:'Nín xiǎng yào dà yìdiǎn de, háishi xiǎo yìdiǎn de?',en:'Would you like a larger one or a smaller one?'},
{speaker:'顾客',zh:'小一点的，有蓝色的吗？',py:'Xiǎo yìdiǎn de, yǒu lánsè de ma?',en:'A smaller one. Do you have blue ones?'}
],
phrases:[
['您想找什么？','Nín xiǎng zhǎo shénme?','What are you looking for?'],
['您喜欢什么颜色？','Nín xǐhuan shénme yánsè?','What color do you like?'],
['您可以看看这个。','Nín kěyǐ kànkan zhège.','You could take a look at this one.']
],
pattern:{title:'A 还是 B？',explanation:'还是 offers two choices in a question: 大一点的，还是小一点的？Listen to the answer before suggesting an item.'},
quiz:{prompt:'Which question asks the customer to choose between two sizes?',choices:['您喜欢什么颜色？','您想要大的还是小的？','这个杯子很好看。'],answer:1,explanation:'大的还是小的 presents a large-or-small choice. 什么颜色 is a separate question about color.'},
challenge:'Role-play both sides of a shop conversation. Welcome the customer, ask about size, then ask about color before suggesting an item.',
checklist:['I use 您 when addressing the customer.','I ask a clear choice question with 还是.','My suggested item matches the customer’s answer.']
},
{
id:'service-1',level:1,
title:'Handle a wrong order',
mission:'Acknowledge an order mistake and confirm the replacement the customer wants.',
minutes:11,
skills:['Speaking','Listening','Reading'],
dialogue:[
{speaker:'顾客',zh:'不好意思，我点的是热茶，这杯是冰的。',py:'Bù hǎoyìsi, wǒ diǎn de shì rè chá, zhè bēi shì bīng de.',en:'Excuse me. I ordered hot tea, but this one is iced.'},
{speaker:'店员',zh:'对不起，我帮您核对一下订单。',py:'Duìbuqǐ, wǒ bāng nín héduì yíxià dìngdān.',en:'I am sorry. Let me check your order.'},
{speaker:'顾客',zh:'好的，我要一杯热茶，不加糖。',py:'Hǎo de, wǒ yào yì bēi rè chá, bù jiā táng.',en:'Okay. I would like a hot tea without sugar.'},
{speaker:'店员',zh:'明白了，热茶，不加糖。我马上重新做一杯。',py:'Míngbai le, rè chá, bù jiā táng. Wǒ mǎshàng chóngxīn zuò yì bēi.',en:'Understood: hot tea, no sugar. I will make a fresh one right away.'}
],
phrases:[
['您点的是哪一款？','Nín diǎn de shì nǎ yì kuǎn?','Which one did you order?'],
['我再确认一下您的要求。','Wǒ zài quèrèn yíxià nín de yāoqiú.','Let me confirm your request again.'],
['请稍等，我去处理。','Qǐng shāo děng, wǒ qù chǔlǐ.','Please wait a moment. I will take care of it.']
],
pattern:{title:'我点的是……',explanation:'我点的是…… identifies the item ordered. Repeat the key details before acting: 热茶，不加糖。'},
quiz:{prompt:'What replacement does the customer ask for?',choices:['Iced tea with sugar','Hot coffee without sugar','Hot tea without sugar'],answer:2,explanation:'热茶 means hot tea and 不加糖 means without added sugar. The customer repeats both details.'},
challenge:'Create a four-line dialogue about the wrong drink or dish. Include the original request, an apology, a detail check, and the agreed replacement.',
checklist:['I acknowledge the problem with a brief apology.','I check the order before describing a solution.','I repeat the exact replacement and one preference.']
},
{
id:'service-2',level:2,
title:'Follow up on a delayed delivery',
mission:'Check an unresolved problem and give a clear, realistic update.',
minutes:14,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'顾客',zh:'我的包裹还没到，可以帮我查一下吗？',py:'Wǒ de bāoguǒ hái méi dào, kěyǐ bāng wǒ chá yíxià ma?',en:'My parcel has not arrived yet. Could you check it for me?'},
{speaker:'客服',zh:'可以，请您提供订单号，我先查看物流信息。',py:'Kěyǐ, qǐng nín tígōng dìngdān hào, wǒ xiān chákàn wùliú xìnxī.',en:'Yes. Please provide the order number. I will check the tracking information first.'},
{speaker:'顾客',zh:'订单号是三六二八。今天能收到吗？',py:'Dìngdān hào shì sān liù èr bā. Jīntiān néng shōudào ma?',en:'The order number is 3628. Can I receive it today?'},
{speaker:'客服',zh:'目前还不能确定。我会联系快递公司，下午再给您回复。',py:'Mùqián hái bù néng quèdìng. Wǒ huì liánxì kuàidì gōngsī, xiàwǔ zài gěi nín huífù.',en:'I cannot confirm that yet. I will contact the courier and get back to you this afternoon.'}
],
phrases:[
['目前还没有新的物流信息。','Mùqián hái méiyǒu xīn de wùliú xìnxī.','There is no new tracking information at present.'],
['我会在下午三点前给您回复。','Wǒ huì zài xiàwǔ sān diǎn qián gěi nín huífù.','I will get back to you before three this afternoon.'],
['如果您愿意，我可以帮您查询退货政策。','Rúguǒ nín yuànyì, wǒ kěyǐ bāng nín cháxún tuìhuò zhèngcè.','If you would like, I can check the return policy for you.']
],
pattern:{title:'目前……；我会……',explanation:'目前 introduces the current situation; 我会 introduces your next action. 还不能确定 means you cannot confirm yet.'},
quiz:{prompt:'Which reply gives a next step without promising an unverified arrival time?',choices:['我会联系快递公司，下午给您回复。','肯定今天到，您不用查。','不知道，您再等吧。'],answer:0,explanation:'The first reply commits to checking and reporting back. It does not claim that an unverified delivery will definitely arrive today.'},
challenge:'Write a customer-service reply about a missing parcel. Ask for an order number, explain what you can check, and give a realistic follow-up plan.',
checklist:['I request the information needed to investigate.','I separate confirmed facts from uncertainty.','I explain the next action and a realistic follow-up time.']
}
]
},
{
id:'study',
title:'School & university',
group:'Work & study',
icon:'学',
summary:'Navigate class, clarify assignments, and collaborate on a presentation.',
guide:{
title:'Take an active part in class',
steps:[
'Ask about the classroom, page, or materials before the activity starts.',
'Check what to submit and when; repeat the deadline to make sure you understood.',
'In group work, agree on each person’s task and a time to review the result together.'
],
phrases:[
['请问，今天用哪本书？','Qǐngwèn, jīntiān yòng nǎ běn shū?','Which book are we using today?'],
['作业什么时候交？','Zuòyè shénme shíhou jiāo?','When is the assignment due?'],
['这个词是什么意思？','Zhège cí shì shénme yìsi?','What does this word mean?'],
['我们分工吧。','Wǒmen fēngōng ba.','Let us divide up the work.']
],
tip:'老师 is a normal respectful address for a teacher. For classmates, a name is usually enough; a clear clarification question is more useful than pretending you understood.'
},
lessons:[
{
id:'study-0',level:0,
title:'Get ready for class',
mission:'Find the lesson page and ask a classmate to share a missing item.',
minutes:9,
skills:['Speaking','Listening','Reading'],
dialogue:[
{speaker:'安娜',zh:'请问，今天学第几课？',py:'Qǐngwèn, jīntiān xué dì jǐ kè?',en:'Excuse me. Which lesson are we studying today?'},
{speaker:'周宁',zh:'第三课，在二十六页。',py:'Dì sān kè, zài èrshíliù yè.',en:'Lesson three, on page twenty-six.'},
{speaker:'安娜',zh:'谢谢。我忘带书了，可以和你一起看吗？',py:'Xièxie. Wǒ wàng dài shū le, kěyǐ hé nǐ yìqǐ kàn ma?',en:'Thanks. I forgot my book. Could I share yours?'},
{speaker:'周宁',zh:'可以，坐这儿吧。',py:'Kěyǐ, zuò zhèr ba.',en:'Sure. Sit here.'}
],
phrases:[
['现在看哪一页？','Xiànzài kàn nǎ yí yè?','Which page are we looking at now?'],
['可以借我一支笔吗？','Kěyǐ jiè wǒ yì zhī bǐ ma?','Could you lend me a pen?'],
['请再说一遍。','Qǐng zài shuō yí biàn.','Please say it again.']
],
pattern:{title:'第 + number + lesson / page',explanation:'第 marks order: 第三课 is lesson three. 二十六页 or 第二十六页 means page twenty-six. Ask 第几课 for the lesson number.'},
quiz:{prompt:'Which lesson and page does Zhou Ning give?',choices:['Lesson two, page sixteen','Lesson six, page twenty-three','Lesson three, page twenty-six'],answer:2,explanation:'第三课 is lesson three and 二十六页 is page twenty-six. Listen for the unit after each number.'},
challenge:'Ask a classmate for the current lesson and page. Then ask to borrow a pen or share a book, and thank them.',
checklist:['I can ask 第几课 or 哪一页.','I keep the lesson number separate from the page number.','I make a borrowing request with 可以……吗.']
},
{
id:'study-1',level:1,
title:'Clarify an assignment',
mission:'Ask about the assignment format, length, and due date.',
minutes:12,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'安娜',zh:'老师，这次作业要写什么？',py:'Lǎoshī, zhè cì zuòyè yào xiě shénme?',en:'Teacher, what do we need to write for this assignment?'},
{speaker:'老师',zh:'写一篇介绍自己家乡的短文，大约三百字。',py:'Xiě yì piān jièshào zìjǐ jiāxiāng de duǎnwén, dàyuē sānbǎi zì.',en:'Write a short piece introducing your hometown, about three hundred Chinese characters.'},
{speaker:'安娜',zh:'是下周一上课前交，对吗？',py:'Shì xià Zhōuyī shàngkè qián jiāo, duì ma?',en:'We submit it before class next Monday, right?'},
{speaker:'老师',zh:'对，发到班级邮箱就可以。',py:'Duì, fā dào bānjí yóuxiāng jiù kěyǐ.',en:'Yes. Sending it to the class email address is fine.'}
],
phrases:[
['需要写多少字？','Xūyào xiě duōshao zì?','How many characters do we need to write?'],
['可以用电子版提交吗？','Kěyǐ yòng diànzǐ bǎn tíjiāo ma?','Can we submit a digital version?'],
['我不太明白这个要求。','Wǒ bú tài míngbai zhège yāoqiú.','I do not quite understand this requirement.']
],
pattern:{title:'……前 + action',explanation:'前 after a time or event means “before”: 下周一上课前交 means submit before class next Monday. 字 counts Chinese characters here.'},
quiz:{prompt:'When must this example assignment be submitted?',choices:['Before class next Monday','After class this Friday','At any time next month'],answer:0,explanation:'下周一上课前 means before next Monday’s class. This is a detail in this fictional classroom dialogue, not a general school rule.'},
challenge:'Write three questions to a teacher: ask what to submit, how long it should be, and when it is due. Then summarize an imagined reply in one sentence.',
checklist:['I ask about the required output, not just the deadline.','I use 字 correctly for a Chinese character count.','I can repeat a deadline using 前.']
},
{
id:'study-2',level:2,
title:'Plan a group presentation',
mission:'Divide presentation tasks and agree on a shared review session.',
minutes:14,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'周宁',zh:'我们要介绍城市交通，先分工吧。',py:'Wǒmen yào jièshào chéngshì jiāotōng, xiān fēngōng ba.',en:'We need to present urban transport. Let us divide up the work first.'},
{speaker:'安娜',zh:'我来查资料，你来做幻灯片，可以吗？',py:'Wǒ lái chá zīliào, nǐ lái zuò huàndēngpiàn, kěyǐ ma?',en:'I can research the information and you can make the slides. Is that okay?'},
{speaker:'周宁',zh:'可以。我们周三晚上一起练习怎么样？',py:'Kěyǐ. Wǒmen Zhōusān wǎnshang yìqǐ liànxí zěnmeyàng?',en:'Sure. How about practicing together on Wednesday evening?'},
{speaker:'安娜',zh:'好，我会提前把资料发给你。',py:'Hǎo, wǒ huì tíqián bǎ zīliào fā gěi nǐ.',en:'Good. I will send you the information in advance.'}
],
phrases:[
['这部分由我负责。','Zhè bùfen yóu wǒ fùzé.','I will be responsible for this part.'],
['我们需要比较两个例子。','Wǒmen xūyào bǐjiào liǎng ge lìzi.','We need to compare two examples.'],
['你觉得这个结论清楚吗？','Nǐ juéde zhège jiélùn qīngchu ma?','Do you think this conclusion is clear?']
],
pattern:{title:'我来……，你来……',explanation:'来 before a verb volunteers or assigns a task: 我来查资料，你来做幻灯片。Add 可以吗 to check agreement.'},
quiz:{prompt:'What does Anna volunteer to do?',choices:['Make the slides','Research the information','Cancel the practice session'],answer:1,explanation:'我来查资料 means “I will research the information.” Anna asks Zhou Ning to make the slides and agrees to practice together.'},
challenge:'Plan a two-person presentation on a topic you know. Assign research and slides, arrange a rehearsal, and say what each person should send beforehand.',
checklist:['I state who is responsible for each task.','I ask for agreement on the division of work.','I arrange a specific review time and an advance handoff.']
}
]
},
{
id:'exams',
title:'Exam preparation',
group:'Work & study',
icon:'练',
summary:'Practice listening for details and giving clear, organized answers.',
guide:{
title:'Build general task confidence',
steps:[
'Listen to or read a short task once for its main idea, then again for names, places, and times.',
'Plan a spoken answer with a direct point, a reason, and one concrete example.',
'Review your answer for missing information, then repeat the task with one changed detail.'
],
phrases:[
['我的意思是……','Wǒ de yìsi shì…','What I mean is…'],
['我认为……，因为……','Wǒ rènwéi…, yīnwèi…','I think…, because…'],
['比如说……','Bǐrú shuō…','For example…'],
['请问，您指的是哪一点？','Qǐngwèn, nín zhǐ de shì nǎ yì diǎn?','Which point do you mean?']
],
tip:'These are general listening, speaking, and task-practice activities. They do not claim official exam alignment, scores, timings, or qualification equivalence. Check your own exam’s published instructions for permitted clarification requests.'
},
lessons:[
{
id:'exams-0',level:0,
title:'Catch the important details',
mission:'Identify who, where, and when in a short everyday exchange.',
minutes:10,
skills:['Listening','Reading','Speaking'],
dialogue:[
{speaker:'小林',zh:'明天我们在哪儿见面？',py:'Míngtiān wǒmen zài nǎr jiànmiàn?',en:'Where shall we meet tomorrow?'},
{speaker:'小周',zh:'在图书馆门口，上午九点。',py:'Zài túshūguǎn ménkǒu, shàngwǔ jiǔ diǎn.',en:'At the library entrance, at nine in the morning.'},
{speaker:'小林',zh:'小王也来吗？',py:'Xiǎo Wáng yě lái ma?',en:'Is Xiao Wang coming too?'},
{speaker:'小周',zh:'他不来，只有我们两个。',py:'Tā bù lái, zhǐ yǒu wǒmen liǎng ge.',en:'He is not coming. It will just be the two of us.'}
],
phrases:[
['先听主要意思。','Xiān tīng zhǔyào yìsi.','Listen for the main idea first.'],
['再注意时间和地点。','Zài zhùyì shíjiān hé dìdiǎn.','Then pay attention to the time and place.'],
['只有两个人。','Zhǐ yǒu liǎng ge rén.','There are only two people.']
],
pattern:{title:'先……，再……',explanation:'先……再…… means “first…then…”. 只有 means “only”; mentioning Xiao Wang does not mean he is coming.'},
quiz:{prompt:'Which note correctly records the plan?',choices:['Tomorrow, 9 a.m., library entrance, two people','Tomorrow, 9 p.m., library, three people','Today, 9 a.m., classroom, two people'],answer:0,explanation:'明天 gives tomorrow, 上午九点 gives 9 a.m., 图书馆门口 gives the library entrance, and 只有我们两个 gives two people.'},
challenge:'Listen using the browser voice, or read once and cover the text. Record the day, time, place, and number of people. Check the text, then change one detail and retell the plan.',
checklist:['I distinguish 上午 from 下午 or 晚上.','I notice the negative 他不来.','I check all four details against the text.']
},
{
id:'exams-1',level:1,
title:'Build a short opinion answer',
mission:'Give a clear preference with a reason and a relevant example.',
minutes:12,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'练习伙伴',zh:'你喜欢一个人学习，还是和朋友一起学习？',py:'Nǐ xǐhuan yí ge rén xuéxí, háishi hé péngyou yìqǐ xuéxí?',en:'Do you prefer studying alone or with friends?'},
{speaker:'学习者',zh:'我更喜欢和朋友一起学习，因为可以互相帮助。',py:'Wǒ gèng xǐhuan hé péngyou yìqǐ xuéxí, yīnwèi kěyǐ hùxiāng bāngzhù.',en:'I prefer studying with friends because we can help each other.'},
{speaker:'练习伙伴',zh:'能举个例子吗？',py:'Néng jǔ ge lìzi ma?',en:'Can you give an example?'},
{speaker:'学习者',zh:'比如，我不懂一个词的时候，朋友可以解释。',py:'Bǐrú, wǒ bù dǒng yí ge cí de shíhou, péngyou kěyǐ jiěshì.',en:'For example, when I do not understand a word, a friend can explain it.'}
],
phrases:[
['我更喜欢在家学习。','Wǒ gèng xǐhuan zài jiā xuéxí.','I prefer studying at home.'],
['一个原因是环境比较安静。','Yí ge yuányīn shì huánjìng bǐjiào ānjìng.','One reason is that the surroundings are relatively quiet.'],
['对我来说，这样更方便。','Duì wǒ lái shuō, zhèyàng gèng fāngbiàn.','For me, this is more convenient.']
],
pattern:{title:'Preference + 因为 + reason + 比如',explanation:'State your preference, add a reason with 因为, and support it with 比如. Keep the example relevant to your reason.'},
quiz:{prompt:'Which sentence adds an example rather than another general preference?',choices:['我更喜欢和朋友一起学习。','比如，朋友可以帮我解释生词。','我觉得这样很好。'],answer:1,explanation:'比如 signals an example. Explaining an unfamiliar word is a specific instance of friends helping each other.'},
challenge:'Answer “Do you prefer cooking at home or eating out?” Give a preference, a reason, and an example. Record or write it, then check that each sentence supports your choice.',
checklist:['My first sentence answers the actual question.','I connect my reason with 因为.','My example illustrates the reason I gave.']
},
{
id:'exams-2',level:2,
title:'Clarify and improve an answer',
mission:'Handle a follow-up question and repair a vague answer during practice.',
minutes:14,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'练习伙伴',zh:'你说这个办法更有效，具体是什么意思？',py:'Nǐ shuō zhège bànfǎ gèng yǒuxiào, jùtǐ shì shénme yìsi?',en:'You said this method is more effective. What exactly do you mean?'},
{speaker:'学习者',zh:'我的意思是，每天复习一点，比周末一次复习很多更适合我。',py:'Wǒ de yìsi shì, měitiān fùxí yìdiǎn, bǐ zhōumò yí cì fùxí hěn duō gèng shìhé wǒ.',en:'I mean that reviewing a little every day suits me better than reviewing a lot all at once at the weekend.'},
{speaker:'练习伙伴',zh:'为什么这样更适合你？',py:'Wèishénme zhèyàng gèng shìhé nǐ?',en:'Why does that suit you better?'},
{speaker:'学习者',zh:'因为我更容易坚持，也能及时发现没学懂的地方。',py:'Yīnwèi wǒ gèng róngyì jiānchí, yě néng jíshí fāxiàn méi xué dǒng de dìfang.',en:'Because it is easier for me to keep it up, and I can promptly notice what I have not understood.'}
],
phrases:[
['我换一种说法。','Wǒ huàn yì zhǒng shuōfǎ.','Let me put it another way.'],
['刚才我说得不够清楚。','Gāngcái wǒ shuō de bú gòu qīngchu.','I was not clear enough just now.'],
['这里的“有效”是指更容易记住。','Zhèlǐ de “yǒuxiào” shì zhǐ gèng róngyì jìzhù.','By “effective” here, I mean easier to remember.']
],
pattern:{title:'我的意思是…… / A 比 B 更……',explanation:'我的意思是 clarifies your meaning. A 比 B 更…… compares two options. 更适合我 means “suits me better,” a personal judgment.'},
quiz:{prompt:'Which phrase helps you restate your idea more clearly?',choices:['我们在哪儿见？','只有我们两个。','我换一种说法。'],answer:2,explanation:'我换一种说法 means “Let me put it another way.” It signals a reformulation of your answer.'},
challenge:'Give an opinion about a useful study method. Ask yourself “What exactly do I mean?” Replace one vague adjective with a concrete explanation and answer one “why” follow-up.',
checklist:['I can restate my idea without changing my main point.','I explain a vague term with a concrete result.','I support a comparison with a reason from my own experience.']
}
]
},
{
id:'culture',
title:'Culture & entertainment',
group:'Interests',
icon:'艺',
summary:'Make plans, explore exhibitions, and share what you enjoy.',
guide:{
title:'Explore and talk about what interests you',
steps:[
'Choose an activity and invite someone with a suggested day or time.',
'At an exhibition or event, ask one specific question about what you notice.',
'Share a personal reaction and explain it with an example in your own words.'
],
phrases:[
['你对什么感兴趣？','Nǐ duì shénme gǎn xìngqù?','What are you interested in?'],
['周末一起去看展览吧。','Zhōumò yìqǐ qù kàn zhǎnlǎn ba.','Let us go to an exhibition this weekend.'],
['这件作品让我想起了家乡。','Zhè jiàn zuòpǐn ràng wǒ xiǎngqǐ le jiāxiāng.','This work reminds me of my hometown.'],
['我最喜欢的是……','Wǒ zuì xǐhuan de shì…','What I like most is…']
],
tip:'Describe your own response instead of speaking for an entire culture. These dialogues are original practice text; discuss a real work by summarizing it in your own words.'
},
lessons:[
{
id:'culture-0',level:0,
title:'Invite a friend to the cinema',
mission:'Ask about film preferences and agree on a simple outing.',
minutes:9,
skills:['Speaking','Listening','Reading'],
dialogue:[
{speaker:'小夏',zh:'周六你有空吗？一起看电影吧。',py:'Zhōuliù nǐ yǒu kòng ma? Yìqǐ kàn diànyǐng ba.',en:'Are you free on Saturday? Let us watch a film together.'},
{speaker:'小林',zh:'好啊，你喜欢什么类型的电影？',py:'Hǎo a, nǐ xǐhuan shénme lèixíng de diànyǐng?',en:'Sure. What kinds of films do you like?'},
{speaker:'小夏',zh:'我喜欢喜剧，你呢？',py:'Wǒ xǐhuan xǐjù, nǐ ne?',en:'I like comedies. What about you?'},
{speaker:'小林',zh:'我也喜欢。我们看看下午有什么场次。',py:'Wǒ yě xǐhuan. Wǒmen kànkan xiàwǔ yǒu shénme chǎngcì.',en:'I do too. Let us see what showings there are in the afternoon.'}
],
phrases:[
['你周末有空吗？','Nǐ zhōumò yǒu kòng ma?','Are you free this weekend?'],
['我对纪录片感兴趣。','Wǒ duì jìlùpiàn gǎn xìngqù.','I am interested in documentaries.'],
['我们先看看时间吧。','Wǒmen xiān kànkan shíjiān ba.','Let us check the times first.']
],
pattern:{title:'一起……吧 / 你呢？',explanation:'一起 + activity + 吧 makes a friendly suggestion. 你呢 returns the same question after you give your own answer.'},
quiz:{prompt:'What kind of film do both friends like?',choices:['Documentaries','Comedies','Horror films'],answer:1,explanation:'小夏 says 我喜欢喜剧 and 小林 replies 我也喜欢. 喜剧 means comedy.'},
challenge:'Invite a friend to a film, concert, or exhibition. Suggest a day, ask about their preferences, and agree to check the available times.',
checklist:['I ask whether my friend is free.','I make a suggestion with 一起……吧.','I ask about their preference with 你呢 or a full question.']
},
{
id:'culture-1',level:1,
title:'Talk about an exhibition',
mission:'Describe what catches your eye and ask for context about a work.',
minutes:12,
skills:['Speaking','Listening','Reading'],
dialogue:[
{speaker:'小林',zh:'你最喜欢哪一幅画？',py:'Nǐ zuì xǐhuan nǎ yì fú huà?',en:'Which painting do you like most?'},
{speaker:'小夏',zh:'我喜欢这幅，颜色很温暖。',py:'Wǒ xǐhuan zhè fú, yánsè hěn wēnnuǎn.',en:'I like this one. The colors feel warm.'},
{speaker:'小林',zh:'它让我想起了小时候住的地方。你知道画家是谁吗？',py:'Tā ràng wǒ xiǎngqǐ le xiǎoshíhou zhù de dìfang. Nǐ zhīdào huàjiā shì shéi ma?',en:'It reminds me of the place where I lived as a child. Do you know who the painter is?'},
{speaker:'小夏',zh:'我也不知道，我们看看旁边的介绍吧。',py:'Wǒ yě bù zhīdào, wǒmen kànkan pángbiān de jièshào ba.',en:'I do not know either. Let us read the description beside it.'}
],
phrases:[
['这幅画是什么时候画的？','Zhè fú huà shì shénme shíhou huà de?','When was this painting made?'],
['我对这些细节很感兴趣。','Wǒ duì zhèxiē xìjié hěn gǎn xìngqù.','I am very interested in these details.'],
['每个人的感受可能不一样。','Měi ge rén de gǎnshòu kěnéng bù yíyàng.','Everyone’s response may be different.']
],
pattern:{title:'让 + person + 想起……',explanation:'让我想起 means “reminds me of.” 幅 counts paintings. Your personal association may differ from the artist’s intention.'},
quiz:{prompt:'What do the friends do when they do not know who painted the work?',choices:['Read the description beside it','Claim the artist is their friend','Decide the painting has no author'],answer:0,explanation:'看看旁边的介绍 means read the nearby description. They seek information rather than guessing.'},
challenge:'Choose a picture you can see. Describe one color or detail, say what it reminds you of, and ask one factual question you would check in the description.',
checklist:['I use 幅 when counting a painting.','I connect the image to a personal memory with 让我想起.','I separate my reaction from a fact that needs checking.']
},
{
id:'culture-2',level:2,
title:'Recommend a story in your own words',
mission:'Give a short recommendation with a personal reason and a balanced comment.',
minutes:14,
skills:['Speaking','Listening','Writing'],
dialogue:[
{speaker:'小夏',zh:'你最近读过什么有意思的书？',py:'Nǐ zuìjìn dú guo shénme yǒu yìsi de shū?',en:'What interesting books have you read recently?'},
{speaker:'小林',zh:'读了一本旅行随笔，主要写作者在不同城市的生活。',py:'Dú le yì běn lǚxíng suíbǐ, zhǔyào xiě zuòzhě zài bùtóng chéngshì de shēnghuó.',en:'I read a collection of travel essays, mainly about the writer’s life in different cities.'},
{speaker:'小夏',zh:'你会推荐给我吗？',py:'Nǐ huì tuījiàn gěi wǒ ma?',en:'Would you recommend it to me?'},
{speaker:'小林',zh:'会，虽然节奏比较慢，但是细节很生动，很适合喜欢旅行的人。',py:'Huì, suīrán jiézòu bǐjiào màn, dànshì xìjié hěn shēngdòng, hěn shìhé xǐhuan lǚxíng de rén.',en:'Yes. Although it moves fairly slowly, the details are vivid. It suits people who enjoy travel.'}
],
phrases:[
['这本书主要讲什么？','Zhè běn shū zhǔyào jiǎng shénme?','What is this book mainly about?'],
['最吸引我的是人物之间的关系。','Zuì xīyǐn wǒ de shì rénwù zhījiān de guānxi.','What attracts me most is the relationship between the characters.'],
['我不想透露结局。','Wǒ bù xiǎng tòulù jiéjú.','I do not want to reveal the ending.']
],
pattern:{title:'虽然……，但是……',explanation:'虽然……但是…… balances two observations: although the pace is slow, the details are vivid. Summarize in your own words.'},
quiz:{prompt:'Which sentence gives a balanced reaction?',choices:['这本书在哪里？','我昨天买了一本书。','虽然节奏慢，但是细节很生动。'],answer:2,explanation:'虽然 introduces the slower pace and 但是 adds the vivid details. The sentence weighs two aspects of the reading experience.'},
challenge:'Recommend a book, podcast, film, or performance you know. Give a one-sentence original summary, a positive detail, a limitation, and the kind of person who might enjoy it. Avoid revealing the ending.',
checklist:['I summarize in my own words rather than quote the work.','I use 虽然……但是…… to balance two observations.','I explain who might enjoy it and avoid unnecessary spoilers.']
}
]
}
);
