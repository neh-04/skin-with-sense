import { useState } from 'react';
import * as Icons from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "How does your skin feel 30 minutes after washing it (without moisturizer)?",
        questionHi: "चेहरा धोने के 30 मिनट बाद (बिना क्रीम लगाए) आपकी त्वचा कैसी महसूस होती है?",
        options: [
            { text: "Tight, rough, or 'thirsty'.", textHi: "खिंची हुई, रूखी या प्यासी।", type: "Dry" },
            { text: "Shinier than before I washed it.", textHi: "धोने से पहले से ज्यादा चमकदार।", type: "Oily" },
            { text: "Tight on the cheeks, but comfortable on the forehead.", textHi: "गालों पर खिंची हुई, लेकिन माथे पर ठीक।", type: "Combination" }
        ]
    },
    {
        id: 2,
        question: "By mid-afternoon, how does your face look in the mirror?",
        questionHi: "दोपहर तक आपका चेहरा शीशे में कैसा दिखता है?",
        options: [
            { text: "Matte, strictly no shine (maybe even dull).", textHi: "बिल्कुल रूखा, कोई चमक नहीं।", type: "Dry" },
            { text: "Shiny all over, like I need to blot.", textHi: "पूरा चेहरा तेल से चमक रहा है।", type: "Oily" },
            { text: "Shiny on my nose/forehead, but normal elsewhere.", textHi: "सिर्फ नाक और माथे पर चमक, बाकी सामान्य।", type: "Combination" }
        ]
    },
    {
        id: 3,
        question: "How would you describe your pores?",
        questionHi: "आपके त्वचा के रोमछिद्र (pores) कैसे हैं?",
        options: [
            { text: "Small and barely visible.", textHi: "बहुत छोटे, मुश्किल से दिखते हैं।", type: "Dry" },
            { text: "Larger and visible across my cheeks and nose.", textHi: "बड़े और साफ दिखाई देने वाले।", type: "Oily" },
            { text: "Visible on the nose, but invisible on the cheeks.", textHi: "नाक पर दिखते हैं, गालों पर नहीं।", type: "Combination" }
        ]
    }
];

export default function QuizSection({ lang, t }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({ Dry: 0, Oily: 0, Combination: 0 });
    const [showResult, setShowResult] = useState(false);
    const [resultType, setResultType] = useState("");

    const handleAnswer = (type) => {
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateResult(newScores);
        }
    };

    const calculateResult = (finalScores) => {
        const result = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
        setResultType(result);
        setShowResult(true);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScores({ Dry: 0, Oily: 0, Combination: 0 });
        setShowResult(false);
    };

    const resultData = {
        Dry: {
            title: lang === 'hi' ? "रूखी त्वचा (Dry Skin)" : "Dry Skin Type",
            desc: lang === 'hi' ? "आपकी त्वचा को पोषण की जरूरत है। इसमें प्राकृतिक तेल की कमी है।" : "Your skin needs extra nourishment and barrier support. It tends to lack natural oils.",
            tips: lang === 'hi' ? "सेरामाइड्स (Ceramides) और हाइलूरोनिक एसिड युक्त क्रीम चुनें।" : "Look for Ceramides, Hyaluronic Acid, and mild, milky cleansers."
        },
        Oily: {
            title: lang === 'hi' ? "तैलीय त्वचा (Oily Skin)" : "Oily Skin Type",
            desc: lang === 'hi' ? "आपकी त्वचा ज्यादा तेल बनाती है, जिससे दाने हो सकते हैं।" : "Your skin produces excess sebum, which can lead to shine and congestion.",
            tips: lang === 'hi' ? "सैलिसिलिक एसिड और नियासिनामाइड वाले हल्के जेल चुनें।" : "Look for Salicylic Acid, Niacinamide, and lightweight gel moisturizers."
        },
        Combination: {
            title: lang === 'hi' ? "मिश्रित त्वचा (Combination Skin)" : "Combination Skin Type",
            desc: lang === 'hi' ? "सबसे आम त्वचा! टी-ज़ोन (नाक-माथा) तैलीय और गाल रूखे हैं।" : "The most common skin type! You have an oily T-zone but drier cheeks.",
            tips: lang === 'hi' ? "संतुलन बनाए रखें। कोमल क्लींजर का उपयोग करें।" : "Balance is key. Use gentle cleansers and spot-treat oily areas if needed."
        }
    };

    return (
        <section className="quiz-section container fade-in-up">
            <div className="quiz-card">
                {!showResult ? (
                    <>
                        <div className="quiz-header">
                            <span className="quiz-step">{t.step} {currentQuestion + 1} {t.of} {questions.length}</span>
                            <h2 className="quiz-question">
                                {lang === 'hi' ? questions[currentQuestion].questionHi : questions[currentQuestion].question}
                            </h2>
                        </div>
                        <div className="quiz-options">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className="quiz-option-btn"
                                    onClick={() => handleAnswer(option.type)}
                                >
                                    {lang === 'hi' ? option.textHi : option.text}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="quiz-result fade-in-up">
                        <div className="result-icon-wrapper">
                            <Icons.Sparkles size={40} className="result-icon" />
                        </div>
                        <h2 className="result-title">{t.resultTitle} {resultData[resultType].title}</h2>
                        <p className="result-desc">{resultData[resultType].desc}</p>
                        <div className="result-tip-box">
                            <strong>{t.tips}</strong> {resultData[resultType].tips}
                        </div>
                        <button className="reset-btn" onClick={resetQuiz}>{t.reset}</button>
                    </div>
                )}
            </div>
        </section>
    );
}
