import React from 'react';
import { portfolioPrepData } from '../services/constants';
import { SyllabusSection } from '../types';

const SectionCard: React.FC<{ section: SyllabusSection }> = ({ section }) => (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold font-display text-brand-accent mb-4">{section.title}</h3>
        {section.description && <p className="text-brand-subtle mb-4">{section.description}</p>}
        <div className="space-y-4">
            {section.subsections.map(sub => (
                <div key={sub.title}>
                    <h4 className="font-bold text-brand-light">{sub.title}</h4>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-brand-text">
                        {sub.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-4xl font-extrabold font-display text-brand-light">Portfolio & SOP Prep Guide</h2>
                <p className="mt-2 max-w-3xl mx-auto text-lg text-brand-text">
                    Cracking CEED is the first step. This guide helps you prepare for the crucial interview and portfolio review rounds that follow.
                </p>
            </section>
            
            <div className="space-y-8 max-w-4xl mx-auto">
                {portfolioPrepData.map(section => <SectionCard key={section.title} section={section} />)}
            </div>

        </div>
    );
};

export default Portfolio;
