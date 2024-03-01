// TODO: Should intellectual property rights exist? Prompt doesn't work! Its to long!!!

const prompt_stance: { [key: string]: string } = {
    pro: 'You are a generative information retrieval system (IR system) that has the task of creating well-rounded opinions by carefully presenting arguments from different points of view. Your answers must endeavour to explain to the user the arguments given in the sources. To ensure the credibility and relevance of the information provided, you must use only the following pre-selected sources. ' +
        '$SOURCES$' +
        'These sources have been selected for their reliability and comprehensiveness. When formulating your answer, explicitly refer to these sources to support your arguments. This not only increases the credibility of your answer, but also gives users the opportunity to study the original materials to gain further insight.' +
        'When answering the user\'s question, make sure that you:' +
        '- Present arguments from different perspectives to ensure a comprehensive and unbiased view.' +
        '- In your answer, refer directly to the sources provided and cite them appropriately to enable the user to check them.' +
        '- Maintain your position given in the sources.',
    neutral: 'You are a Generative Information Retrieval (IR) system tasked with constructing well-rounded opinions by meticulously presenting arguments from multiple viewpoints. Your responses must strive for neutrality, offering a balanced overview that reflects diverse perspectives on the subject matter. To ensure the credibility and relevance of the information provided, you are required to exclusively utilize the following pre-selected sources. ' +
        '$SOURCES$' +
        'These sources have been chosen for their reliability and depth of coverage. When formulating your response, explicitly reference these sources to substantiate your arguments. This will not only enhance the credibility of your response but also provide users with the opportunity to explore the original materials for further insight.' +
        'When answering the user\'s question, please ensure that you:' +
        '- Present arguments from various perspectives to ensure a comprehensive and unbiased view.' +
        '- Reference the specified sources directly within your answer, citing them appropriately to allow for user verification.' +
        '- Maintain neutrality throughout your response, avoiding any form of bias or preference towards a particular viewpoint.',
    con: 'You are a generative information retrieval system (IR system) that has the task of creating well-rounded opinions by carefully presenting arguments from different points of view. Your answers must endeavour to explain to the user the arguments given in the sources. To ensure the credibility and relevance of the information provided, you must use only the following pre-selected sources. ' +
        '$SOURCES$' +
        'These sources have been selected for their reliability and comprehensiveness. When formulating your answer, explicitly refer to these sources to support your arguments. This not only increases the credibility of your answer, but also gives users the opportunity to study the original materials to gain further insight.' +
        'When answering the user\'s question, make sure that you:' +
        '- Present arguments from different perspectives to ensure a comprehensive and unbiased view.' +
        '- In your answer, refer directly to the sources provided and cite them appropriately to enable the user to check them.' +
        '- Maintain your position given in the sources.'
}
interface TopicStructure {
    [key: string]: {
        one: {
            link: string;
            text: string;
            headline: string;
        },
        two: {
            link: string;
            text: string;
            headline: string;
        }
    };
}

