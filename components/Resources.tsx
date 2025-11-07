import React, { useState, useMemo } from 'react';
import { resourcesList } from '../services/constants';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...[...new Set(resourcesList.map(cat => cat.category))]];

  const filteredResources = useMemo(() => {
    return resourcesList.map(category => {
      // Filter items within each category based on search term
      const filteredItems = category.items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...category, items: filteredItems };
    }).filter(category => {
      // Filter the categories themselves based on selection and if they have items
      if (selectedCategory !== 'All' && category.category !== selectedCategory) {
        return false;
      }
      return category.items.length > 0;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h2 className="text-4xl font-extrabold font-display text-brand-light">Curated Resources</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-brand-text">
          A master index of all recommended free books, videos, papers, and articles. Use the filters to find exactly what you need.
        </p>
      </section>

      {/* Filter and Search UI */}
      <div className="sticky top-[65px] z-40 bg-brand-dark/90 backdrop-blur-lg py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-brand-secondary border border-brand-subtle rounded-md py-2 pl-4 pr-10 text-brand-text focus:ring-2 focus:ring-brand-accent focus:outline-none"
                />
                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-brand-subtle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div className="relative">
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full sm:w-auto appearance-none bg-brand-secondary border border-brand-subtle rounded-md py-2 pl-4 pr-10 text-brand-text focus:ring-2 focus:ring-brand-accent focus:outline-none"
                >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                     <svg className="h-5 w-5 text-brand-subtle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </div>
            </div>
        </div>
      </div>

      <div className="space-y-10">
        {filteredResources.length > 0 ? (
          filteredResources.map((category) => (
            <section key={category.category}>
              <h3 className="text-2xl font-bold font-display text-brand-accent border-b-2 border-brand-subtle pb-2 mb-6">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-brand-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-brand-accent transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold text-brand-light group-hover:text-brand-accent transition-colors">{item.title}</h4>
                    <p className="mt-2 text-sm text-brand-text">{item.description}</p>
                     <span className="inline-block mt-4 text-xs font-semibold text-brand-accent">
                      View Resource &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-10 bg-brand-secondary rounded-lg">
            <h3 className="text-xl font-bold text-brand-light">No Resources Found</h3>
            <p className="mt-2 text-brand-subtle">Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;