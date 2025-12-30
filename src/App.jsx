import { useState, useEffect } from 'react';
import { getSkinConcerns, translations } from './data';
import QuizSection from './QuizSection';
import SunscreenSection from './SunscreenSection';
import GlossarySection from './GlossarySection';
import ImportantInfoSection from './ImportantInfoSection';
import BrandMarquee from './BrandMarquee';
import * as Icons from 'lucide-react';
import './index.css';

// Dynamic Icon Component
const Icon = ({ name, size = 24, className }) => {
  const LucideIcon = Icons[name] || Icons.HelpCircle;
  return <LucideIcon size={size} className={className} strokeWidth={1.5} />;
};

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lang, setLang] = useState('en'); // Language State: 'en' or 'hi'

  const t = translations[lang]; // Current translations
  const skinConcerns = getSkinConcerns(lang); // Current data

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    // English format
    if (lang === 'en') {
      const fullDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      return `${fullDate} · ${time}`;
    }
    // Hindi format
    const fullDate = date.toLocaleDateString('hi-IN', { weekday: 'short', month: 'short', day: 'numeric' });
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${fullDate} · ${time}`;
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };



  return (
    <div className={`app-container lang-${lang}`}>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo-group">
            <div className="logo"><span className="brand-micro-icon"></span> Skin with Sense</div>
            <div className="lang-toggle" onClick={toggleLang}>
              <span className={lang === 'en' ? 'active' : ''}>EN</span>
              <span className="divider">|</span>
              <span className={lang === 'hi' ? 'active' : ''}>हिंदी</span>
            </div>
          </div>

          <div className="time-group">
            <div className="live-dot"></div>
            <div className="current-time">{formatDate(currentDate)}</div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero fade-in-up">
          <div className="container">
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-subtitle">
              {t.heroSubtitle.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
        </section>

        <BrandMarquee />



        <div className="container" style={{ marginTop: 'var(--spacing-xl)' }}>
          {skinConcerns.map((concern, index) => (
            <section
              key={concern.type}
              className="concern-block fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="concern-header">
                <h2 className="concern-title">{concern.type}</h2>
                <p className="concern-desc">{concern.description}</p>
              </div>

              <div className="ingredient-grid">
                {concern.ingredients.map((ing) => (
                  <div key={ing.name} className="ingredient-card">
                    <div className="card-header">
                      <div className="icon-wrapper">
                        <Icon name={ing.icon} size={28} />
                      </div>
                      <div className="card-title-group">
                        <h3 className="ingredient-name">{ing.name}</h3>
                        <span className="ingredient-descriptor">{ing.descriptor}</span>
                      </div>
                    </div>

                    <div className="card-body">
                      <div>
                        <span className="section-label">{t.whyUsed}</span>
                        <p className="why-used-text">{ing.whyUsed}</p>
                      </div>

                      <div>
                        <span className="section-label">{t.helpfulIf}</span>
                        <ul className="look-for-list">
                          {ing.lookForIf.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      {ing.pairedWith && (
                        <div className="paired-with">
                          <strong>{t.pairedWith} </strong>
                          {ing.pairedWith.join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <QuizSection lang={lang} t={t.quiz} />



        <div className="container">
          <SunscreenSection lang={lang} t={t.sunscreen} />
        </div>



        <div className="container">
          <GlossarySection lang={lang} t={t.glossary} />
        </div>

        <ImportantInfoSection lang={lang} />

      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="footer-note">{t.footer.note}</p>



          <div className="disclaimer">{t.footer.disclaimer}</div>
          <div className="creator-credit"><span className="brand-micro-icon"></span> Made by Neha</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