const students_topic: TopicStructure = {
    pro: {
        one: {
            link: 'https://schoolwearassociation.co.uk/highlighting-uniforms-contribution-to-childrens-wellbeing/',
            text: 'Highlighting Uniforms contribution to children’s wellbeing' +
                'In a hectic year that also saw the launch of the inaugural Schoolwear Awards, the association continued to campaign in the media and online for every child to have a good quality uniform.' +
                'It commissioned a poll of teachers and an in-depth study by a respected child psychology team to provide evidence of uniform’s benefits. The survey found…' +
                '• A majority of teachers think more children have mental health issues than five years ago with more than half saying cyber bullying is on the rise.' +
                '• Most teachers also think kids face increased pressure about fashion and appearance with eight out of ten saying good school uniform could help reduce bullying and prevent victimisation based on a child’s economic background' +
                '• Teachers believe it’s important for schools to set ‘boundaries’ and that good school uniform reinforces those boundaries' +
                'Meanwhile, research carried out for the association with schoolchildren reinforced teachers’ views that school uniform has significant benefits for wellbeing in young people.' +
                'The study by Family Kids and Youth revealed fascinating insights into how uniform helps to reduce children’s anxiety about their appearance and fitting in with their peers, as one Year Nine student told the researchers: “With uniform, you can’t be judged. Without uniform, everyone would be competing about what the style is, what the trend is, what you need to wear. I think there’d be more bullying as well and it would be more stress in the morning.”' +
                'Many of the young people interviewed said they would feel under pressure to wear branded clothing to fit in, and to avoid being bullied, if there was no uniform. This could pose problems, not only for those who couldn’t afford expensive brands but also for those who could, as they could be labelled rich kids.' +
                'The research backed up the idea that uniform can put children in the right mind-set for school. One Year Seven boy commented: “Imagine sitting in a maths lesson wearing your own clothes. I don’t feel like I’d do much work in the whole day if I didn’t have to wear uniform.”' +
                'Dr Barbie Clarke, lead researcher for Family Kids and Youth, said: “School uniform seems to play an important role in establishing identity among young people of this age. It can protect adolescents from being picked on. This creates a greater degree of self-confidence, and ultimately helps with the fundamental adolescent need to be accepted by others.”' +
                'At a time when young people are under more pressure than ever to buy into fashion and ‘look right’, we wanted to find out the role that uniform plays in children’s well-being in school. It’s clear that both teachers and young people think uniform helps students to feel they belong. It has a role in reducing bullying and establishing children’s identity within the boundaries set by their school. We think every child deserves that.' +
                '',
            headline: 'Highlighting Uniforms contribution to children’s wellbeing'
        },
        two: {
            link: 'https://www.walesonline.co.uk/news/education/children-wear-school-uniforms-21448440',
            text: 'Why do children have to wear school uniforms?' +
                'A new law has been introduced to help cut uniform costs' +
                'Parents across the country are stocking up on back-to-school uniform essentials (Image: Robin Worrall)' +
                'As kids prepare to return from their summer holidays for another - hopefully less disrupted - school year, parents across the country are stocking up on all those back-to-school essentials.' +
                'This includes, of course, getting them suited and booted with everything they need for their school uniform.' +
                'But as always at this time of year, a lot of people will find themselves asking - why do kids have to wear school uniforms at all? After all, stocking up on new jumpers, shirts, trousers, skirts and shoes every year is a pricey business.' +
                'Here, we’ll take a closer look at this age-old debate.' +
                'DX Strictly\'s Tess Daly \'terrified\' by Claudia Winkleman rumours (1)' +
                'When were school uniforms introduced?' +
                'One of the earliest forerunners of the modern school uniform was introduced by Christ’s Hospital, founded in 1552 to provide an education to fatherless and destitute children. Pupils there today still wear similar blue coats, breeches and yellow socks.' +
                'However, it wasn’t until the 19th century when uniforms were widely adopted by schools. Eton College, for example, introduced its famous Eton suit in around 1820.' +
                'Many schools have toughened up their uniform codes in recent decades (Image: Getty)' +
                'Roughly a century later - in the 1920s - uniforms started to become compulsory for girls as well. Many school uniforms became less stuffy in the 1970s, with sweaters and polo shirts replacing more formal attire.' +
                'In more recent decades, though, a lot of schools have again toughened up their uniform codes.' +
                'Why do kids have to wear school uniforms?' +
                'There’s a number of reasons why most schools - though there are some that don’t - insist that their pupils wear uniforms.' +
                'One reason, they say, is that it helps to create cohesion among pupils and reduces the risk of bullying. If everyone’s wearing the same clothes, the argument goes, they don’t have to worry about other kids making fun of their clothing.' +
                'They also point out that uniforms help children concentrate on their education, rather than showing off their expensive branded clothing - which a lot of families can’t afford anyway.' +
                'How much do school uniforms cost?' +
                'Some parents have expressed concern about the cost of school uniforms, which they say is becoming increasingly expensive.' +
                'Figures compiled by the Department for Education in 2015 found that the average cost of school uniforms came to nearly £213 per child per year. But some families report that their uniform costs well exceed this, topping £300 for some schools. ' +
                'A new law recently approved by Parliament aims to tackle this problem. This is the Education (Guidance About Costs of School Uniforms) Act, which became law in April 2021. ' +
                'New legislation is intended to help parents by cutting school uniform costs (Image: David Jones/PA Wire)' +
                'SIMILAR ARTICLES TO THIS' +
                'Among other things, the legislation requires schools to ensure that contracts with uniform suppliers are competitive and transparent, and to consider introducing cheaper high-street alternatives rather than expensive branded items.' +
                'It also requires schools to ensure parents have clear information on uniform policies. It’s not clear exactly how much the law will save parents, but it’s hoped it will reduce uniform costs.',
            headline: 'Why do children have to wear school uniforms?'
        }
    },
    con: {
        one: {
            link: 'https://www.theguardian.com/commentisfree/2020/sep/05/britain-school-uniform-reinforces-social-divisions-children',
            text: 'Britain\'s obsession with school uniform reinforces social divisions | Rhiannon Lucy Cosslett' +
                'It’s September, and with it comes that back-to-school feeling that even as an adult you can never quite shake. I associate it with the delicious plasticky smell that emanates from the insides of pencil cases; cool, crisper mornings that hit you as you rush from the house trailing toast crumbs, and of course, new uniform – if your parents can afford it.' +
                'In the midst of a pandemic that has gutted the economy, this year parents are finding it all the more challenging to pay for their children’s school uniforms, the Children’s Society is warning. In March of this year, it found that the average cost of buying uniform for a child over the course of a year is now £340. No wonder some parents take out loans, getting into debt so that their child can conform to the school’s wishes, which often include having a sole supplier agreement with a costly uniform company, leaving them with no other option.' +
                'I have always found the justification that uniforms demolish class distinctions between pupils to be disingenuous. More than 70 years ago, my grandmother got into grammar school but didn’t go because her foster “family” (I use inverted commas because their interpretation of that role was far from familial) wouldn’t pay for the uniform. When I’ve written about poverty and education, I have received many letters from older readers who cite costly uniform as one of the educational barriers they faced.' +
                'Even now, the prohibitive cost of uniforms at certain schools has forced parents to consider other options for their children. But uniforms prevent bullying, we are told – though for every study claiming this, there is another that concludes that school uniforms have no direct negative effect on behaviour, and some have argued they can even provoke bullying.' +
                'I went to a school that was fanatical about compliance with school uniform rules, to a point that felt almost militaristic (we are talking girls being lined up against the wall and having the height of their heels measured with a ruler). The poorest children had school sweatshirts that had been washed so many times that they were badly discoloured. My own cuffs had holes in them; some of the other kids had cuffs that had fallen apart completely. Some parents tried to get away with a polo shirt without an embroidered school logo; they were always slightly the wrong shade.' +
                'These children were disciplined. I remember feeling the injustice of this, a child held up in front of other pupils, humiliated for the shabby state of their uniform. As for uniforms somehow being a facilitator of better teaching: so much time was devoted to non-compliance checks that it ate into time that could have been spent learning.' +
                'I have disliked uniforms ever since. Other European countries seem to manage perfectly well without them, but in the UK there’s a kneejerk response when you tout their abolition. Ultimately, uniforms are a form of social control and conformity in an education system that already doesn’t focus enough on the individual. Children should be encouraged to express themselves, and if they are exposed to different ways of dressing from an early age they are less likely to tease other children for not being “fashionable”.' +
                'At 14, I started buying Vogue and knocking up copies of the clothes, with help from my mum, on the sewing machine. We had very little cash but I used to love non-uniform days, the way all the cliques and subcultures were suddenly made visible, how the child you always thought of as square stalked the corridor in rainbow-coloured socks; the goths with their hoodies, usually banned, professing loyalty to Satan.' +
                'There was a bit of benign teasing, yes – I remember one boy saying my outfit looked as though it came from Oxfam, as a lot of my outfits did – but that happened anyway: your rucksack, your shoes, your hair, or your way of speaking were at risk of being picked out. There was always something, uniform or not.' +
                'The friends I have who went to the rare British secondary schools that did not have uniforms say that there was very little clothing-motivated bullying. Teachers have said the same. One supply teacher told me that one of the worst schools at which she had taught, behaviour-wise, had some of the smartest uniforms; one of the best schools had a child in attendance whose trainers were taped together.' +
                'Uniform policies reinforce gender and racial divisions as well as class ones, as racist hairstyle policies, sexist skirt rules, the sexual fetishisation of girls’ uniforms (a third of girls say they have been sexually harassed while wearing their uniforms), and the discrimination faced by trans pupils all illustrate. The argument that they prepare pupils for the workplace is increasingly redundant. With the decline of workplace dressing having been accelerated by the need to work from home during this pandemic, I have no doubt that a suit will look as outdated in a decade as hats and briefcases do now. But I have little faith in a proper conversation about uniforms taking place, so staunchly are they defended.' +
                'Why is it that, as a nation, we are so faithful to the concept where other countries are not? Why are so few alarmed by the need of educators to strip a child of his or her individuality at so young an age? And why do proponents continue to hide behind the falsehood that they help poorer pupils?' +
                'A bill to make guidance on the cost of uniforms is making its way through parliament. In Wales, guidance on cost and a need for gender neutrality has already been issued. Nonetheless, many of the nation’s schools still appear to be living in the past.' +
                'Rhiannon Lucy Cosslett is a Guardian columnist and author' +
                '',
            headline: 'Britain\'s obsession with school uniform reinforces social divisions | Rhiannon Lucy Cosslett'
        },
        two: {
            link: 'https://www.counselling-directory.org.uk/blog/2018/09/03/school-uniforms-mental-health',
            text: 'How school uniforms impact mental health' +
                'Studies looking into the impact of school uniforms on mental health have shown, for the most part, that they are indeed beneficial. A study commissioned by the Schoolwear Association involved a number of student focus groups and was conducted with the intention of finding out their perceptions of wearing a uniform.' +
                'Feedback from the participants (aged 13-17) found that having a uniform meant they didn’t have to worry about what to wear each day and didn’t worry about being bullied by their peers when it came to the clothes they wear. It was even found that uniforms improve concentration and foster a sense of pride. ' +
                'On reading these findings, I can understand why. Chances are, if kids were allowed to wear whatever they wanted to school, bullies would have a field day picking out differences in others. School uniforms do a huge amount to protect against this, but I don’t think it totally eliminates bullying based on appearance.' +
                'I remember vividly rolling up my skirt and buying the ‘right’ shoes to try and fit in with my peers at school. I still got picked on for both. It seemed that despite us all wearing the same uniform, even the subtlest of differences can be picked up.' +
                'For me personally, school uniforms affected my mental health in a negative way. At school, I struggled with anorexia and self-harm, a great deal of which was centred around how I looked and whether or not I fitted in with my peers.' +
                'It wasn’t until I went shopping, the summer after GCSEs, to pick out new clothes for college that I realised just how negatively my school uniform affected me. ' +
                'Picking out my own clothes and being free to express myself, gave me a sense of confidence I didn’t know I had. It signalled a chance for me to reinvent myself, away from the uniform I associated with so much pain. I was given a chance to be unique and explore who I was, out of my uniform. It was freeing for me. ' +
                'Weighing it up, I can see why school uniforms are considered beneficial for mental health and appreciate that my case may have been an exception to the rule. I do think, however, it’s important that, amongst the statistics and research that often come alongside mental health studies, we consider the nuances and remember that everyone experiences mental health differently. ' +
                'However your child feels about their school uniform, the most important thing is to keep an open dialogue with your child. Keep talking to them and keep mental health a part of the conversation. Try to remind them that there is more to life than school, and when they leave, a whole new world will open up to them.' +
                '',
            headline: 'How school uniforms impact mental health'
        }
    }
}

