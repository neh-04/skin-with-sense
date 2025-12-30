import { useState } from 'react';
import { getGlossary } from './data';
import * as Icons from 'lucide-react';
import './index.css';

export default function GlossarySection({ lang, t }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedId, setExpandedId] = useState(null);

    const glossaryIngredients = getGlossary(lang);

    const filteredIngredients = glossaryIngredients.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleExpand = (name) => {
        setExpandedId(expandedId === name ? null : name);
    };

    return (
        <section className="glossary-section fade-in-up">
            <div className="glossary-header">
                <h2 className="glossary-title"><span className="brand-micro-icon"></span> {t.title}</h2>
                <p className="glossary-subtitle">{t.subtitle}</p>

                <div className="search-wrapper">
                    <Icons.Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="glossary-grid">
                {filteredIngredients.map((item) => (
                    <div
                        key={item.name}
                        className={`glossary-card ${expandedId === item.name ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(item.name)}
                    >
                        <div className="glossary-card-header">
                            <h3 className="glossary-name">{item.name}</h3>
                            <Icons.ChevronDown
                                size={18}
                                className={`glossary-arrow ${expandedId === item.name ? 'rotated' : ''}`}
                            />
                        </div>

                        <div className={`glossary-content ${expandedId === item.name ? 'show' : ''}`}>
                            <p className="glossary-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}

                {filteredIngredients.length === 0 && (
                    <div className="no-results">
                        <p>{t.noResults}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
