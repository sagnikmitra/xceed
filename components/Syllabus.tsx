import React from 'react';
import { syllabusData, syllabusTables, mindsetAndStyle } from '../services/constants';
import { SyllabusSection, SyllabusTable } from '../types';

const SectionCard: React.FC<{ section: SyllabusSection }> = ({ section }) => (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold font-display text-brand-accent mb-4">{section.title}</h3>
        {section.description && <p className="text-brand-subtle mb-4">{section.description}</p>}
        <div className="space-y-4">
            {section.subsections.map(sub => (
                <div key={sub.title}>
                    <h4 className="font-bold text-brand-light">{sub.title}</h4>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-brand-text text-sm">
                        {sub.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const TableCard: React.FC<{ tableData: SyllabusTable }> = ({ tableData }) => (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold font-display text-brand-accent mb-4">{tableData.title}</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-brand-text">
                <thead className="text-xs text-brand-subtle uppercase bg-brand-dark/50">
                    <tr>
                        {tableData.headers.map(header => <th key={header} scope="col" className="px-4 py-3">{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tableData.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-brand-subtle">
                            {row.map((cell, cellIndex) => {
                                const isObject = typeof cell === 'object' && cell !== null;
                                const content = isObject ? cell.content : cell;
                                const isHighlighted = isObject && cell.highlight;
                                return (
                                    <td key={cellIndex} className={`px-4 py-4 ${cellIndex === 0 ? 'font-semibold text-brand-light' : ''} ${isHighlighted ? 'text-amber-400' : ''}`}>
                                        {content}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


const Syllabus: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-4xl font-extrabold font-display text-brand-light">The CEED 2026 Topical Universe</h2>
                <p className="mt-2 max-w-3xl mx-auto text-lg text-brand-text">
                    A brutal, no-fluff checklist of every topic to command. If it’s not here, it’s not worth your time in the next 60 days.
                </p>
            </section>
            
            <div className="space-y-8">
                {syllabusData.map(section => <SectionCard key={section.title} section={section} />)}
            </div>

            <div className="space-y-8">
                 {syllabusTables.map(table => <TableCard key={table.title} tableData={table} />)}
            </div>
            
            <SectionCard section={mindsetAndStyle} />

        </div>
    );
};

export default Syllabus;