const property_rights_topic: TopicStructure = {
    pro: {
        one: {
            link: 'https://www.theglobalipcenter.com/why-are-intellectual-property-rights-important/',
            text: 'Why Are Intellectual Property Rights Important?' +
                '' +
                'Intellectual property (IP) contributes enormously to our national and state economies. Dozens of industries across our economy rely on the adequate enforcement of their patents, trademarks, and copyrights, while consumers use IP to ensure they are purchasing safe, guaranteed products. We believe IP rights are worth protecting, both domestically and abroad. This is why:' +
                'Intellectual Property Creates and Supports High-Paying Jobs' +
                '• IP-intensive industries employ over 55 million Americans, and hundreds of millions of people worldwide.' +
                '• Jobs in IP-intensive industries are expected to grow faster over the next decade than the national average.' +
                '• The average worker in an IP-intensive industry earned about 30% more than his counterpart in a non-IP industry' +
                '• The average salary in IP-intensive industries pay $50,576 per worker compared to the national average of $38,768.' +
                'Intellectual Property Drives Economic Growth and Competitiveness' +
                '• America’s IP is worth $5.8 trillion, more than the nominal GDP of any other country in the world.' +
                '• IP-intensive industries account for over 1/3– or 38%– of total U.S. GDP.' +
                '• These industries also have 72.5% higher output per worker than the national average, valued at $136,556 per worker.' +
                '• IP accounts for 74% of all U.S. exports- which amounts to nearly $1 trillion.' +
                '• The direct and indirect economic impacts of innovation are overwhelming, acounting for more than 40% of U.S. economic growth and employment.' +            
                'Strong and Enforced Intellectual Property Rights Protect Consumers and Families' +
                '• Strong IP rights help consumers make an educated choice about the safety, reliability, and effectiveness of their purchases.' +
                '• Enforced IP rights ensure products are authentic, and of the high-quality that consumers recognize and expect.' +
                '• IP rights foster the confidence and ease of mind that consumers demand and markets rely on.' +            
                'Intellectual Property Helps Generate Breakthrough Solutions to Global Challenges' +
                '• Nearly all of the 300 products on the World Health Organization’s Essential Drug List, which are critical to saving or improving people’s lives around the globe, came from the R&D-intensive pharmaceutical industry that depends on patent protections.' +
                '• Innovative agricultural companies are creating new products to help farmers produce more and better products for the world’s hungry while reducing the environmental impact of agriculture.' +
                '• IP-driven discoveries in alternative energy and green technologies will help improve energy security and address climate change.' +
                'Intellectual Property Rights Encourage Innovation and Reward Entrepreneurs' +
                '• Risk and occasional failure are the lifeblood of the innovation economy. IP rights incentivize entrepreneurs to keep pushing for new advances in the face of adversity.' +
                '• IP rights facilitate the free flow of information by sharing the protected know-how critical to the original, patented invention. In turn, this process leads to new innovations and improvements on existing ones.' +
                '• American’s Founding Fathers so recognized the importance of innovation and ensured that strong IP rights for authors and inventors are protected in the U.S. Constitution, thus making America the world’s entrepreneural leader— a fact borne out by the overwhelming number of patents, copyrights and trademarks filed by the U.S. annually.' +
                '',
            headline: 'Why Are Intellectual Property Rights Important'
        },
        two: {
            link: 'https://iptse.com/benefits-of-intellectual-property-rights/',
            text: "Getting a patent will only give you an advantage over your competitors. Here’s how you can use intellectual property rights to your advantage\n" +
                "Intellectual property refers to any new idea or invention created by an individual or a business. It is essentially an invention that has both commercial and moral value. Such inventions that are new, innovative and life-changing can be protected by the individual who came up with the concept or product under intellectual property rights and laws that govern the country. Under Intellectual Property Rights (IPRS), the inventor can get copyrights, patents, design and, trademarks and trade secret protection to shield an invention/creation from being duplicated or copied by another individual or business. In this article, we shall shed light on the benefits of intellectual property rights.\n" +
                "IPR benefits\n" +
                "There are five major advantages of intellectual property rights. They are as under:\n" +
                "• IPRs can help turn your ideas into money-makers\n" +
                "Every little or big idea you have, can prove invaluable if it is executed correctly. This simply means that your intellectual property can help you convert your ideas into products and services which are commercially successful. You can use your intellectual property to create a business on your own, pitch it to investors and start a business or even get it licensed, enabling you to sell it to various businesses in exchange for a steady stream of income. An IPR can be converted into an asset and can help turn your idea into a huge money-maker.\n" +
                "• IPRs can enhance your business’ market value\n" +
                "One of the greatest advantages of protecting intellectual property is that it can generate income for your business in many ways. You could license your IP and lend it to various businesses in exchange for a fixed income or reasonable royalties. You could also reap benefits from selling your IP products and services for a fixed amount. Selling your IP can raise your profits and even improve your market share. Also, in case you sell your company or enter an acquisition or merger with another, registered and protected intellectual property assets can significantly enhance your business’ value.\n" +
                "• IPRs can help you stand out from the competition\n" +
                "Customers are always looking for something new and exciting. Every company aspires to be the first one to offer a breakthrough product to customers. If you wish to create a certain image for your business then IPs are absolutely essential. Remember, customers associate a certain value with their favourite brands. This is where factors like goodwill, trademarks, designs and logos come into the picture. Customers recognize brands from these factors and IPRs helps businesses differentiate their products and services within a market, while promoting them to its target customers.\n" +
                "• IPRs can be accessed to raise finances\n" +
                "Another benefit of intellectual property ownership is that you can easily monetize your IP assets when you need to raise funds. You could choose to sell the IP, license it, or even use it as collateral while taking on a debt. Also, the government of India has created several laws that allow IP owners to use their IPs to their advantage while applying for any government or public funding including loans, subsidies and grants.\n" +
                "• IPRs can enhance opportunities related to exports in business\n" +
                "IPRs give you the freedom to tread into the export business as well. There is no law that states that IPs need to be protected and can be used to benefit one within specific borders. With the help of IPRs you can use your designs and brands to market your products and services in foreign lands as well, thus improving your export prospects. You can seek franchising agreements with foreign companies and even export patented products.\n" +
                "So if you have a great idea, don’t be afraid to convert it into a business. Understand your IPRS and keep the benefits of intellectual property rights in mind while doing the same\n" +
                "\n",
            headline: 'What are the Benefits of Intellectual Property Rights?'
        }
    },
    con: {
        one: {
            link: 'https://www.nature.com/articles/d41586-021-00863-w',
            text: 'It’s time to consider a patent reprieve for COVID vaccines' +
                'The pandemic is not a competition between companies and will not end without more-equal distribution of coronavirus vaccines.' +
                '30 March 2021' +
                'Agreeing temporary relief from COVID-related intellectual property would send a powerful message that richer countries and pharma companies are willing to forgo some profit for the greater good.Credit: Brian Snyder/Reuters/Alamy' +
                'The world needs around 11 billion doses of coronavirus vaccine to immunize 70% of the world’s population, assuming two doses per person. As of last month, orders had been confirmed for 8.6 billion doses, a remarkable achievement. But some 6 billion of these will go to high- and upper-middle-income countries. Poorer nations — which account for 80% of the world’s population — so far have access to less than one-third of the available vaccines.' +
                'One reason for this imbalance is that wealthier countries have been able to place substantial advance orders with the relatively small group of companies that are making vaccines, most of which are based in richer countries. Unless manufacturing and supply can be distributed more evenly, researchers forecast that it will be at least another two years before a significant proportion of people in the lowest-income countries are vaccinated.' +
                'This is why around 100 countries, led by India and South Africa, are asking fellow World Trade Organization members to agree a time-limited lifting of COVID-19-related intellectual-property (IP) rights. The main vaccine suppliers, they argue, should share their knowledge so that more countries can start producing vaccines for their own populations and for the lowest-income nations.' +
                'This idea needs to be considered seriously because a temporary IP waiver could have a role in accelerating the end of the pandemic. It would also send a powerful message from richer countries and pharmaceutical companies that they are willing to forgo some profit for the greater good. The campaign for a temporary IP waiver is called the People’s Vaccine and is backed by non-governmental organizations, as well as the United Nations’ HIV/AIDS agency, UNAIDS. Its proponents point out that many companies have already benefited from billions of dollars in public funding, through both research and development and advance purchase agreements. And that once the pandemic is over, IP protections would be restored.' +
                'But the pharmaceutical industry, richer nations and some researchers argue that temporary relief from patents won’t necessarily speed up manufacturing or supply. They say it isn’t clear whether the world has any spare manufacturing capacity. Even if patents did not apply, securing all the vaccine components, setting up factories, training people and passing relevant laws — all essential to vaccine delivery — could take more than a year.' +
                'An alternative to the lifting of IP, they say, is for companies to increase the licensing of their product designs in exchange for payment. This would allow vaccines to be made by many more companies. In addition, the World Health Organization is setting up a facility for companies to share their vaccine technology, skills and other know-how.' +
                'Companies and richer countries also note that they are already backing a vaccine scheme called COVAX, which has secured more than 1 billion doses towards a 2 billion target for 2021 to vaccinate 20% of the most vulnerable groups in countries in need of help. However, it’s not clear whether COVAX will be able to reach its full potential before some of the richer countries that are donating supplies have fully vaccinated their own people.' +
                'Richer nations were united in their opposition to the IP waiver until last week, when it emerged that the administration of US President Joe Biden is discussing its merits. One factor that could influence a change in policy is that the US government is named on a patent application for a technology used in vaccines being made by several companies, including Moderna in Cambridge, Massachusetts.' +
                'In 2016, researchers at the US National Institute of Allergy and Infectious Diseases in Bethesda, Maryland, working with colleagues at Dartmouth College in Hanover, New Hampshire, and the Scripps Research Institute in La Jolla, California, filed a patent for a technology that manipulates the spike protein found in coronaviruses, and which can be used to develop a vaccine antigen. The United States could license this technology — or choose not to enforce the patent — once the patent is granted.' +
                'Arguably the strongest argument for a temporary waiver is that patents were never designed for use during global emergencies such as wars or pandemics. A patent rewards inventors by protecting their inventions from unfair competition for a limited time. The key word here is ‘competition’. A pandemic is not a competition between companies, but a race between humanity and a virus. Instead of competing, countries and companies need to do all they can to cooperate to bring the pandemic to an end.' +
                'There is a precedent for this, says Graham Dutfield, who studies IP in the life sciences at the University of Leeds, UK. During the Second World War, the US government asked companies and universities to collaborate to scale up penicillin production, which was needed to protect soldiers from infectious diseases. Companies could have argued that this would affect profits, but they understood the necessity of subordinating their interests to the larger goal of saving lives and bringing the war to an end. “For a time the US produced virtually all the penicillin there was,” Dutfield says. “But companies did not sue each other for patent infringement and no one had any desire to hold the world to ransom by charging exorbitant prices.”' +
                'The fact that the current US administration is now considering the merits of an IP waiver is important, and other countries should do the same. It might not be the best or the only way to rapidly expand vaccine supply, but it does represent an important principle. There are times when competition helps research and innovation; there are also times when it needs to be set aside for the greater good.' +
                '',
            headline: 'It’s time to consider a patent reprieve for COVID vaccines'
        },
        two: {
            link: 'https://healthgap.org/should-we-respect-patents-or-people/',
            text: 'The World Intellectual Property Organization (WIPO) has descended on Sandton in South Africa this week in a bid to push their patent maximalist agenda on decision makers, government officials, and judges from across Africa. For South Africa to play host to a conference titled “Respect IP” is an affront to the millions of people who have died and those who continue to suffer without access to the medicines they need thanks to the greed of pharmaceutical corporations. The intellectual property (IP) system WIPO so wants the African continent to respect plays no small role in helping big pharma hold patients and governments hostage to their profit grabbing.\n' +
                'Global patent rules are governed by the Agreement on Trade Related Aspects of Intellectual Property Rights – or “TRIPS” for short. According to TRIPS, members of the World Trade Organization (WTO) must award 20-year patents to new, inventive and industrially applicable inventions, including medicines. The problem is that patent-holding corporations use this 20-year period to prevent competition and charge whatever price they feel like for medicines. For profit hungry pharma, this means setting unjustifiably high prices to make huge profits. Only after the patent ends and more competitors enter the market do prices eventually fall. Countless lives are lost waiting for this process to unfold.\n' +
                'Whilst TRIPS guarantees 20-year patents, it also guarantees a number of public health safeguards that countries can freely and legally use to prevent the abuse of patents. Using these public health safeguards is nothing new or controversial. In 2001 – following the infamous case where 39 drug companies took Nelson Mandela to court for trying to put a few of these safeguards into law – the WTO Doha Declaration on the TRIPS Agreement and Public Health was signed. This Declaration reminded the world that so-called “TRIPS flexibilities” exist and that countries are legally and rightfully able to use them as they want.\n' +
                'Yet industry and their proponents, such as WIPO, continue to flex their muscles to undermine and cause confusion around these flexibilities. They incorrectly frame TRIPS flexibilities as being radical and unnecessary interventions that are risky for future innovation and foreign direct investment (FDI) – myths that have been dispelled time and again.\n' +
                'For instance, the reality in South Africa is that 35 multi-national pharmaceutical companies shut down after the country adopted TRIPS in 1997 – instead of receiving more FDI as promised, companies left the country in droves. In contrast in India, a country famously known for using TRIPS flexibilities, FDI is flourishing. Despite threatening to leave India in 2012 if it didn’t grant a secondary patent on a salt version of an existing medicine, the pharmaceutical company Novartis actually expanded its operations in the country after the Supreme Court ruled against them. The myth just does not hold up.\n' +
                'The same is true for innovation. We are repeatedly told that patents are the only way to secure future research and development efforts. However, wherever the costs of research and development of new medicines have been analysed (in the cases where researchers have been able to access this non-transparent information), we have found that the costs pale in comparison to the profits. Novartis, for instance was making back its return on investment for imatinib mesylate (a cancer drug also known by its’ brand name, Gleevec) every 13 days in 2012, whilst suing India for not granting a secondary patent on this medicine. Moreover, if weak patent systems grant easy patents on slightly modified medicines, and make money off of this, then why would companies invest in more risky but neglected research? Also, if companies are motivated by high profits, then why would they make medicines for diseases affecting poor people, or few people, or medicines that should be used in a restricted manner? For people with TB who have seen a measly two new medicines developed in 60 years, and as we approach a terrifying post-antibiotic era, the patent system fails to deliver. These realities point to the limits of patents when it comes to encouraging medical innovation to save and improve lives, and bolster the case for exploring the many other ways of remunerating creators, including prizes and pooled funding.\n' +
                'However, these false narratives are so successfully peddled by the machines of big business and their proponents like WIPO, that despite great need, most countries haven’t used TRIPS flexibilities effectively, fully or at all. For years South Africa has blindly handed out patents (mostly to foreign companies) without scrutinising to see if they are deserved and has never issued a compulsory license to date. In contrast, ironically, the United States is perhaps the world’s most frequent user of compulsory licenses. Yet anyone who dares to try to do the same is singled out as a bad trade partner and put on the US Special 301 Watch List – “do as we say but not as we do”.\n' +
                'Countries should be provided with support to amend national patent laws to incorporate all TRIPS flexibilities. Instead WIPO provides behind the scenes technical “assistance” to governments amending their laws that would see harsher patent regimes that further protect industry interests. Instead of adopting and using TRIPS flexibilities to their fullest extent, countries are pushed to adopt worse TRIPS “plus” measures.\n' +
                'WIPO has repeatedly pushed for greater enforcement of IP. Indeed, this is their message to governments across Africa through this conference to “Respect IP.” The disastrous impacts of promoting IP enforcement at the cost of access to generic medicines have been felt sharply in Africa. In 2008 and 2009, the EU respected IP so much that they seized consignments of lifesaving generic medicines on their way to Latin America and Africa. One such shipment was of abacavir sulfate, a key HIV medicine on its way to a Unitaid funded programme implemented by the Clinton Foundation in Nigeria. It was also in 2008, that Kenya put in place anti-counterfeiting legislation – sections in the Act caused confusion that would result in arbitrary seizures of generic medicines under the guise of fighting counterfeit medicines. The Act was challenged by people living with HIV who won the case in 2012 when the High Court of Kenya held that while IP should be protected, “where there is the likelihood, as in this case, that their protection will put in jeopardy fundamental rights such as the right to life of others, I take the view that they must give way to the fundamental rights of citizens in the position of the petitioners.”\n' +
                'What the High Court of Kenya saw so clearly was the primacy of the right to health. Decades before the onslaught of TRIPS began, the right to health was firmly established in international law obligating governments to respect, protect, and fulfil people’s ability to access quality healthcare. In contrast, at its core TRIPS aims to protect individual creator “rights”. Whilst human rights law does mandate that governments protect the moral and material interests of creators; this does not imply that patent “rights” are human rights, as patents are merely one amongst many ways to reward creators. The Special Rapporteur on Culture Rights recently affirmed that there is no human right to patent protection, stating, “where patents and human rights are in conflict, human rights must prevail.” Similarly, the Human Rights Council and the Special Rapporteur on Health have both affirmed that the right to health supersedes patents.\n' +
                'Nothing in the agenda for WIPO’s grand conference indicates that any of these issues will be reflected in the presentations or sessions. The very real negative impact that patents and their enthusiastic protection and enforcement can have on people certainly finds little space for discussion in this forum. African governments must take their cue from the Kenyan High Court that was able to see through the attempts to push through greater IP enforcement by creating confusion over issues of safety or quality of medicines. And whilst amending patent laws and policies, African governments will be wise to remember that the mandate of WIPO is the promotion of patents and foreign profits, not human rights. Decision-makers attending the conference, and the governments they represent, should check the facts. The current patent system fails local industry, provides no incentive for foreign investment, and impedes innovation. Most seriously, it costs the lives and health of millions.\n',
            headline: 'Should we respect patents or people?'

        }
    }
}

