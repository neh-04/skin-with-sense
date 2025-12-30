// English Content
const skinConcernsEn = [
    {
        type: "Acne & Blemishes",
        description: "When skin feels congested, bumpy, or is prone to breakouts.",
        ingredients: [
            {
                name: "Salicylic Acid (BHA)",
                icon: "Droplets",
                descriptor: "Pore-clearing exfoliator",
                whyUsed: "It dives deep into pores to dissolve oil and dead skin cells that cause blockages.",
                lookForIf: [
                    "You notice blackheads or whiteheads",
                    "Your skin feels bumpy or congested",
                    "You want to prevent future breakouts"
                ],
                pairedWith: ["Niacinamide", "Hyaluronic Acid"]
            },
            {
                name: "Niacinamide",
                icon: "Shield",
                descriptor: "Balancing & soothing multitasker",
                whyUsed: "It helps regulate oil production while calming redness and strengthening the skin barrier.",
                lookForIf: [
                    "Your skin looks shiny or oily",
                    "You have visible redness or calming needs",
                    "You want a smoother skin texture"
                ],
                pairedWith: ["Salicylic Acid", "Zinc"]
            },
            {
                name: "Tea Tree Oil",
                icon: "Leaf",
                descriptor: "Natural purifying agent",
                whyUsed: "A plant-based ingredient known for its ability to keep bacteria in check and purify the skin surface.",
                lookForIf: [
                    "You prefer plant-based solutions",
                    "You have an active blemish that needs care",
                    "Your skin feels irritated"
                ]
            }
        ]
    },
    {
        type: "Pigmentation & Spots",
        description: "When you notice dark spots, sun marks, or uneven skin tone.",
        ingredients: [
            {
                name: "Vitamin C",
                icon: "Sun",
                descriptor: "Brightening antioxidant",
                whyUsed: "It helps fade dark spots over time and protects your skin from daily environmental stress.",
                lookForIf: [
                    "You see dark marks from past breakouts",
                    "Your skin looks tired or dull",
                    "You want to protect against pollution"
                ],
                pairedWith: ["Vitamin E", "Ferulic Acid"]
            },
            {
                name: "Alpha Arbutin",
                icon: "Sparkles",
                descriptor: "Gentle spot fader",
                whyUsed: "A gentle yet effective option for reducing the look of sun spots and discolouration without harsh irritation.",
                lookForIf: [
                    "You have specific dark spots to target",
                    "Your skin is too sensitive for stronger acids",
                    "You want a more even complexion"
                ]
            },
            {
                name: "Azelaic Acid",
                icon: "Feather",
                descriptor: "Redness reducer & brightener",
                whyUsed: "It works to calm persistent redness and help unclog pores while brightening the overall tone.",
                lookForIf: [
                    "You struggle with post-acne red marks",
                    "You have rosacea-prone skin",
                    "Your skin texture feels uneven"
                ]
            }
        ]
    },
    {
        type: "Dullness & Dehydration",
        description: "When skin looks tired, feels tight, or lacks that healthy glow.",
        ingredients: [
            {
                name: "Hyaluronic Acid",
                icon: "Droplet",
                descriptor: "The ultimate hydrator",
                whyUsed: "It acts like a moisture magnet, holding water in the skin to keep it plump and comfortable.",
                lookForIf: [
                    "Your skin feels tight after washing",
                    "You see fine lines due to dryness",
                    "You want an instant plunge of hydration"
                ],
                pairedWith: ["Vitamin B5", "Ceramides"]
            },
            {
                name: "Glycolic Acid (AHA)",
                icon: "Zap",
                descriptor: "Resurfacing glow booster",
                whyUsed: "It gently dissolves the 'glue' holding dead skin cells together to reveal the fresh, bright skin underneath.",
                lookForIf: [
                    "Your makeup looks flaky or uneven",
                    "Your skin has lost its natural radiance",
                    "You want simpler, smoother skin"
                ]
            },
            {
                name: "Ceramides",
                icon: "BrickWall",
                descriptor: "Barrier builder",
                whyUsed: "They fill the gaps between skin cells to lock moisture in and keep irritants out.",
                lookForIf: [
                    "Your skin feels rough or flaky",
                    "You've over-exfoliated and need repair",
                    "You want resilient, healthy-looking skin"
                ],
                pairedWith: ["Fatty Acids", "Cholesterol"]
            }
        ]
    }
];

// Hindi Content
const skinConcernsHi = [
    {
        type: "मुंहासे और दाग (Acne & Blemishes)",
        description: "जब त्वचा भरी हुई, खुरदुरी महसूस हो, या अक्सर दाने निकलते हों।",
        ingredients: [
            {
                name: "सैलिसिलिक एसिड (Salicylic Acid - BHA)",
                icon: "Droplets",
                descriptor: "रोमछिद्र साफ करने वाला (Pore-clearing)",
                whyUsed: "यह त्वचा के रोमछिद्रों (pores) की गहराई में जाकर तेल और मृत कोशिकाओं को साफ करता है।",
                lookForIf: [
                    "आपको ब्लैकहेड्स या व्हाइटहेड्स की समस्या है",
                    "आपकी त्वचा खुरदुरी या भरी हुई महसूस होती है",
                    "आप भविष्य में होने वाले मुहांसों को रोकना चाहते हैं"
                ],
                pairedWith: ["नियासिनामाइड (Niacinamide)", "हाइलूरोनिक एसिड (Hyaluronic Acid)"]
            },
            {
                name: "नियासिनामाइड (Niacinamide)",
                icon: "Shield",
                descriptor: "संतुलन और राहत देने वाला",
                whyUsed: "यह तेल उत्पादन (oil production) को नियंत्रित करता है और त्वचा की लालिमा को कम करता है।",
                lookForIf: [
                    "आपकी त्वचा तैलीय (oily) या चमकदार दिखती है",
                    "चेहरे पर लालिमा है या जलन महसूस होती है",
                    "आप त्वचा को मुलायम बनाना चाहते हैं"
                ],
                pairedWith: ["सैलिसिलिक एसिड", "जिंक (Zinc)"]
            },
            {
                name: "टी ट्री ऑयल (Tea Tree Oil)",
                icon: "Leaf",
                descriptor: "प्राकृतिक सफाई कारक",
                whyUsed: "यह एक प्राकृतिक घटक है जो बैक्टीरिया को रोकने और त्वचा को शुद्ध करने के लिए जाना जाता है।",
                lookForIf: [
                    "आप प्राकृतिक उपाय पसंद करते हैं",
                    "आपको मुंहासे हैं जिन पर ध्यान देने की जरूरत है",
                    "आपकी त्वचा में जलन महसूस हो रही है"
                ]
            }
        ]
    },
    {
        type: "पिगमेंटेशन और दाग-धब्बे (Pigmentation & Spots)",
        description: "जब आपको काले धब्बे, धूप के निशान या असमान रंगत (uneven skin tone) दिखाई दे।",
        ingredients: [
            {
                name: "विटामिन सी (Vitamin C)",
                icon: "Sun",
                descriptor: "चमक बढ़ाने वाला एंटीऑक्सीडेंट",
                whyUsed: "यह समय के साथ काले धब्बों को हल्का करता है और त्वचा को धूप व प्रदूषण से बचाता है।",
                lookForIf: [
                    "मुहांसों के बाद काले निशान रह गए हैं",
                    "त्वचा बेजान या थकी हुई दिखती है",
                    "आप प्रदूषण से बचाव चाहते हैं"
                ],
                pairedWith: ["विटामिन ई (Vitamin E)", "फेरुलिक एसिड (Ferulic Acid)"]
            },
            {
                name: "अल्फा अर्बुटिन (Alpha Arbutin)",
                icon: "Sparkles",
                descriptor: "कोमल दाग हटाने वाला",
                whyUsed: "यह धूप के धब्बों और असमान रंगत को कम करने के लिए एक कोमल (gentle) और प्रभावी विकल्प है।",
                lookForIf: [
                    "खास काले धब्बों को हटाना चाहते हैं",
                    "आपकी त्वचा बहुत संवेदनशील (sensitive) है",
                    "आप एक समान रंगत चाहते हैं"
                ]
            },
            {
                name: "एज़ेलिक एसिड (Azelaic Acid)",
                icon: "Feather",
                descriptor: "लालिमा कम करने वाला",
                whyUsed: "यह जिद्दी लालिमा को शांत करता है और रोमछिद्रों को साफ रखते हुए चमक बढ़ाता है।",
                lookForIf: [
                    "मुहांसों के बाद लाल निशान रह गए हैं",
                    "आपको रोज़ेशिया (rosacea) की समस्या है",
                    "त्वचा की बनावट (texture) असमान है"
                ]
            }
        ]
    },
    {
        type: "रूखापन और बेजान त्वचा (Dullness & Dehydration)",
        description: "जब त्वचा थकी हुई, खिंची-खिंची लगे या उसमें प्राकृतिक चमक की कमी हो।",
        ingredients: [
            {
                name: "हाइलूरोनिक एसिड (Hyaluronic Acid)",
                icon: "Droplet",
                descriptor: "बेहतरीन हाइड्रेटर",
                whyUsed: "यह चुंबक की तरह नमी (moisture) को त्वचा में खींचता है ताकि वह भरी-भरी और मुलायम रहे।",
                lookForIf: [
                    "चेहरा धोने के बाद त्वचा खिंची हुई लगती है",
                    "रूखेपन के कारण महीन रेखाएं दिखती हैं",
                    "आप तुरंत नमी और ताज़गी चाहते हैं"
                ],
                pairedWith: ["विटामिन B5", "सेरामाइड्स (Ceramides)"]
            },
            {
                name: "ग्लाइकोलिक एसिड (Glycolic Acid - AHA)",
                icon: "Zap",
                descriptor: "चमक वापस लाने वाला",
                whyUsed: "यह मृत कोशिकाओं (dead skin cells) को हटाकर नीचे की नई और चमकदार त्वचा को बाहर लाता है।",
                lookForIf: [
                    "मेकअप त्वचा पर खुरदुरा दिखता है",
                    "त्वचा अपनी प्राकृतिक चमक खो चुकी है",
                    "आप साफ और मुलायम त्वचा चाहते हैं"
                ]
            },
            {
                name: "सेरामाइड्स (Ceramides)",
                icon: "BrickWall",
                descriptor: "सुरक्षा कवच बनाने वाला",
                whyUsed: "ये त्वचा की कोशिकाओं के बीच की जगह को भरते हैं ताकि नमी अंदर और जलन बाहर रहे।",
                lookForIf: [
                    "त्वचा खुरदुरी या पपड़ीदार (flaky) है",
                    "ज्यादा स्क्रब करने से त्वचा खराब हो गई है",
                    "आप त्वचा को स्वस्थ और मजबूत बनाना चाहते हैं"
                ],
                pairedWith: ["फैटी एसिड्स (Fatty Acids)", "कोलेस्ट्रॉल"]
            }
        ]
    }
];

export const getSkinConcerns = (lang) => lang === 'hi' ? skinConcernsHi : skinConcernsEn;

// Important Info Data
export const importantInfo = {
    en: {
        title: "IMPORTANT TO KNOW — PLEASE READ",
        content: [
            "Skincare works best when it is kept simple and intentional. Using many products or ingredients at the same time does not always lead to better results and may sometimes make skin feel uncomfortable or overwhelmed.",
            "Not every ingredient is meant to be used together, and not every skin concern can be addressed all at once. Skin needs time to adjust, respond, and maintain balance.",
            "If you are experiencing persistent, severe, or worsening skin concerns, consulting a qualified dermatologist is always recommended. Professional guidance can help address individual skin needs more accurately.",
            "Skin with Sense is created as a single, trusted space for skincare education only. The information shared here is meant to help you understand skincare ingredients, skin behaviour, and general concepts — not to diagnose, treat, or replace professional advice.",
            "Our goal is simple: To help you learn, understand, and make informed choices at your own pace.",
            "Skincare is not a race. Learning first is always the smarter step."
        ]
    },
    hi: {
        title: "महत्वपूर्ण जानकारी — कृपया पढ़ें",
        content: [
            "स्किनकेयर सबसे अच्छा तब काम करता है जब इसे सरल (simple) और समझदारी से किया जाए। एक साथ कई उत्पादों या सामग्रियों का उपयोग करने से हमेशा बेहतर परिणाम नहीं मिलते, बल्कि इससे त्वचा असहज या खराब भी हो सकती है।",
            "हर सामग्री (ingredient) एक साथ उपयोग करने के लिए नहीं होती, और हर त्वचा की समस्या को एक साथ ठीक नहीं किया जा सकता। त्वचा को तालमेल बिठाने और ठीक होने के लिए समय चाहिए होता है।",
            "यदि आपको त्वचा की गंभीर या लगातार बढ़ती समस्या है, तो हमेशा एक अच्छे त्वचा विशेषज्ञ (dermatologist) से सलाह लें।",
            "Skin with Sense (S&S) केवल शिक्षा के लिए बनाया गया है। यहाँ दी गई जानकारी आपको त्वचा की सामग्री और सामान्य बातों को समझने में मदद करने के लिए है — इसका उद्देश्य चिकित्सा सलाह या इलाज करना नहीं है।",
            "हमारा लक्ष्य सरल है: आपको अपनी गति से सीखने, समझने और सही चुनाव करने में मदद करना।",
            "स्किनकेयर कोई दौड़ नहीं है। पहले सीखना हमेशा समझदारी भरा कदम है।"
        ]
    }
};

// Site Translations
export const translations = {
    en: {
        heroTitle: "Skincare, Simplified.",
        heroSubtitle: "A clear, friendly guide to the ingredients that shape your skin’s health.\nUnderstanding your skin shouldn't be complicated.",
        whyUsed: "Why it’s used",
        helpfulIf: "Helpful if you notice...",
        pairedWith: "Commonly paired with:",
        quiz: {
            step: "Step",
            of: "of",
            title: "Skin Analysis Quiz",
            resultTitle: "You likely have",
            tips: "Quick Tip:",
            reset: "Take Quiz Again"
        },
        glossary: {
            title: "The Ingredient Library",
            subtitle: "Explore the A-Z of skincare ingredients.",
            searchPlaceholder: "Search ingredients...",
            noResults: "No ingredients found."
        },
        sunscreen: {
            title: "Sunscreen — A Daily Essential",
            intro: "Sunscreen is one of the most important steps in skincare. It is not only meant for sunny days. Sunscreen is a daily habit.",
            must: "Why sunscreen is a must",
            mustDesc: "Daily sun exposure plays a major role in pigmentation, dark spots, and early dullness. Without sunscreen, skincare benefits reduce over time.",
            indoors: "Why important indoors?",
            indoorsDesc: "Even indoors, skin is exposed to sunlight through windows. Using sunscreen indoors helps support long-term skin balance.",
            spf: "How much SPF?",
            spfDesc: "SPF 30 or higher is suitable for daily use. Consistency matters more than very high SPF.",
            skinTypeTitle: "Choosing Sunscreen by Skin Type",
            types: [
                { label: "Dry Skin", text: "Cream or lotion-based sunscreens. Prevents tightness." },
                { label: "Oily / Acne-Prone", text: "Gel or matte-finish sunscreens. Lightweight, non-greasy." },
                { label: "Combination", text: "Gel-cream or lightweight lotions. Balances oily and dry areas." },
                { label: "Sensitive", text: "Simple formulas with minimal fragrance. Gentle textures." }
            ],
            routineNote: "How it supports your routine: Maintains even tone and protects progress.",
            finalNote: "Note: Sunscreen is about consistency and care, not fear."
        },
        footer: {
            note: "We believe that knowing what you put on your skin empowers you to make better choices.",
            disclaimer: "Educational platform only. Not medical advice.",
            download: "Download Free Guide"
        }
    },
    hi: {
        heroTitle: "स्किनकेयर, अब आसान।",
        heroSubtitle: "आपकी त्वचा की सेहत बनाने वाली सामग्रियों के लिए एक सरल और मैत्रीपूर्ण गाइड।\nअपनी त्वचा को समझना अब मुश्किल नहीं होगा।",
        whyUsed: "इसका उपयोग क्यों होता है",
        helpfulIf: "मददगार है अगर...",
        pairedWith: "अक्सर इनके साथ प्रयोग किया जाता है:",
        quiz: {
            step: "चरण",
            of: "का",
            title: "त्वचा विश्लेषण (Skin Analysis)",
            resultTitle: "आपकी त्वचा का प्रकार है:",
            tips: "सुझाव:",
            reset: "क्विज़ दोबारा लें"
        },
        glossary: {
            title: "सामग्री पुस्तकालय (Ingredient Library)",
            subtitle: "स्किनकेयर की दुनिया को A से Z तक जानें।",
            searchPlaceholder: "सामग्री खोजें (जैसे Vitamin C)...",
            noResults: "कोई परिणाम नहीं मिला।"
        },
        sunscreen: {
            title: "सनस्क्रीन — एक रोज़ की ज़रूरत",
            intro: "सनस्क्रीन स्किनकेयर का सबसे महत्वपूर्ण हिस्सा है। यह सिर्फ धूप वाले दिनों के लिए नहीं है, बल्कि यह एक रोज़ की आदत है।",
            must: "सनस्क्रीन क्यों ज़रूरी है",
            mustDesc: "धूप से होने वाला नुकसान काले धब्बों और बेजान त्वचा का मुख्य कारण है। बिना सनस्क्रीन के, महंगे उत्पादों का असर भी कम हो जाता है।",
            indoors: "घर के अंदर क्यों ज़रूरी है?",
            indoorsDesc: "खिड़कियों से आने वाली रोशनी भी त्वचा पर असर डालती है। घर के अंदर सनस्क्रीन लगाने से त्वचा सुरक्षित रहती है।",
            spf: "कितना SPF काफी है?",
            spfDesc: "रोज़ाना के लिए SPF 30 या उससे ज़्यादा सही है। बहुत ज़्यादा SPF से बेहतर है कि आप इसे रोज़ लगाएं।",
            skinTypeTitle: "त्वचा के अनुसार सनस्क्रीन चुनें",
            types: [
                { label: "रूखी त्वचा (Dry)", text: "क्रीम या लोशन वाले सनस्क्रीन। ये त्वचा को खिंचाव से बचाते हैं।" },
                { label: "तैलीय त्वचा (Oily)", text: "जेल या मैट (matte) वाले सनस्क्रीन। ये हल्के होते हैं और चिपचिपे नहीं लगते।" },
                { label: "मिश्रित त्वचा (Combination)", text: "जेल-क्रीम या हल्के लोशन। ये संतुलन बनाए रखते हैं।" },
                { label: "संवेदनशील (Sensitive)", text: "कम खुशबू वाले साधारण फॉर्मूले। कोमल और सुरक्षित।" }
            ],
            routineNote: "यह आपकी दिनचर्या में कैसे मदद करता है: यह त्वचा की रंगत एक समान रखता है और आपकी मेहनत को सुरक्षित करता है।",
            finalNote: "नोट: सनस्क्रीन का मतलब डरना नहीं, बल्कि अपनी त्वचा की देखभाल करना है।"
        },
        footer: {
            note: "हमारा मानना है कि सही जानकारी ही आपको बेहतर चुनाव करने में मदद करती है।",
            disclaimer: "यह केवल शैक्षिक जानकारी है। चिकित्सा सलाह नहीं।",
            download: "मुफ्त गाइड डाउनलोड करें"
        }
    }
};

