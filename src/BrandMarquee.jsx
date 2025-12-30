import * as Icons from 'lucide-react';
import './index.css';

const badges = [
    { icon: "BookOpen", text: "Education First" },
    { icon: "ShieldCheck", text: "Science Backed" },
    { icon: "Heart", text: "Skin Positivity" },
    { icon: "Feather", text: "Gentle Approach" },
    { icon: "Globe", text: "Global Standards" },
    { icon: "Sparkles", text: "Cruelty Free Concepts" },
    { icon: "UserCheck", text: "Dermatology Aware" },
];

export default function BrandMarquee() {
    return (
        <div className="marquee-container fade-in-up">
            <div className="marquee-track">
                {/* Render twice for seamless loop */}
                {[...badges, ...badges].map((badge, index) => (
                    <div key={index} className="marquee-item">
                        <Icons.CheckCircle2 size={18} className="marquee-icon" />
                        <span className="marquee-text">{badge.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