const obesity_topic: TopicStructure = {
    pro: {
        one: {
            link: 'https://www.theglobeandmail.com/life/health-and-fitness/health-advisor/why-we-should-consider-obesity-a-disease/article16370893/',
            text: 'Why we should consider obesity a disease' +
                'Welcome to Health Advisor, where contributors share their knowledge in fields ranging from fitness to psychology, pediatrics to aging. Follow us @Globe_Health.' +
                'Is Obesity a disease?' +
                'Last year, the American Medical Association officially acknowledged obesity as a "disease." Not everyone agrees. There is no doubt that excess weight can cause a wide range of health problems, including heart disease and cancer – not unlike smoking. But, while we may consider smoking an addiction, we would hardly consider it a disease. So why should obesity qualify?' +
                'There are at least three reasons why obesity is different.' +
                'The first is related to the complexity of energy balance. While simplistic notions of balancing "calories in and calories out" work well in physics, with obesity we are dealing with physiology (which I like to describe as "biology messing with physics"). Our bodies do a remarkable job of sensing changes in caloric intake or expenditure and show a wide variation in how they respond to such changes.' +
                'Overfeeding studies at the Mayo Clinic showed an almost four-fold difference in the amount of weight gained by healthy volunteers who were all fed an extra 1000 calories per day for eight weeks. Similarly, numerous studies have shown that individuals following exactly the same diet or exercise program will vary widely in their weight-loss response.' +
                'No amount of binge eating will turn Jack Sprat into a sumo wrestler. Meantime, his wife may well find herself stuck with her own excess weight, no matter how hard she tries to lose it.' +
                'Which brings me to the second point: Once established, obesity becomes a chronic problem. This has to do with the fact that our bodies will always defend the highest weight that we have achieved. We refer to this as the "set-point." No matter how you got to 200 pounds, once there, it becomes the weight that your physiology will defend (and it will do so most effectively).' +
                'We not only have increasingly better insight into exactly how this set-point readjusts to ever-increasing body weight (through a process of inflammation and micro-scarring in the hypothalamus, the brain centre that regulates energy balance) but we also understand many of the hormonal and metabolic changes that occur as our bodies effectively defend their increasing fat mass.' +
                'Rather than viewing fat tissue as a simple storage depot for excess calories, we now look at body fat as a complex organ that interacts closely with other organs to maximize and sustain fat stores (perhaps in preparation for the next famine, even if it never comes).' +
                'This complicated physiology, and not simply a lack of motivation or willpower, is the real cause of yo-yo dieting. Indeed, the few people who do succeed in losing weight and keeping it off, will have to continue fighting their obesity every day (whether through caloric restriction or considerable amounts of exercise). For the rest of their lives, they will continue to be at risk of regaining weight should they ever abandon or even slightly reduce their efforts.' +
                'Thus, once established, obesity itself creates a vicious cycle that "locks in" a higher body weight. This altered physiology explains why telling someone with obesity to simply eat less and move more to treat their obesity is about as effective as telling someone with depression to simply cheer up.' +
                'The third reason that warrants considering obesity a disease is about access to treatments in our health care system. While we spend billions of dollars each year treating the consequences of obesity, we spend almost nothing on preventing and treating obesity itself. Whether we consider access to behavioural, medical or surgical programs for obesity, these are virtually non-existent in our health care system. Compare this to the wide range of specialized services routinely offered to patients with diabetes, heart disease or any other chronic condition (funny enough, – even smoking).' +
                'Unfortunately, obesity continues to be viewed by governments, payers, healthcare professionals, media and the public as being largely caused by laziness and over-consumption, a stigmatizing oversimplification of a complex health problem.' +
                'In contrast, if governments, healthcare professionals, health benefits payers, media and more individuals viewed obesity as a disease, we can perhaps create a world where health professionals are trained and remunerated for providing treatment services, where people with obesity can seek medical assistance with confidence, and where funders see the provision of obesity prevention and treatment resources and related research as a priority.' +
                'Arya M. Sharma is Professor and Chair in Obesity Research and Management at the University of Alberta. In 2005, he spearheaded the launch of the Canadian Obesity Network. He is also Past-President of the Canadian Association of Bariatric Physicians and Surgeons. Dr. Sharma maintains a widely-read blog on obesity prevention and management. You can follow him on Twitter @DrSharma',
            headline: 'Why we should consider obesity a disease'
        },
        two: {
            link: 'https://www.usnews.com/debate-club/should-the-american-medical-association-have-classified-obesity-as-a-disease/call-obesity-what-it-is-a-disease',
            text: 'Call Obesity What It Is: a Disease' +
                'The American Medical Association\'s recognition of obesity as a disease aligns perfectly with the science of obesity prevention and treatment. By acknowledging that obesity is a health problem, not an image or character problem, the AMA joins obesity experts on the path to resolve this health challenge based on the science and evidence of what works.' +
                'This recognition is nothing new. Along with other groups, The Obesity Society, the National Institutes of Health, and the Centers for Disease Control recognized obesity as a complex chronic disease in the guidelines first issued in 1998. Experts have long acknowledged that obesity is a multifaceted condition with numerous causes, many of which are beyond an individual\'s control. Worse, the disease is a driver of much suffering, poor health and early mortality. And those affected are too often subject to enormous societal stigma and discrimination.' +
                'An unclear definition of obesity has certainly led to some confusion across the board. Those affected do not simply look different from others; there is much more happening beneath the appearance of a larger body type. Obesity is a result of the body\'s failure to regulate weight and adiposity (fat), which leads to a disruption of the body\'s processing of food to make energy (or a metabolic disorder). It\'s this metabolic disorder and the resulting chronic diseases, including heart disease, type 2 diabetes and many others, that mark obesity.' +
                '[See a collection of political cartoons on health care.]' +
                'Calling obesity what it is, "a disease," can help direct more resources to needed research, prevention and treatment. It can help to encourage healthcare professionals to recognize obesity treatment as a needed and respected vocation, and, overall, it can help to reduce the stigma and discrimination experienced by the millions affected.' +
                'This conversation has been a long time coming and it\'s a vital step toward combatting the epidemic. As we work to define obesity as a chronic, multifaceted disease faced by millions in the U.S., we can identify more effective ways to prevent and treat obesity - the greatest challenge to American health this century.' +
                'The Obesity Society is taking steps to support the recognition and treatment of obesity as a disease by providing resources and information to clinicians and policymakers through our recently launched Treat Obesity Seriously campaign. We hope others will join us in our effort.' +
                '',
            headline: 'Call Obesity What It Is: a Disease'
        }
    },
    con: {
        one: {
            link: 'https://www.medpagetoday.com/meetingcoverage/ama/39918',
            text: 'Obesity is not a disease' +
                'Pretending otherwise will stoke an epidemic and crush the NHS' +
                '‘Well, what diets have you tried so far?’ asked the GP, flicking through the patient’s notes. I was an innocent trainee doctor on my general practice placement at the time and watched the interaction carefully, sensing a row was about to ensue. ‘Look, I don’t want to go on a diet, I want you to prescribe me these,’ snapped the patient, bringing out a neatly folded page she had torn out of a magazine. The GP, rolling his eyes at me, took the paper but didn’t read it. I suspected he’d read it before. This was yet another example of what’s becoming a very British epidemic: obesity being self-diagnosed as disease.' +
                'The doctor attempted to explain that tablets really aren’t suitable in her case. As well as having some potentially nasty side effects, they’re expensive to prescribe, and don’t offer a long-term solution. This was clearly not what the woman wanted to hear. ‘Fine then, don’t help me, see if I care. I’ll get my sister to get them off her GP — he gives her whatever she wants’; and she stormed out. It struck me as bizarre that while some people using the NHS are dangerously malnourished, other people are desperate to take tablets to ensure that their food passes through their body unabsorbed, while the taxpayer foots the bill.' +
                'It happens all the time. The patients who are not interested in changing their diet in any way, demanding to have their cake, eat it and then pop a pill so that the calories never touch their waistline. And as a result, Britain now combines austerity with obesity. The majority of us are now overweight or obese — a third of children are considered too heavy. It costs an extra £5 billion a year, and 300 hospital admissions a day are directly due to obesity.',
            headline: 'Obesity is not a disease'
        },
        two: {
            link: 'https://www.spectator.co.uk/article/obesity-is-not-a-disease',
            text: "Well, what diets have you tried so far?’ asked the GP, flicking through the patient’s notes. I was an innocent trainee doctor on my general practice placement at the time and watched the interaction carefully, sensing a row was about to ensue. ‘Look, I don’t want to go on a diet, I want you to prescribe me these,’ snapped the patient, bringing out a neatly folded page she had torn out of a magazine. The GP, rolling his eyes at me, took the paper but didn’t read it. I suspected he’d read it before. This was yet another example of what’s becoming a very British epidemic: obesity being self-diagnosed as disease." +
                "The doctor attempted to explain that tablets really aren’t suitable in her case. As well as having some potentially nasty side effects, they’re expensive to prescribe, and don’t offer a long-term solution. This was clearly not what the woman wanted to hear. ‘Fine then, don’t help me, see if I care. I’ll get my sister to get them off her GP — he gives her whatever she wants’; and she stormed out. It struck me as bizarre that while some people using the NHS are dangerously malnourished, other people are desperate to take tablets to ensure that their food passes through their body unabsorbed, while the taxpayer foots the bill." +
                "It happens all the time. The patients who are not interested in changing their diet in any way, demanding to have their cake, eat it and then pop a pill so that the calories never touch their waistline. And as a result, Britain now combines austerity with obesity. The majority of us are now overweight or obese — a third of children are considered too heavy. It costs an extra £5 billion a year, and 300 hospital admissions a day are directly due to obesity. To pick up the newspapers is to witness a country adjusting itself to losing a national battle of the bulge." +
                "Take the East Midlands Ambulance Service. It emerged this week that it has been picking up so many fat patients — weighing in excess of the 28-stone maximum — that it needs a new fleet. It has, hitherto, been struggling along with just one ambulance for fatties (a ‘bariatric’ vehicle), but now thinks all 272 of its ambulances need to be upgraded with double-wide stretchers for patients who (it says) can weigh in at 55 stone. The plan will cost £27 million." +
                "Once the obese patient is in hospital, a whole new set of equipment is required: reinforced operating tables, sturdier trollies, longer needles and even wider MRI scanners. There is a great demand for bariatric surgeons. One of them, Sally Norton, recently wrote in the Royal College of Surgeons’ house journal that without special equipment for the obese, there may be ‘enquiries into the potential use of veterinary or zoological scanners, with resultant loss of dignity for the patient’. There is a cost to all this: in the kit, and in operations like gastric bypass operations, which have increased sevenfold over the last seven years." +
                "Moving obese patients out of their house can be too difficult for the NHS. Recently the fire service had to demolish two walls of a house in south Wales so that a 63-stone teenager could be taken to hospital. This required more than 40 emergency service workers at an estimated cost of £100,000. Over the past five years, fire services have been called to more than 2,700 incidents to assist ‘severely obese’ people, including some who had got stuck in the bath. Rescuing fatties is now a routine operation, with its own entry in the Fire Brigade incident reporting system (filed under ‘bariatric persons’)." +
                "So what to do? The government spends money asking us to eat ‘five a day’ fruit and veg, but it seems to have no effect. Nottingham, the fattest region in Britain, recently decided to spend £500,000 on replacing pavements in areas with particularly fat pedestrians, to try and encourage people to walk more. Our landscape is being, quite literally, reshaped in order to accommodate the obese. In the past few years, we have moved from being outraged about the epidemic to just planning around it. Like a middle-aged man deciding to eat what he wants and let himself go, Britain is pulling on a pair of tracksuit bottoms and heading to the fridge." +
                "It need not be this way. For too long, my fellow doctors have pussyfooted around their obese patients, too scared to confront the, er, elephant in the room. They don’t want to cause offence. Unbelievably, draft guidelines announced last year by the National Institute of Clinical Excellence and Health (Nice) suggested that doctors should even avoid the use of the term ‘obese’ for fear that larger patients might be upset. Instead, Nice recommended advising corpulent patients that they should seek a ‘healthier weight’." +
                "But nice euphemisms mean that people don’t confront reality. I’m not going to stop diagnosing cancer just because people don’t like hearing the dreaded word. So why should it be different when informing people that they are obese? Sometimes morbidly so. What Nice is delicately skirting round is what many doctors, nurses and dieticians will confirm: people don’t like being told that they are overweight, even if it’s objectively clearly the case. And by pretending that this is a disease, the doctors are making it even worse." +
                "There’s something comforting about blaming obesity on genes. It enables people to relinquish responsibility for their weight, which can be seen as outside their control. It’s nothing new, either. Years ago, fat people blamed their ‘glands’. When I started medical school, I patiently waited for us to be taught about these magical ‘glands’ that made people fat. I’m still waiting. Even when people have problems with an underactive thyroid, which can slow the metabolism and result in weight gain, this can be treated with thyroid replacement tablets and the metabolism returns to normal. As a rule, however, fat people have one thing in common: they eat more than they need to." +
                "Certainly some people metabolise food at a different rate to others, meaning they are more likely to lay down fat stores than other people. But this is a reason to eat less, not to become fat. You cannot get away from the basic biology of the human body — fat is simply stored excess energy, and weight gain is only possible when the total amount of energy consumed exceeds the total amount of energy expended. Even those who have a genetic predisposition to become fat are not slaves to their DNA." +
                "An in-depth study published last year, which looked at the genes of more than 20,000 people and was conducted at the Medical Research Council’s epidemiology unit in Cambridge, found some people are predisposed to be overweight. But an active lifestyle and reducing food intake can counteract that. Simple. While some will be annoyed by this research, I find it empowering. The idea that our genes control us is profoundly depressing. After all, there is more to being human than a few strands of DNA." +
                "The rate of people considered clinically obese has risen from around 1 to 2 per cent of the population in the 1960s to over 25 per cent now. Why? A simple answer would be lifestyle, but it’s actually a little more complicated. A fascinating survey conducted by the Department of Health compared data collected from 1967 and 2010. It showed that, while people back then were slimmer, they ate fattier foods and had access to far fewer gyms. We eat better now, we work out more. But we live relatively sedentary lives. Only three out of ten households had a car then, compared to seven out of ten now. While 75 per cent of people walked for at least half an hour a day in the 1960s, this is only about 40 per cent now." +
                "What really stands out, more than the lifestyle differences, is the sharp contrast in the attitudes towards obesity between the two different eras. The 1967 survey found that nine out of ten people had attempted to lose weight in the past year, compared with barely half of adults questioned in 2010. Perhaps most tellingly though, 40 years ago only 7 per cent of those people who considered themselves overweight had failed to do anything about it, compared with nearly half now." +
                "It would be easy to blame Britain’s fatness on lifestyle changes, but the worst of it is attitude. People just aren’t bothering to lose weight any more. Perhaps obesity is viewed as more normal. But this is also down to the attitude that we doctors increasingly encounter in our consulting rooms: the reluctance of patients to accept that ailments can be blamed on their behaviour, for which they are reluctant to take responsibility." +
                "Patients blame obesity on the government, cunning food manufacturers, their parents and their genes. They demand fat-loss pills on the NHS and stomach-stapling surgery as a right. In a world where health care is becoming consumerised, patients see themselves as customers. There’s not much demand for hard truths." +
                "America has severe obesity problems, and seems resigned to them. But Britain has a National Health Service, and therefore a far higher capacity to change. It ought to be easy. Doctors should be required to tell patients a blunt truth: if you’re fat, eat less, exercise more, or both. And if you keep guzzling the tasty treats, you will die earlier. It’s not a disease, it’s a mindset — and that means it can be changed. We doctors need to be a little less understanding, a little more judgmental, and realise that our oath — ‘do no harm’ — must come before our desire to save the feelings of our patients. The truth can be the hardest drug to administer. But holding our tongues, prescribing the fat pills and bankrupting the NHS in the process is the worst solution of all.",
            headline: 'Obesity Not a Disease'
        }
    }
}