export const glossaryIngredientsEn = [
    { name: "Niacinamide", desc: "A form of Vitamin B3 commonly used to support oil balance and strengthen the skin barrier." },
    { name: "Salicylic Acid (BHA)", desc: "An oil-soluble exfoliant commonly used to help clear clogged pores." },
    { name: "Azelaic Acid", desc: "Known for its multi-purpose nature, safe for sensitive skin and redness." },
    { name: "Zinc PCA", desc: "Commonly used to help manage excess oil and redness." },
    { name: "Sulfur", desc: "Used in acne care for oil-absorbing properties." },
    { name: "Tea Tree Extract", desc: "Plant-derived clarifying ingredient for breakout-prone skin." },
    { name: "Green Tea Extract", desc: "Rich in antioxidants to calm skin." },
    { name: "Vitamin C", desc: "Antioxidant for brightness and glow." },
    { name: "Hyaluronic Acid", desc: "Hydration support, holding moisture in the skin." },
    { name: "Semamides", desc: "Lipids that support the protective skin barrier." },
    { name: "Retinol", desc: "Vitamin A derivative for texture and aging support (use carefully)." },
    { name: "Panthenol", desc: "Vitamin B5, soothing and repairing." },
    { name: "Glycerin", desc: "Common humectant for hydration." },
    { name: "Aloe Vera", desc: "Soothing plant extract for calm skin." },
    { name: "Benzoyl Peroxide", desc: "Strong acne-fighting ingredient (can be drying)." },
    { name: "Lactic Acid", desc: "Gentle AHA exfoliant for hydration and glow." },
    { name: "Squalane", desc: "Lightweight oil that mimics natural skin oils." },
    { name: "Allantoin", desc: "Soothing agent for irritated skin." },
    { name: "Centella Asiatica", desc: "Calming herb, great for sensitive skin." },
    { name: "Peptides", desc: "Amino acid chains for firming and support." },
    { name: "Kojic Acid", desc: "Derived from mushrooms, commonly used to maintain a bright and even skin tone." },
    { name: "Glutathione", desc: "A powerful antioxidant naturally found in the body, used to support overall skin brightness." }
];

