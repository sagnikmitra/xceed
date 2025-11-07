import React, { useState, useEffect } from 'react';
import { studyPlan as initialStudyPlan } from '../services/constants';
import { Task, Week } from '../types';

const LOCAL_STORAGE_KEY = 'ceed2026_plan_progress';

const TaskItem: React.FC<{ task: Task; onToggle: (taskId: string) => void }> = ({ task, onToggle }) => (
    <li className="flex items-start space-x-3 py-2">
        <input
            type="checkbox"
            id={`task-${task.id}`}
            checked={task.isCompleted}
            onChange={() => onToggle(task.id)}
            className="h-5 w-5 rounded border-brand-subtle text-brand-accent bg-brand-secondary focus:ring-brand-accent focus:ring-2 mt-1 cursor-pointer flex-shrink-0"
        />
        <div className="flex-1">
            <label htmlFor={`task-${task.id}`} className={`text-brand-text cursor-pointer transition-colors ${task.isCompleted ? 'line-through text-brand-subtle' : ''}`}>
                {task.text}
                {task.link && (
                    <a href={task.link} target="_blank" rel="noopener noreferrer" className="inline-block ml-2 text-brand-accent hover:text-sky-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
            </label>
            {task.subtasks && (
                <ul className={`mt-2 pl-5 space-y-1 list-disc list-inside transition-colors ${task.isCompleted ? 'text-gray-600' : 'text-brand-subtle'}`}>
                    {task.subtasks.map((sub, index) => <li key={index}>{sub}</li>)}
                </ul>
            )}
        </div>
    </li>
);

const DailyPlan: React.FC = () => {
    const [openWeek, setOpenWeek] = useState<number | null>(1);
    const [planData, setPlanData] = useState<Week[]>(() => {
        try {
            const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
            return savedProgress ? JSON.parse(savedProgress) : initialStudyPlan;
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return initialStudyPlan;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(planData));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [planData]);

    const handleToggleTask = (taskId: string) => {
        const newPlanData = planData.map(week => ({
            ...week,
            days: week.days.map(day => ({
                ...day,
                tasks: day.tasks.map(task => 
                    task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
                )
            }))
        }));
        setPlanData(newPlanData);
    };

    const toggleWeek = (weekNumber: number) => {
        setOpenWeek(openWeek === weekNumber ? null : weekNumber);
    };
    
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-4xl font-extrabold font-display text-brand-light">60-Day Daily Study Plan</h2>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-brand-text">
                    A day-by-day breakdown of tasks to build your skills systematically. Check off tasks as you complete them to track your progress.
                </p>
            </section>
            <div className="space-y-4">
                {planData.map((weekData) => (
                    <div key={weekData.week} className="bg-brand-secondary rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleWeek(weekData.week)}
                            className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                        >
                            <h3 className="text-2xl font-bold font-display text-brand-light">Week {weekData.week}: {weekData.title}</h3>
                             <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-brand-accent transition-transform duration-300 ${openWeek === weekData.week ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openWeek === weekData.week && (
                            <div className="px-6 pb-6">
                                {weekData.days.map((dayData) => (
                                    <div key={dayData.day} className="py-6 border-t border-brand-subtle">
                                        <h4 className="text-xl font-semibold font-display text-brand-accent">Day {dayData.day}: {dayData.title}</h4>
                                        <ul className="mt-4 space-y-2">
                                            {dayData.tasks.map((task) => (
                                                <TaskItem key={task.id} task={task} onToggle={handleToggleTask} />
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyPlan;