import React from 'react';
import { Page } from '../types';

interface HomeProps {
    setActivePage: (page: Page) => void;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon, title, description}) => (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg h-full">
        <div className="flex items-center mb-4">
            <div className="p-2 bg-brand-subtle rounded-md mr-4">{icon}</div>
            <h3 className="text-lg font-bold font-display text-brand-light">{title}</h3>
        </div>
        <p className="text-brand-text">{description}</p>
    </div>
)

const QuickStartStep: React.FC<{ number: string; title: string; description: string; buttonText: string; onClick: () => void; }> = ({ number, title, description, buttonText, onClick }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-brand-accent rounded-full text-brand-accent font-bold text-xl font-display">
            {number}
        </div>
        <div>
            <h4 className="text-lg font-bold text-brand-light">{title}</h4>
            <p className="mt-1 text-brand-text">{description}</p>
            <button onClick={onClick} className="mt-3 text-sm font-semibold text-brand-accent hover:text-sky-400 transition-colors">
                {buttonText} &rarr;
            </button>
        </div>
    </div>
);

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <div className="space-y-16">
      <section className="text-center py-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-brand-light leading-tight">
          Your 60-Day Assault on <span className="text-brand-accent">CEED 2026</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text">
          A comprehensive, day-by-day plan tailored to your UI/UX background to conquer the M.Des entrance exam for Product & Interaction Design.
        </p>
        <button 
          onClick={() => setActivePage('plan')}
          className="mt-8 px-8 py-3 bg-brand-accent text-brand-dark font-bold rounded-lg shadow-lg hover:bg-sky-400 transform hover:scale-105 transition-all duration-300">
          Start Your 60-Day Plan
        </button>
      </section>

       <section>
        <h3 className="text-3xl font-bold font-display text-center mb-8 text-brand-light">Get Started Now: No-Fluff First Steps</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
            <QuickStartStep
                number="1"
                title="Download & Print Core Materials"
                description="Get your physical copies ready. Print the essential chapters from 'Design Drawing' and the last 3 years of CEED papers."
                buttonText="Go to Resources"
                onClick={() => setActivePage('resources')}
            />
            <QuickStartStep
                number="2"
                title="Join the Community for Feedback"
                description="Join the Reddit and WhatsApp groups. Post one timed Part-B answer for critique this week to establish a feedback loop."
                buttonText="Find Communities"
                onClick={() => setActivePage('resources')}
            />
            <QuickStartStep
                number="3"
                title="Schedule Your Diagnostic Mock"
                description="Set up an account on a mock platform like D'Shala or Design Mentor Studio and schedule your first full mock in your calendar."
                buttonText="See Mock Platforms"
                onClick={() => setActivePage('resources')}
            />
        </div>
      </section>

      <section>
          <h3 className="text-3xl font-bold font-display text-center mb-8 text-brand-light">Leverage Your Strategic Advantage</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
                title="Design Thinking Mindset"
                description="Your professional experience in user-centric methodologies directly maps to the high-weightage 'Problem Identification' questions in Part B."
              />
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                title="Targeted Skill Building"
                description="This plan aggressively targets known gaps like industrial design sketching, form sensitivity, and analytical reasoning through daily, structured drills."
              />
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
                title="Structured Daily Schedule"
                description="A balanced 3-block daily schedule ensures consistent progress on Part B (sketching), Part A (analytical), and mock tests without burnout."
              />
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="Curated Free Resources"
                description="No need to hunt for materials. This guide includes a comprehensive, offline-ready index of the best books, PDFs, and video tutorials."
              />
          </div>
      </section>
    </div>
  );
};

export default Home;