interface Message {
    id: number;
    user: string;
    content: string;
    timestamp: string;
}




function getSources(condition: string, taskTopic: string) {
    if (condition != "neutral") {
        switch (taskTopic) {
            case 'Should students wear school uniform?':
                return students_topic[condition]
            case 'Should intellectual property rights exist?':
                return property_rights_topic[condition]
            case 'Is Obesity a Disease?':
                return obesity_topic[condition]
        }
    }
    else {
        switch (taskTopic) {
            case 'Should students wear school uniform?':
                return students_topic
            case 'Should intellectual property rights exist?':
                return property_rights_topic
            case 'Is Obesity a Disease?':
                return obesity_topic
        }
    }
}

export function generatePrompt(userInput: string, taskTopic: string, condition: string, messages: Message[] | null) {
    let prompt = prompt_stance[condition];
    prompt = prompt.replace('$SOURCES$', JSON.stringify(getSources(condition, taskTopic)))
    if (messages !== null) {
        prompt += ' The following is the chat history:'
        const startIndex = Math.max(0, messages.length - 6);
        for (let i = startIndex; i < messages.length; i++) {
            const message = messages[i];
            prompt += ` ${message['user']}: ${message['content']} date of message: ${message['timestamp']}`;
        }
    }
    prompt += ' This is the prompt of the user: ' + userInput;
    return prompt += 'Please proceed with answering the question as described above, adhering to the guidelines , comprehensive reporting and referencing .Please cite all arguments with the given sources. The information should be structured as follows: an short answer to the query of the use, a detailed body to underline the answer given. Include links to all sources at the end for further reading."'
}