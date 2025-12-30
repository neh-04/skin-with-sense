import * as Icons from 'lucide-react';
import './index.css';

export default function SunscreenSection({ lang, t }) {
    return (
        <section className="sunscreen-section fade-in-up">
            <div className="sunscreen-header">
                <div className="sun-icon-wrapper">
                    <Icons.Sun size={40} className="sun-icon" />
                </div>
                <h2 className="sunscreen-title"><span className="brand-micro-icon"></span> {t.title} <span className="brand-micro-icon"></span></h2>
                <p className="sunscreen-intro">
                    {t.intro}
                </p>
            </div>

            <div className="sunscreen-content-grid">
                <div className="info-card">
                    <Icons.ShieldAlert size={24} className="info-icon" />
                    <h3>{t.must}</h3>
                    <p>{t.mustDesc}</p>
                </div>

                <div className="info-card">
                    <Icons.Home size={24} className="info-icon" />
                    <h3>{t.indoors}</h3>
                    <p>{t.indoorsDesc}</p>
                </div>

                <div className="info-card">
                    <Icons.CheckCircle size={24} className="info-icon" />
                    <h3>{t.spf}</h3>
                    <p>{t.spfDesc}</p>
                </div>
            </div>

            <div className="skin-type-guide">
                <h3 className="guide-title">{t.skinTypeTitle}</h3>
                <div className="type-grid">
                    {t.types.map((type, index) => (
                        <div key={index} className="type-item">
                            <span className="type-label">{type.label}</span>
                            <p>{type.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sunscreen-footer">
                <p className="routine-note">
                    {t.routineNote}
                </p>
                <div className="ss-note">
                    <Icons.HeartHandshake size={20} className="ss-note-icon" />
                    <p>
                        {t.finalNote}
                    </p>
                </div>
            </div>
        </section>
    );
}