export const glossaryIngredientsHi = [
    { name: "Niacinamide (नियासिनामाइड)", desc: "विटामिन B3 का एक रूप जो तेल को संतुलित करने और त्वचा की बाधा (barrier) को मजबूत करने में मदद करता है।" },
    { name: "Salicylic Acid (सैलिसिलिक एसिड)", desc: "यह रोमछिद्रों को साफ करने और मुहांसों को रोकने के लिए उपयोग किया जाता है।" },
    { name: "Azelaic Acid (एज़ेलिक एसिड)", desc: "संवेदनशील त्वचा और लालिमा के लिए एक सुरक्षित और बहुउद्देशीय (multi-purpose) सामग्री।" },
    { name: "Zinc PCA (जिंक)", desc: "अतिरिक्त तेल को नियंत्रित करने और लालिमा कम करने में मदद करता है।" },
    { name: "Sulfur (सल्फर)", desc: "मुहांसों के इलाज में तेल सोखने के लिए उपयोग किया जाता है।" },
    { name: "Tea Tree (टी ट्री)", desc: "मुहांसे वाली त्वचा के लिए एक प्राकृतिक सफाई करने वाला पौधा।" },
    { name: "Green Tea (ग्रीन टी)", desc: "एंटीऑक्सीडेंट से भरपूर जो त्वचा को शांत करता है।" },
    { name: "Vitamin C (विटामिन सी)", desc: "चमक और ग्लो के लिए इस्तेमाल होने वाला एंटीऑक्सीडेंट।" },
    { name: "Hyaluronic Acid (हाइलूरोनिक एसिड)", desc: "नमी (moisture) को त्वचा में बनाए रखने वाला जादुई तत्व।" },
    { name: "Ceramides (सेरामाइड्स)", desc: "त्वचा की सुरक्षा परत को मजबूत बनाने वाले लिपिड।" },
    { name: "Retinol (रेटिनॉल)", desc: "उम्र बढ़ने के संकेतों और त्वचा की बनावट के लिए विटामिन A (सावधानी से उपयोग करें)।" },
    { name: "Panthenol (पैन्थेनॉल)", desc: "विटामिन B5, जो त्वचा को शांत और ठीक करता है।" },
    { name: "Glycerin (ग्लिसरीन)", desc: "त्वचा को नमी देने वाला सबसे आम और सुरक्षित तत्व।" },
    { name: "Aloe Vera (एलो वेरा)", desc: "त्वचा को ठंडक और राहत देने वाला पौधा।" },
    { name: "Lactic Acid (लैक्टिक एसिड)", desc: "कोमल एक्सफोलिएशन (सफाई) और नमी के लिए।" },
    { name: "Squalane (स्क्वालेन)", desc: "हल्का तेल जो त्वचा के प्राकृतिक तेल जैसा होता है।" },
    { name: "Allantoin (एलेंटोइन)", desc: "जलन वाली त्वचा को शांत करने वाला तत्व।" },
    { name: "Centella Asiatica (सिका)", desc: "संवेदनशील त्वचा के लिए एक बेहतरीन शांत करने वाली जड़ी-बूटी।" },
    { name: "Peptides (पेप्टाइड्स)", desc: "त्वचा को कसने और मजबूत बनाने के लिए अमीनो एसिड।" },
    { name: "Kojic Acid (कोजिक एसिड)", desc: "मशरूम से प्राप्त, इसका उपयोग त्वचा को चमकदार और साफ रखने के लिए किया जाता है।" },
    { name: "Glutathione (ग्लूटाथियोन)", desc: "एक शक्तिशाली एंटीऑक्सीडेंट जो त्वचा की चमक और रंगत को सुधारने में मदद करता है।" }
];

export const getGlossary = (lang) => lang === 'hi' ? glossaryIngredientsHi : glossaryIngredientsEn;
