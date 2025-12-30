import { importantInfo } from './data';
import * as Icons from 'lucide-react';
import './index.css';

export default function ImportantInfoSection({ lang }) {
    const content = importantInfo[lang];

    return (
        <section className="important-section container fade-in-up">
            <div className="important-card">
                <div className="important-header">
                    <Icons.Info size={32} className="important-icon" />
                    <h2 className="important-title">{content.title} <span className="brand-micro-icon"></span></h2>
                </div>
                <div className="important-divider"></div>
                <div className="important-text-wrapper">
                    {content.content.map((paragraph, index) => (
                        <p key={index} className="important-paragraph">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
