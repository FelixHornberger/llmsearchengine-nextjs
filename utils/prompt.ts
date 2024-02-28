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
            link: 'https://www.gov.uk/government/publications/ip-basics/ip-basics',
            text: 'IP Basics' +
                'The new UK National Security and Investment Act 2021 comes into effect fully from 4 January 2022. Businesses and investors should check the guidance to understand what types of acquisitions are covered by the new rules.' +
                'What is IP?' +
                'Unlike the products they protect, IP assets cannot be seen or touched. So, it can be difficult for businesses to appreciate their true value. Like other forms of property, you can buy, sell and license IP. IP Rights can enable their owner to take action under civil law to try and stop others from replicating, using, importing or selling their creation.' +
                'The different types of intellectual property rights are:' +
                'Patents protect new inventions and cover how products work, what they do, how they do it, what they are made of and how they are made.' +
                'Trade marks protect brands. This could be for a business name, a product or a service. The trade mark could be made up of words, logos or a combination of both and can even be sound or action based.' +
                'Design protects the overall visual appearance of a product.' +
                'Copyright protects literature, artistic works, photographs, music, dramatic works, software, databases, films, radio and television broadcasts, sound recordings and published editions.' +
                'Trade secrets might also be an important part of your business. The law of confidentiality protects trade secrets. To keep trade secrets protected, you must establish that the information is confidential, and ensure that anyone you tell about it signs a non-disclosure agreement (NDA). If they then tell anyone about it, this is a breach of confidence and you can take legal action against them.' +
                'You can download a template of a Non-Disclosure Agreement.' +
                'IP in business planning' +
                'Your business builds goodwill and recognition through your brand, product or service. This value builds up over time and becomes integral linked to your business’s IP assets. If used well, IP can offer a solid platform for any business to grow. How you plan, manage and protect your ideas should be a crucial feature in your business planning. What seems unimportant today could be worth millions of pounds in the future, if protected.' +
                'Getting help' +
                'One of the first things you should do is understand if you should protect your IP. You could invest time and money in your business, only to later find the IPalready belongs to someone else.' +
                'The free, fast and easy-to-use online IP Health Check is used by thousands of businesses to both identify their IP assets and provide advice on how to protect them:' +
                'The British Library Business and IP Centre supports entrepreneurs, inventors and small businesses and is also a source of help.' +
                'Advice on creating a business plan.' +
                'Valuing your IP' +
                'You should regularly take stock of your IP assets. This is called an ‘IP Audit’ and it will help you in valuing your IP.' +
                'When conducting an IP audit, you should:' +
                'After you have done this, you should value your IP assets as you would your physical assets. For example your customer list or database can be a competitive intangible asset you should identify and protect. A secret recipe or a unique service technique might also fall into this category.' +
                'As a starting point, try to calculate how much time would be required to develop these assets from scratch or how much a competitor might pay for them. An accountant may be able to help you value these assets and place them in context of your business.' +
                'Licensing IP' +
                'You might consider licensing your intellectual property, or acquiring the right to license others’ IP, for some of the following reasons:' +
                'Sharing risk' +
                'Where a licensor provides the right to manufacture and sell products, it receives revenues but does not take the risk of manufacturing, promoting or selling the products. The licensee then has the right to use the IP without the expense of developing the product.' +
                'Revenue generation' +
                'An IP owner can both commercialise the IP themselves and raise income by licensing the IP to someone else.' +
                'Increasing market penetration' +
                'IP holders can license another business to trade in territories that the owner cannot cover.' +
                'Reducing costs' +
                'A business may ‘buy-in’ innovation to reduce its research and development costs.' +
                'Saving time' +
                'A business may get its products or services to market more quickly by acquiring a licence to use existing IP, instead of re-inventing the wheel (sometimes called an ‘engineering workaround’).' +
                'Accessing expertise' +
                'By taking a licence, a business may tap into expertise that it does not have in-house.' +
                'Competitive advantage' +
                'By acquiring a licence to use IP, a business may obtain an advantage over its competitors' +
                'Collaboration agreements' +
                'Businesses may want to work together to develop new products and services.' +
                'Whenever you think about taking or granting a licence of any IP, the first step should be to consider the needs and objectives of your business. The specific terms and conditions on which IP is licensed is then usually negotiated by the licensor and licensee.' +
                'Franchising' +
                'When a successful business wants to expand, one option is to license IP to franchisees. In addition to the actual product or service, the various forms of IPsuch as trade marks, promotional materials, business and marketing systems, shop fit-outs and confidential information can all be licensed to the franchisee to use.' +
                'Franchising (see British Franchise Association) is a way of sharing IP with others to distribute goods or services - the franchisor owns the IP rights and the franchisee pays a fee or regular royalties to use them.' +
                'A major benefit of the franchise system is the ability to trade under a well-known trade mark. Usually, the franchisor grants a trade mark licence to the franchisee in return for a percentage of the gross turnover.' +
                'One example of a successful franchise is Costa® coffee. They give the franchisee permission to use their brand and a business template to use. This sets out how the premises must look, the service levels and training required. The franchisee then gives Costa® a percentage of their earnings.' +
                'IP Health Check also shows what IP your business has so you can see if franchising could work for you.' +
                'Trade marks' +
                'Many people refer to their trade mark as their brand, although a brand is more than just a company logo. A brand is a ‘promise of an experience’ and offers consumers assurance about the nature of the product or service they will receive. The various IP rights covered in this guide combine to provide legal protection for some of the most important aspects of a brand.' +
                'A trade mark is a crucial component of a brand; it distinguishes the goods and services from one trader to another. It can be a word, phrase or logo, and can even be a shape, colour, sound, aspect of packaging or any combination of these. You can use your trade mark as a marketing tool so that customers can more easily recognise your products or services.' +
                'Registration at Companies House gives you no rights to prevent others using your trade mark - neither does owning the domain name for your website!' +
                'Registered trade marks' +
                '• may put people off using your trade mark without your permission' +
                '• make it much easier for you to take legal action against anyone who uses your trade mark without your permission' +
                '• allows Trading Standards Officers or Police to bring criminal charges against counterfeiters if they use your trademark' +
                '• means you can sell it, franchise it or let other people have a licence that allows them to use it.' +
                '• trade marks are registered for a fee by the Intellectual Property Office in the UK and other bodies worldwide.' +
                'They must be renewed every ten years, but can be renewed indefinitely. Registered trade marks can be identified by the ® symbol.' +
                'The most effective trade marks are those ‘distinctive’ to the goods and services they protect. This allows consumers to identify your goods or service from your competitors.' +
                'Not everything can be registered as a trade mark. Trade marks which can be difficult to register include those which:' +
                '• describe the products you sell or the services you offer, for example ‘mature cheese’;' +
                '• are not clearly of commercial origin for customers, for example, the phrase ‘Putting Customers First’' +
                '• have become customary in your line of trade, for example ‘Four by Four’ or ‘4 x 4’ for vehicles' +
                '• include a specially protected emblem, for example, the ‘Red Cross’ or the ‘Olympic Rings’' +
                '• are offensive to the public, for example, trade marks which contain taboo words or pornographic images;' +
                '• deceive the consumer' +
                '• are three dimensional shapes which are typical of the goods you are interested in, for example, the shape of a simple plastic bottle for your drink product' +
                'If your trade mark does not fall into any of these categories, there is a good chance that it will be considered acceptable for registration.' +
                'If, after being published, your trade mark does not then attract any objections from other trade mark holders, it will be registered.' +
                'You should receive a formal report explaining the outcome of the examination within 10 days of applying. If your application is acceptable, it can be registered in as little as 3 months from the date of filing. It can obviously take longer if you have objections which you need to overcome.' +
                'Getting help' +
                'For advice on building your brand, registering overseas or more complex aspects of the trade mark process, contact the Chartered Institute of Trade Mark Attorneys.' +
                'For more detailed information on trade marks, including how to search for existing registered trade marks and how to register internationally.' +
                'Unregistered trade marks' +
                'If a business doesn’t register its trade mark, it may still be able to take some action if someone uses the mark without permission. It would need to use the common law action of ‘passing off’. However, passing off can be very difficult and expensive to prove.' +
                'Broadly, to be successful in a passing off action the trade mark owner must prove that:' +
                '1. There is protectable goodwill in the mark;' +
                '2. There is a misrepresentation of the mark, and' +
                '3. That misrepresentation caused damage.' +
                'Without misrepresentation there is no passing off. This is a complicated area of law and in any such situations it would be wise to seek advice from an IPAttorney.' +
                'Intellectual Property: Herdy provides a case study on how to successfully use a trade mark within a business.' +
                'Designs' +
                'Design for appearance' +
                'Design refers to the appearance or ‘look’ of products and there are two types of protection in law:' +
                '• a registered design is where your designs are examined and registered by the IPO or other international bodies' +
                '• an unregistered design right is automatic but offers significantly less protection' +
                'Registered design' +
                'Design registration protects the appearance or ‘look’ of a product, providing it is new and has individual character. The design must have a special shape, configuration, pattern or ornamentation to be registered.' +
                'Some people confuse patent protection and design protection. Designs protect the visual appearance of a product whereas a patent protects a technical product and how it functions.' +
                'Registering your design allows you to gain a marketing edge by preventing others from using it without your permission.' +
                'You cannot obtain a registered design right for an idea or concept, it’s a ‘what you see is what you get’ right. So, it’s vitally important that your application contains images of the product or the packaging you wish to protect. This must be identical to those you intend to actually place on the market.' +
                'Some products can’t be registered because they don’t fit the criteria to be considered a design. In general terms, these are products shaped in a particular way to achieve a technical function, or solely to fit to something else.' +
                'You can’t register designs which are immoral or illegal, or contain a protected emblem such as the Royal crown.' +
                'There are fees for registering a design, and the process takes around four weeks providing your design meets the above criteria.' +
                'Unregistered design right' +
                'Automatic design rights do exist in the UK (UK Unregistered Design Right) and in Europe (Unregistered Community Designs). However, they offer limited protection and can be difficult to enforce. They also have a much shorter duration.' +
                'You should carefully consider the potential effect on your business if relying solely on unregistered design right. Where disputes arise, you may have to prove the existence of your rights. Unlike registered designs, it will be your responsibility to prove intentional copying.' +
                'Advice' +
                'The IPO has an Instagram account with lots of useful information to help creatives know their rights, protect and champion their products. Follow us @ipforbusiness and use the hashtag #IP4biz.' +
                'If you are a designer, design maker or design innovator, Anti Copying in Design (ACID) offers practical advice and specialist support to help you understand and manage your intellectual property.' +
                'Intellectual Property: Stuart Scott successfully used their design right within their business.' +
                'Copyright' +
                'Copyright gives its owner the right to exclusively control and exploit their creative works.' +
                'It protects literature, art, music, dramatic works, sound recordings, photographs, software, databases, films and radio and television broadcasts. Copyright protects the expression of, not the idea behind a work. For example, the text and illustrations in a manual are protected, but not the ideas expressed in it.' +
                'In the UK copyright is an automatic right which comes into being as soon as a qualifying work is created. As such, there is no formal registration and no fees to pay.' +
                'Generally, the duration of copyright is usually for the life of the creator, plus 70 years from the end of the calendar year in which they died.' +
                'However, different terms of duration apply for some types of copyright work, and certain older works may be subject to different rules.' +
                'Copyright grants the copyright owner exclusive rights to authorise or prohibit certain uses of their works. This includes;' +
                '• copying the work' +
                '• distributing copies to the public' +
                '• adapting the work' +
                '• communicating the work to the public (for example, by broadcasting it or putting it on the internet)' +
                '• renting/lending copies to the public, and' +
                '• performing the work in public' +
                'Copyright and your business' +
                'Businesses create and use copyright works all the time often without even realising it. It is important for businesses to understand how to commercialise and protect copyright works and how to lawfully use of copyright works belonging to others.' +
                'If you commission third parties to create copyright works for your business, it is really important that you agree on who will own the copyright before the work is created. Some businesses commission work only to later find out that the creator still owns the copyright, meaning the business is limited in how it can use it.' +
                'You should always check the terms and conditions, and if you are unsure you should check with the business providing the work.' +
                'Intellectual Property: Radwraps Ltd provides a good example of a business makes the most of their Copyright.' +
                'Patents' +
                'A patent protects your invention and lets you take legal action against anyone who makes, uses, sells or imports your invention without your permission.' +
                'A patent doesn’t keep your invention secret. In return for the legal protection you get, you share how to create or replicate your invention with the public. When your patent expires, other people can then make and sell your invention.' +
                'You can only apply for a patent if you have created something that is inventive, new and useful. A patent can protect innovations like machines, industrial processes, pharmaceuticals and their production methods, computer hardware, electrical appliances and biological products and processes.' +
                'You can’t patent, for example, literary, dramatic, musical or artistic works, anything that’s an idea, a way of thinking, a scientific or mathematical discovery.' +
                'You have to pay the Intellectual Property Office to apply for a UK patent and the process can take several years before you receive a granted patent.' +
                'Many applications never result in a granted patent because they don’t satisfy the legal requirements. Patents can give protection for 20 years provided renewal fees are paid each year.' +
                'Getting a patent does not guarantee business success. You should carefully consider how you are going to use the patent and what you will gain from it.' +
                'It’s generally your responsibility to enforce your patent and ensure it is properly protected, meaning that any legal action against another party will be started, and funded, by you.' +
                'So, you need to make sure that the potential benefit of a patent will outweigh the time, effort and money it takes to get and maintain one.' +
                'Advice' +
                'We strongly advise you to seek legal advice before applying for a patent as it can be a complex and costly process. A patent specification is a legal document and requires specialist skills to draft properly. Only 1 in 20 applicants get a patent without professional help. Your chances of obtaining a useful patent are much greater if you use an IP professional.' +
                'Patent attorneys are legally qualified and independently regulated. Some will give you initial advice free of charge. To make the most of this free advice it is recommended that you think about the questions you want to ask beforehand. This will allow you to gain as much information from the consultation as possible.' +
                'A list of Patent Attorneys is available from the Chartered Institute of Patent Attorneys.' +
                'UK PatLib Network centres cover all areas of the UK. They hold clinics with IPprofessionals and offer help on a variety of services including patent searching.' +
                'Fact' +
                'The most common mistake made by inventors is to reveal their invention before applying for a patent. If you have made your invention public, you could lose the possibility of being granted a patent.' +
                'Intellectual property: GripIt Fixings shows how a patent can be used to gain a commercial advantage.' +
                'Resolving disputes' +
                'Right owners have the right to take civil court action to stop infringement and to seek damages. Remember: This works both ways, so do carry out all of the necessary checks to avoid unintentionally infringing other people’s IP.' +
                'Counterfeiting and piracy relate to wholesale trade mark, registered design and copyright infringements. These are usually criminal acts, and Trading Standards, HM Revenue and Customs and the Police have powers to seize and destroy infringing goods and to bring criminal proceedings.' +
                'Mediation' +
                'The IPO also runs a mediation service for IP disputes. Mediation offers a way of resolving disputes without going to court. It is cheaper and quicker than litigation and the outcome is usually beneficial to all parties.' +
                'Your IP abroad' +
                'If you plan to do business or are already trading abroad, you must know how to use, guard and enforce your rights.' +
                'IP rights tend to be territorial they only give protection in the countries where they are granted or registered. This means that if you only have UK protection, others may be allowed to use your IP abroad without infringing your rights. If you are thinking about trading abroad then you should consider registering your IPrights abroad.' +
                'For copyright, however, the UK is a member of several international conventions. This means that UK works are protected in most countries automatically.' +
                'Some countries may allow you to extend your UK protection, and will accept it as protected in that country after completing certain local formalities.' +
                'The International IP Service has produced country guides which will help you apply these principles in the markets throughout the world. They describe the issues you may face with infringement, how you can effectively tackle this.' +
                'IPO attaché network' +
                'If you are thinking of doing business in South East Asia, China, Brazil or India, help and advice is also available through our UK overseas intellectual property attachés network.' +
                'They work with local Department for Business and Trade (DBT) and Foreign and Commonwealth Office (FCO) leads to provide support for UK businesses seeking advice on local IP matters in those markets.' +
                'They also:' +
                '• raise awareness through business outreach. This includes briefing business delegations, joint webinars with UKTI and local trade associations' +
                '• communicate with host governments and stakeholders about local and international IP frameworks and environment' +
                'Further reading' +
                'IP for business' +
                'Businesses create and use intellectual property all the time, sometimes without realising it.' +
                'The value of your IP whether it’s a trade mark, patent, design, copyright or trade secret can far outweigh the value of your physical assets.' +
                'Keep ahead of the competition with the Intellectual Property Office’s IP for Business tools and guidance. These can help you create value from your ideas, and turn inspiration into sustainable business success.' +
                'The IPO promotes innovation and growth by offering a vibrant programme of activities and informed advice and support to business.' +
                'How to achieve your IP for business potential.' +
                'Lambert toolkit' +
                'This offers University and business collaboration model agreements to help publicly-funded research institutions and industry work together. It aims to help negotiations between potential partners and reduce the time, money and effort required. It includes model research collaboration agreements (one to one and multi-party) and guidance notes.' +
                'Misleading invoices' +
                'Customers have alerted us to unsolicited invitations/misleading invoices from companies offering services to protect IP rights. These look like they have come from an official source. These companies are not linked to any government or Community institution and you are not obliged to pay them. If in doubt check with your patent or trade mark attorney or contact us.' +
                '',
            headline: 'IP Basics'
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
            link: 'https://www.hrw.org/report/2020/10/29/whoever-finds-vaccine-must-share-it/strengthening-human-rights-and-transparency',
            text: "The Covid-19 pandemic is among the gravest global health and economic crises in history. By mid-October 2020, it had taken the lives of more than a million and infected at least another 38 million, leaving many of them severely ill. Its social and economic consequences have been widespread and devastating. There is a growing movement of advocates, including Covid-19 survivors and loved ones of those who died, calling for a “people’s vaccine.”\n" +
                "World over, people are pinning their hopes on potential Covid-19 vaccines. The race to develop Covid-19 vaccines has made headlines nearly every day since the World Health Organization (WHO) first described Covid-19 as a pandemic in March 2020. By mid-October 2020, more than 40 vaccine candidates were in clinical trials, and more than 150 others were in earlier stages. Of the top 10 vaccine candidates in the final phase of clinical trials, companies or research institutes headquartered in China, Germany, Russia, the United Kingdom, and the United States were involved in developing them.\n" +
                "Universal and equitable access to a safe and effective Covid-19 vaccine is critical to ending the pandemic, or if no vaccine provides absolute immunity, preventing severe illness and death while protecting livelihoods and allowing battered economies to recover from the consequences of the pandemic.\n" +
                "￼\n" +
                "Read a text description of this video\n" +
                "People all around the world are facing challenges due to the Covid-19 pandemic.\n" +
                "Death and severe illness\n" +
                "Disruptions in education\n" +
                "Economic hardship\n" +
                "Universal and equitable access to a safe and effective Covid-19 vaccine will be critical to recovery.\n" +
                "Governments are investing billions of dollars of public money into vaccine research, development. and manufacturing.\n" +
                "But some rich governments are also making deals with pharmaceutical companies and other entities to reserve future doses for their people.\n" +
                "All governments should cooperate to share the benefits of the scientific research they fund to make safe and effective vaccines widely available and affordable quickly.\n" +
                "And when a vaccine is discovered, it must be for everyone, rich or poor.\n" +
                "The Covid-19 pandemic has shown us that we are all interconnected.\n" +
                "Protecting one country’s people and its economy is impossible unless everyone, everywhere is protected.\n" +
                "Governments should join forces to beat this pandemic.\n" +
                "Governments—especially high-income countries that can afford to do so—are using public money to fund Covid-19 vaccines on an unprecedented scale, with more than US$19 billion pledged by mid-September 2020. In mid-October 2020, the World Bank’s board of directors approved US$12 billion in financing for Covid-19 vaccines, testing, and treatment.\n" +
                "In the high stakes race for a potential vaccine, commitments to meet human rights obligations and transparency have been largely absent. Funding of Covid-19 vaccines with public money has been mired in secrecy. Rich governments that can afford to do so are negotiating opaque bilateral deals with pharmaceutical companies or other entities, often reserving future doses of vaccines largely for their exclusive use.\n" +
                "Secret deal-making and hoarding future vaccines in a climate where vaccines are widely projected to be in scarce supply—an approach often described as “vaccine nationalism”—have dealt massive blows to any global vision for universal and equitable access to an affordable vaccine and risks leaving people from low- and middle-income countries to pick through whatever is left after rich countries have served themselves. As Fatima Hassan, a South African human rights lawyer and intellectual property (IP) rights expert said, “How vaccines are distributed will expose the divides by race, class, and economic power.”\n" +
                "Bridging these divides in a way that respects the human rights of all is urgent and central to the world’s collective recovery from the pandemic. Human Rights Watch has carried out research examining the rights implications surrounding Covid-19 vaccine availability and affordability. Between April 23 and October 13, 2020, Human Rights Watch had discussions with more than 15 renowned experts on access to medicines, IP, and human rights; analyzed international human rights law and relevant national legal good practices; and reviewed a vast array of publicly available documents and secondary sources. This included epidemiological data; statements and resolutions by the WHO and the UN; reports or other documents by nongovernmental organizations (NGOs), pharmaceutical companies, multi-stakeholder initiatives, and others; media reports; and files from legal proceedings. Human Rights Watch also drew on more than six months of reporting on the pandemic’s impacts on different populations, including health workers.\n" +
                "This report examines key elements of a human rights-based approach to Covid-19 vaccines funding rooted in principles of transparency and accountability. It assesses how a variety of core rights—including but not limited to the rights to life, health, and an adequate standard of living—are being taken into account by governments. Human Rights Watch argues that governments spending public money on Covid-19 vaccines should take all possible measures within their power to ensure the scientific benefits of the research they fund are shared as widely as possible “to prevent the unacceptable prioritization of profit for some over benefit for all” and to maximize vaccine availability and affordability within the shortest possible time. While transparency has many aspects, this report looks closely at why governments should report transparently on their funding agreements, terms, and conditions. The concerns and recommendations Human Rights Watch raises in this report, particularly around barriers related to technology transfer and IP, and pricing, are relevant for other Covid-19 health technologies, including testing and drugs, but this report does not cover those areas.\n" +
                "“Sharing the Vaccine Recipe”\n" +
                "Right now, we are in the position where one corporation that is publicly funded may eventually discover or may eventually come across the vaccine recipe and that one corporation will not be able to supply the world. So it’s clear that there is a moral obligation on that corporation to share that recipe so all vaccine manufacturers in the world, so everyone who can, does start making the vaccine.\n" +
                "—Zain Rizvi, law and policy researcher, Public Citizen, July 24, 2020 \n" +
                "High-income governments are using public money to preorder future vaccine doses in ways that undermine universal and equitable vaccine access. This has been with patent disregard for governments’ human rights obligations to cooperate internationally to share the benefits of scientific research they fund with public money to protect the rights to life, health, and a decent standard of living in a globalized world.\n" +
                "The UN Committee on Economic, Social and Cultural Rights, the body of experts that monitors implementation of the International Covenant on Economic, Social and Cultural Rights by its states parties stated in April 2020, “[P]andemics are a crucial example of the need for scientific international cooperation to face transnational threats … [i]f a pandemic develops, sharing the best scientific knowledge and its applications, especially in the medical field, becomes crucial to mitigate the impact of the disease and to expedite the discovery of effective treatments and vaccines…. The Committee reiterates that ultimately, intellectual property is a social product and has a social function and consequently, States parties have a duty to prevent unreasonably high costs for access to essential medicines.”\n" +
                "The funding amounts pledged and doses prebooked are frequently changing with new developments. The shifting environment is further complicated by a near total lack of transparency. Governments do not publicly disclose the terms and conditions of their funding, what they have prebooked and for whom, and which manufacturing facilities will be used to supply their preorders. NGOs, researchers, and journalists are piecing together this data.\n" +
                "For example, Policy Cures Research, an Australia-based global health think tank, estimated that by mid-September 2020, the US, Germany, the UK, Norway, South Korea, Saudi Arabia, Canada, China, and Spain were the top nine governments, together with the European Commission, funding vaccine research and development, either directly through bilateral deals or indirectly by funding vaccine public-private partnerships like the Coalition for Epidemic Preparedness Innovations (CEPI). In September 2020, Oxfam International analyzed available information on deals made for five of the nine vaccine candidates that were in the final phase (“phase 3”) of clinical trials at that time. They estimated that 51 percent of the doses were reserved for high-income countries including Australia, Hong Kong & Macau, Israel, Japan, Switzerland, the UK, the US, and the European Union, even though they represent only 13 percent of the world’s population.\n" +
                "World leaders and experts have been clamoring for global cooperation and sharing of health technologies since the early days of the pandemic. Leading groups and experts on access to medicines who are following the funding and procurement efforts, including the European Public Health Alliance, I-MAK, Knowledge Ecology International, Médecins Sans Frontières (MSF) (Doctors without Borders), Oxfam, the People’s Vaccine Alliance, Public Citizen, South Centre, and the Third World Network, have repeatedly raised concerns that governments are not acting in ways that will ensure potential future Covid-19 vaccines will be a “global public good” accessible to all.\n" +
                "In May 2020, the Costa Rican government spearheaded a Solidarity Call to Action with the WHO to create the Covid-19 Technology Access Pool (C-TAP)—a common shared pool of rights to technologies, data, and know-how that everyone around the world could use to manufacture any medical products needed to tackle Covid-19, including vaccines. At time of writing, only 40 other governments had endorsed the C-TAP Solidarity Call to Action; most of them from low- or middle-income countries. The vast majority of high-income countries have yet to align with the principles and spirit of C-TAP.\n" +
                "Open and non-exclusive licensing unleashes the potential of scientific research that uses public money to maximize public benefit, preventing any one company from holding or controlling access to the data, know-how, and IP required to manufacture vaccines. Governments should use their regulatory powers to require companies and other entities to share data, know-how, and IP, including through open and non-exclusive licensing, to avert a scenario that could, as Fatima Hassan described it, allow drug companies to “play god” and “decide who gets a vaccine and when.”\n" +
                "This is especially important to expand global vaccine manufacturing capacity wherever possible, including in the long-term. As Third World Network, an NGO, has shown through its “VaxMap,” the expertise to manufacture vaccines is limited and highly skewed toward rich countries. Large parts of Africa, Asia, and Latin America do not have any significant manufacturing capacity and will likely depend on imports. Only a handful of countries in these parts of the world have vaccine manufacturing capacity: Argentina, China, India, Brazil, South Korea, and Singapore. \n" +
                "High-income governments have blithely ignored the repeated concerns raised by low- and middle-income countries about the significant barriers presented by IP, disregarding historical experience and lessons, especially from the struggle to overcome IP barriers for generic and affordable treatment for HIV/AIDS. This approach fails to learn lessons from past vaccine efforts and the links between pricing and IP, ignores expert opinions by IP rights lawyers, and disregards the growing risk of lawsuits challenging the IP of companies involved in Covid-19 vaccines. Voluntary corporate commitment to open and non-exclusive licensing has been low, making government use of regulatory tools essential to ensure vaccines are widely available.\n" +
                "In October 2020, India and South Africa proposed that some provisions of the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS) be waived, to allow all countries globally to collaborate with one another, without running into the morass of laws and restrictions governing IP. If adopted, the proposal could enable the sharing of technology and know-how to expand access to the medical technologies needed to save lives and prevent severe illness during the pandemic. Human Rights Watch called on all other governments to support the proposal of India and South Africa.\n" +
                "The time to move beyond rhetoric around global cooperation is now. As James Love, director of the NGO Knowledge Ecology International, said: “It doesn’t take a genius to figure out that vaccines will be in short supply in the short-term. But why make it worse? Giving companies monopolies over vaccines in the middle of a pandemic is criminal.”\n" +
                "All governments should take concrete steps to endorse the C-TAP Solidarity Call to Action and develop a collective strategy to implement it. Governments should cooperate to urgently map out what vaccine manufacturing capacity exists, what has been booked up and for whom, and develop a plan of action to scale-up manufacturing to maximize the availability, affordability, and distribution of any successful vaccine. They should do so in consultation with low- and middle-income governments as well as experts on access to medicines, vaccines, IP, and human rights. Governments should also use their regulatory powers and funding clout to enable technology transfers and sharing of data, know-how, and other IP through open and non-exclusive licensing.\n" +
                "Making Vaccines Affordable for All\n" +
                "Thus far, some companies, universities, and institutes producing vaccines have given vague assurances of “non-profit” pricing and even provided pricing estimates. The estimates reported vary from as little as US$3 per dose to US$72 per dose. Most potential Covid-19 vaccines are expected to require two doses per person, and unlike some other vaccines, Covid-19 vaccines likely will not be once-in-a-lifetime. They will generate recurring expenses and be particularly financially burdensome for low- and middle-income governments as well as those living in poverty. \n" +
                "Regulating prices to maximize affordability is especially important because in many contexts, vaccines will only be accessible and affordable for communities if they are free at point of care. Worldwide, nine percent of the world’s population lives in extreme poverty, surviving on less than US$1.90 per day. In June 2020, the World Bank projected the pandemic could push between 70 and 100 million people into extreme poverty—living on less than US$1.90 a day—in 2020. The pandemic is also projected to widen the poverty gap between women and men and drive a 9.1 percent increase in poverty among women.\n" +
                "Governments have a human rights obligation to take measures, individually and collectively, to ensure companies, universities, and other entities receiving public money use it in ways that maximize vaccine affordability for the benefit of people globally. To this end, governments should use their powers to ensure vaccines are not sold to the highest bidder to maximize profits. Governments should require transparent pricing and third-party audits that demonstrate the company or university has maximized affordability and minimized debt for low- and middle-income countries.\n" +
                "Global Vaccine Procurement Mechanism: COVAX Facility\n" +
                "There is growing interest from many governments—low-, middle-, and high-income—to purchase vaccines through a global procurement mechanism called the COVAX Facility. The COVAX Facility implemented by Gavi, the Vaccine Alliance—a public-private partnership—is operating subject to the preorder vaccine deals rich governments have already signed. The facility has yet to publish its contracts with companies and other entities. It has not endorsed C-TAP or taken steps to enable wide-ranging technology transfers or address IP barriers through open, non-exclusive licensing. Gavi estimates each vaccine dose supplied by COVAX will cost about US$10.55 and—for two vaccine doses per person—will total more than US$20 per person. Gavi has yet to require transparent pricing coupled with third-party audits to ensure companies producing vaccines for the COVAX Facility are maximizing affordability of vaccines.\n" +
                "Committing to Transparency\n" +
                "People have a right to know how governments spend public money. They have a right to know what measures governments are taking to protect public health and ensure public money is used for public benefit. But governments have yet to disclose even the key terms and conditions under which they have funded companies, universities, and other entities for Covid-19 vaccines.\n" +
                "Transparency is crucial to hold governments accountable for fulfilling their international human rights obligations both within their own borders and beyond them. As Safura Abdool Karim, a senior researcher and health lawyer from the South African Medical Research Council’s Centre for Health Economics and Decision Science said, “Transparency is so pivotal…. We need to know what bilateral deals have been made, what are the preferential terms, and if there are any equitable access terms in these agreements. …Even the poorest of poor should be able to have access to a vaccine at an affordable price.”\n" +
                "The stakes have never been higher. Universal and equitable vaccine access is needed to save lives, protect health workers, prevent people from experiencing severe illness and potential long-term negative health impacts, ensure children return to school, and enable economies to rebuild and families to make ends meet. The lives and livelihoods of billions of people are on the line.\n" +
                "Related Content\n" +
                "Key Recommendations\n" +
                "To All Governments\n" +
                "\t•\tEndorse and implement the WHO's COVID-19 Technology Access Pool (C-TAP).\n" +
                "\t•\tCollectively map out the global capacity to manufacture the needed supply of Covid-19 vaccines, and cooperate to develop a strategy to fund and support the creation of additional manufacturing capacity especially in low- and middle-income countries to ensure rapid and diversified large-scale production.\n" +
                "\t•\tPledge not to sign bilateral deals with vaccine developers to prebook future vaccine doses in ways that undermine equitable global allocation according to public health need.\n" +
                "\t•\tSupport India and South Africa’s October 2020 proposal at the World Trade Organization to waive some provisions of the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS Agreement) and use TRIPS flexibilities at the country-level.\n" +
                "To Governments Funding Covid-19 Vaccines\n" +
                "\t•\tCommit to transparency around Covid-19 vaccine funding by creating a public database of all contracts for funding related to Covid-19 vaccine research, development, manufacturing, or distribution.\n" +
                "\t•\tAttach concrete conditions to all funding for Covid-19 vaccine research, development, manufacturing, or distribution requiring technology transfer, that is, recipients should share all intellectual property (IP), data, and other know-how to enable mass manufacturing of successful vaccine candidates. Specifically, ensure agreements to fund Covid-19 vaccines, at a minimum, require recipients to provide open, non-exclusive, and royalty-free licensing for pre-existing IP owned and any future owned IP modeled on the “Open COVID Pledge.”\n" +
                "\t•\tAttach concrete conditions to all vaccine funding to ensure vaccines are priced transparently, and to prioritize affordability and minimize any debts for low- and middle-income countries and not profits for vaccine-developers. Specifically, ensure agreements to fund Covid-19 vaccines, at a minimum, require that compliance with vaccine price commitments is verified through an independent third-party financial audit and the audit report be published.\n" +
                "To Governments Participating in the COVAX Facility\n" +
                "\t•\tCall on Gavi and CEPI to endorse and design the COVAX Facility in a way that is aligned with the WHO’s C-TAP.\n" +
                "\t•\tCall on Gavi and CEPI to publish all agreements with vaccine developers and manufacturers.\n" +
                "\t•\tCall on Gavi and CEPI to attach conditions to their funding related to technology transfers; open and non-exclusive licensing; and transparent and affordable pricing, verifiable by independent third-party audits that are made public.\n" +
                "To UN Organizations\n" +
                "\t•\tTake measures to promote and facilitate technology transfers of any successful Covid-19 vaccine to make it as widely available as possible.\n" +
                "\t•\tTake measures to ensure any successful vaccine is priced affordably and made accessible to all vulnerable populations.\n",
            headline: '“Whoever Finds the Vaccine Must Share It”'
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
        for (let message of messages) {
            prompt += ` ${message['user']}: ${message['content']} date of message: ${message['timestamp']}`;
        }
    }
    prompt += ' This is the prompt of the user: ' + userInput;
    return prompt += 'Please proceed with answering the question as described above, adhering to the guidelines , comprehensive reporting and referencing .Please cite all arguments with the given sources. The information should be structured as follows: an short answer to the query of the use, a detailed body to underline the answer given. Include links to all sources at the end for further reading."'
}