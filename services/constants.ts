import { Week, Resource, SyllabusSection, SyllabusTable } from '../types';

export const PLAN_START_DATE = '2025-11-08'; // YYYY-MM-DD format

export const studyPlan: Week[] = [
  {
    week: 1,
    title: 'Foundation & Orientation',
    days: [
      {
        day: 1,
        title: 'Orientation & Resource Setup',
        tasks: [
          { id: 'w1-d1-t1', text: 'Thoroughly review the official CEED 2026 syllabus and exam pattern.', link: 'https://www.ceed.iitb.ac.in/ceed2026/', isCompleted: false },
          { id: 'w1-d1-t2', text: 'Download all available previous years\' CEED papers (2025-2020).', isCompleted: false },
          { id: 'w1-d1-t3', text: 'Gather and bookmark core books/PDFs and video tutorials from the Resources section.', isCompleted: false},
          { id: 'w1-d1-t4', text: 'Sketching Warm-Up: Draw freehand lines, circles, and basic 3D shapes (cubes, cylinders) for 20 minutes to build line confidence.', isCompleted: false },
          { id: 'w1-d1-t5', text: 'First Sketch: Draw a simple object from your desk (e.g., bottle, mouse), focusing on capturing its basic proportions.', isCompleted: false}
        ]
      },
      {
        day: 2,
        title: 'Drawing Basics & Visual Puzzles',
        tasks: [
            { id: 'w1-d2-t1', text: 'Practice one-point perspective by sketching a simple room interior or a hallway.', isCompleted: false },
            { id: 'w1-d2-t2', text: 'Solve 20+ visual reasoning puzzles, focusing on mirror images, paper folding, and pattern completion.', isCompleted: false },
            { id: 'w1-d2-t3', text: 'Daily Ritual: Pick an object and spend 2 minutes thinking, "How would I improve this?"', isCompleted: false }
        ]
      },
      {
        day: 3,
        title: 'Perspective & Analytical Reasoning',
        tasks: [
          { id: 'w1-d3-t1', text: 'Learn and practice two-point perspective. Sketch a simple product like a chair or a book at an angle.', isCompleted: false },
          { id: 'w1-d3-t2', text: 'Sketch a small street scene in 2-point perspective.', isCompleted: false},
          { id: 'w1-d3-t3', text: 'Solve analytical reasoning puzzles: series completion, syllogisms, and blood relations.', isCompleted: false },
        ]
      },
      {
        day: 4,
        title: 'Observation & Design Awareness',
        tasks: [
          { id: 'w1-d4-t1', text: 'Observation Sketch: Sketch a commonplace setting (e.g., your kitchen) and note 3 design observations (good or bad).', isCompleted: false },
          { id: 'w1-d4-t2', text: 'Read about the Bauhaus design movement and a famous designer like Dieter Rams. Jot down key principles.', isCompleted: false },
          { id: 'w1-d4-t3', text: 'Creative Sketch: Draw a 3-panel storyboard of a simple daily activity.', isCompleted: false }
        ]
      },
      {
        day: 5,
        title: 'Human Figure Drawing & Logical Puzzles',
        tasks: [
            { id: 'w1-d5-t1', text: 'Practice basic human figure sketching using simple mannequin forms (sticks, ovals). Focus on proportion.', isCompleted: false },
            { id: 'w1-d5-t2', text: 'Draw 5 different poses (sitting, walking, reaching) to understand body mechanics.', isCompleted: false },
            { id: 'w1-d5-t3', text: 'Solve higher-difficulty logical puzzles like seating arrangements and dice/cube problems.', isCompleted: false },
        ]
      },
      {
        day: 6,
        title: 'Color Theory & English Practice',
        tasks: [
          { id: 'w1-d6-t1', text: 'Study the color wheel and color harmonies. Create a small color palette for a hypothetical product (e.g., "a clock for kids").', link: 'https://www.youtube.com/watch?v=2QTHs7QSR9o', isCompleted: false},
          { id: 'w1-d6-t2', text: 'Practice reading comprehension with a short design article.', isCompleted: false },
          { id: 'w1-d6-t3', text: 'Solve 5-10 MSQ (Multiple Select Questions) from a past paper to understand their tricky nature.', isCompleted: false }
        ]
      },
      {
        day: 7,
        title: 'Mini Mock & Creativity Boost',
        tasks: [
          { id: 'w1-d7-t1', text: 'Take a Mini Mock Test: Solve 30 Part-A questions from a past CEED paper in 45 minutes.', isCompleted: false },
          { id: 'w1-d7-t2', text: 'Analyze your performance, identifying weak and strong sections. This will inform next week\'s focus.', isCompleted: false },
          { id: 'w1-d7-t3', text: 'Creativity Drill: Pick a random object (e.g., a paperclip) and sketch/list as many alternative uses as possible in 5 minutes.', isCompleted: false }
        ]
      }
    ]
  },
  {
    week: 2,
    title: 'Part A Deep-Dive',
    days: [
        {
            day: 8,
            title: 'Spatial Exercises & Environment Awareness',
            tasks: [
                { id: 'w2-d8-t1', text: 'Practice 2D to 3D visualization: mentally fold flat patterns (nets) into 3D shapes.', isCompleted: false },
                { id: 'w2-d8-t2', text: 'Read about sustainable design principles and social impact design. Find one case study for each.', isCompleted: false},
                { id: 'w2-d8-t3', text: 'Sketch a concept for an eco-friendly product, labeling its sustainable features.', isCompleted: false}
            ]
        },
        {
            day: 9,
            title: 'Design Sensitivity & Field Observation',
            tasks: [
                { id: 'w2-d9-t1', text: 'Observe a public space or daily scenario for 30 mins. Note down at least 3 user pain points or design flaws.', isCompleted: false},
                { id: 'w2-d9-t2', text: 'Sketch the observed scenario, highlighting the problem, and then sketch a small, improved design idea.', isCompleted: false},
                { id: 'w2-d9-t3', text: 'Practice observation puzzles like "spot the difference" or "find the hidden object".', isCompleted: false}
            ]
        },
         {
            day: 10,
            title: 'Geometry, Form & Exploded Views',
            tasks: [
                { id: 'w2-d10-t1', text: 'Practice drawing basic geometric solids (cube, sphere, cylinder) with proper shading to show form.', isCompleted: false},
                { id: 'w2-d10-t2', text: 'Create an "exploded view" sketch of a simple object like a pen, showing its components separated.', isCompleted: false},
                { id: 'w2-d10-t3', text: 'Math Refresh: Review formulas for area and volume of basic shapes.', isCompleted: false}
            ]
        },
        {
            day: 11,
            title: 'Memory Drawing & Art/Culture GK',
            tasks: [
                { id: 'w2-d11-t1', text: 'Memory Drawing: Look at a detailed image for 2 minutes, then sketch it from memory.', isCompleted: false},
                { id: 'w2-d11-t2', text: 'Study a specific Indian art/craft form (e.g., Warli, Madhubani) or an international art movement (e.g., Art Nouveau).', isCompleted: false},
                { id: 'w2-d11-t3', text: 'Free Sketch: Draw something from imagination inspired by the art style you studied.', isCompleted: false}
            ]
        },
        {
            day: 12,
            title: 'Creativity Drills & Lateral Thinking',
            tasks: [
                { id: 'w2-d12-t1', text: 'Use the SCAMPER technique on a common product (e.g., a backpack) to generate new ideas.', isCompleted: false},
                { id: 'w2-d12-t2', text: 'Solve 2-3 lateral thinking puzzles.', isCompleted: false},
                { id: 'w2-d12-t3', text: 'Practice a creative sketch prompt from a past CEED paper (30 mins).', isCompleted: false}
            ]
        },
        {
            day: 13,
            title: 'Timed Part-A & Part-B Practice',
            tasks: [
                { id: 'w2-d13-t1', text: 'Take a timed Part-A test: 40 questions in 60 minutes.', isCompleted: false},
                { id: 'w2-d13-t2', text: 'Immediately after, attempt one full Part-B question in 45 minutes.', isCompleted: false},
                { id: 'w2-d13-t3', text: 'Review both performances, focusing on time management and mistake patterns.', isCompleted: false}
            ]
        },
        {
            day: 14,
            title: 'Weekly Review & Consolidation',
            tasks: [
                { id: 'w2-d14-t1', text: 'Review all notes and sketches from Week 2.', isCompleted: false},
                { id: 'w2-d14-t2', text: 'Read a current design news article from a source like Dezeen or Core77.', isCompleted: false},
                { id: 'w2-d14-t3', text: 'Glance ahead at the plan for Week 3 to prepare mentally.', isCompleted: false}
            ]
        }
    ]
  },
  {
    week: 3,
    title: 'Part B Mastery',
    days: [
        {
            day: 15, title: 'Practical Knowledge & How Things Work',
            tasks: [
                { id: 'w3-d15-t1', text: 'Study the mechanism of 2-3 common devices (e.g., bicycle gears, zipper). Sketch a simple functional diagram.', isCompleted: false },
                { id: 'w3-d15-t2', text: 'Attempt a Part-B style question related to functionality (e.g., "Design a new kind of door for people carrying stuff").', isCompleted: false }
            ]
        },
        {
            day: 16, title: 'Art Movements & Design Legends',
            tasks: [
                { id: 'w3-d16-t1', text: 'Study two design/art movements (e.g., Art Nouveau, Bauhaus) and two design legends (e.g., Charles & Ray Eames, Paul Rand).', isCompleted: false },
                { id: 'w3-d16-t2', text: 'Draw a product concept inspired by one of the styles or designers you studied.', isCompleted: false }
            ]
        },
        {
            day: 17, title: 'Ergonomics & Human Factors',
            tasks: [
                { id: 'w3-d17-t1', text: 'Learn basic ergonomics and anthropometry (e.g., 5th/95th percentile).', isCompleted: false},
                { id: 'w3-d17-t2', text: 'Evaluate the ergonomics of your chair or desk setup.', isCompleted: false },
                { id: 'w3-d17-t3', text: 'Sketch a concept for a more ergonomic version of a common product (e.g., a vegetable peeler).', isCompleted: false }
            ]
        },
        {
            day: 18, title: 'Shading, Rendering & Visual Communication',
            tasks: [
                { id: 'w3-d18-t1', text: 'Practice shading techniques (hatching, cross-hatching) on geometric forms.', isCompleted: false },
                { id: 'w3-d18-t2', text: 'Visual Communication Exercise: Design a simple poster for a given message in 30 minutes (e.g., "Encourage bicycling").', isCompleted: false }
            ]
        },
        {
            day: 19, title: 'Language & Writing for Design',
            tasks: [
                { id: 'w3-d19-t1', text: 'Practice design writing: Write a 150-word description for one of your previous sketches.', isCompleted: false },
                { id: 'w3-d19-t2', text: 'Simulate a Part-B writing question (e.g., "List 5 innovative uses for a cardboard box").', isCompleted: false }
            ]
        },
        {
            day: 20, title: 'Mock Test #1 (Full Length)',
            tasks: [
                { id: 'w3-d20-t1', text: 'Simulate the actual CEED exam (3 hours) using a recent past paper (e.g., CEED 2024).', subtasks: ['9:00 AM - 10:00 AM: Part A', '10:00 AM - 12:00 PM: Part B'], isCompleted: false },
                { id: 'w3-d20-t2', text: 'Evaluate Part-A score and self-critique Part-B answers based on creativity, clarity, and completeness.', isCompleted: false }
            ]
        },
        {
            day: 21, title: 'Mock Analysis & Targeted Improvement',
            tasks: [
                { id: 'w3-d21-t1', text: 'Analyze your Mock #1 performance. Identify the top two weak areas in Part-A and Part-B.', isCompleted: false },
                { id: 'w3-d21-t2', text: 'Spend 30 minutes practicing your weakest Part-B skill (e.g., human figure sketching if that was the issue).', isCompleted: false },
                { id: 'w3-d21-t3', text: 'Review and re-solve the Part-A questions you got wrong.', isCompleted: false }
            ]
        }
    ]
  },
  {
    week: 4,
    title: 'Integration & Mocks',
    days: [
        { day: 22, title: 'Weak Area Intensive Practice', tasks: [{id: 'w4-d22-t1', text: 'Dedicate the morning to your #1 weakest area from the mock test analysis.', isCompleted: false}] },
        { day: 23, title: 'Part-B Focus: Sketching + Writing', tasks: [{id: 'w4-d23-t1', text: 'Attempt two sketching-oriented Part-B questions (40 mins each).', isCompleted: false}, {id: 'w4-d23-t2', text: 'Attempt two writing/analysis oriented Part-B questions (25 mins each).', isCompleted: false}] },
        { day: 24, title: 'Observation & Ideation Refresh', tasks: [{id: 'w4-d24-t1', text: 'Observe a real-world scenario, identify a design problem, and brainstorm solutions.', isCompleted: false}, {id: 'w4-d24-t2', text: 'Do a random idea generation challenge (e.g., design a product combining "tree", "wheel", and "music").', isCompleted: false}] },
        { day: 25, title: 'Aptitude Mixed Bag Practice', tasks: [{id: 'w4-d25-t1', text: 'Solve a mixed set of 20 Part-A questions in 45 minutes.', isCompleted: false}, {id: 'w4-d25-t2', text: 'Spend an hour solving fun logical puzzles and riddles.', isCompleted: false}] },
        { day: 26, title: 'Creative Rest & Inspiration', tasks: [{id: 'w4-d26-t1', text: 'Consume inspiring content: watch a design documentary or project walkthroughs.', isCompleted: false}, {id: 'w4-d26-t2', text: 'Engage in a creative hobby or a fun, no-pressure design challenge.', isCompleted: false}] },
        { day: 27, title: 'Rapid Sketching & Visualization', tasks: [{id: 'w4-d27-t1', text: 'Rapid Sketch Drills: 4-5 small sketch tasks in 10-15 mins each.', isCompleted: false}, {id: 'w4-d27-t2', text: 'Practice communication through drawing: create a 3-panel storyboard or a process flowchart.', isCompleted: false}] },
        { day: 28, title: 'Mock Test #2 (Alternate Paper)', tasks: [{id: 'w4-d28-t1', text: 'Take a full 3-hour mock test using another past paper (e.g., CEED 2023).', isCompleted: false}, {id: 'w4-d28-t2', text: 'Evaluate and compare your performance with Mock #1.', isCompleted: false}] }
    ]
  },
   {
    week: 5,
    title: 'Refinement & Mastery',
    days: [
        { day: 29, title: 'Focused Revision of Theory', tasks: [{id: 'w5-d29-t1', text: 'Create a one-page cheat sheet of key Part-A theory points.', isCompleted: false}, {id: 'w5-d29-t2', text: 'Brush up on any concepts you still feel unsure about.', isCompleted: false}] },
        { day: 30, title: 'Intermediate Mock or Sectional Tests', tasks: [{id: 'w5-d30-t1', text: 'Option 1: Take another full mock. Option 2: Take separate sectional tests for Part-A and Part-B.', isCompleted: false}] },
        { day: 31, title: 'Interaction Design & UI Elements', tasks: [{id: 'w5-d31-t1', text: 'Practice an interaction design scenario (e.g., sketch a simple app interface).', isCompleted: false}, {id: 'w5-d31-t2', text: 'Review core HCI/usability principles (e.g., Fitts\'s Law).', isCompleted: false}] },
        { day: 32, title: 'Materials & Product Detailing', tasks: [{id: 'w5-d32-t1', text: 'Study common materials and joining methods.', isCompleted: false}, {id: 'w5-d32-t2', text: 'Attempt a product redesign question with a focus on material and usability details.', isCompleted: false}] },
        { day: 33, title: 'Expressive Sketching & Storytelling', tasks: [{id: 'w5-d33-t1', text: 'Practice sketching expressions and body language.', isCompleted: false}, {id: 'w5-d33-t2', text: 'Work on storytelling in writing by crafting a short design-related narrative.', isCompleted: false}] },
        { day: 34, title: 'Full Mock #4 (or Part-A Heavy)', tasks: [{id: 'w5-d34-t1', text: 'Take a full 3-hour mock test (e.g., CEED 2022 paper).', isCompleted: false}, {id: 'w5-d34-t2', text: 'Analyze performance, looking for stable patterns in scores.', isCompleted: false}] },
        { day: 35, title: 'Final Skill Polishing & Query Resolution', tasks: [{id: 'w5-d35-t1', text: 'Q&A with yourself: list and find answers to any remaining doubts.', isCompleted: false}, {id: 'w5-d35-t2', text: 'Polish a specific skill (e.g., drawing hands, neat lettering).', isCompleted: false}, {id: 'w5-d35-t3', text: 'Clearly define your exam day strategy for time management.', isCompleted: false}] }
    ]
  },
  {
    week: 6,
    title: 'Final Review & Mental Prep',
    days: [
        { day: 36, title: 'Optional Mock #5 or Relaxed Practice', tasks: [{id: 'w6-d36-t1', text: 'Decide between a final full mock or a lighter, targeted practice session.', isCompleted: false}] },
        { day: 37, title: 'Last Brush-up of Difficult Questions', tasks: [{id: 'w6-d37-t1', text: 'Re-solve difficult questions you got wrong in previous mocks.', isCompleted: false}, {id: 'w6-d37-t2', text: 'Imagery Review: quickly scan through famous logos, products, and artworks.', isCompleted: false}] },
        { day: 38, title: 'Mental Rehearsal and Rest', tasks: [{id: 'w6-d38-t1', text: 'Do a mental run-through of the exam day.', isCompleted: false}, {id: 'w6-d38-t2', text: 'No intensive studying. Relax and pack your exam toolkit.', isCompleted: false}] },
        { day: 39, title: 'Day Before Exam: Light Review & Relaxation', tasks: [{id: 'w6-d39-t1', text: 'At most 30 minutes of flashcard review. No new problems.', isCompleted: false}, {id: 'w6-d39-t2', text: 'Confirm travel plans. Relax and get to bed early.', isCompleted: false}] },
        { day: 40, title: 'EXAM DAY: Showtime!', tasks: [{id: 'w6-d40-t1', text: 'Wake up early, have a light breakfast, and arrive at the center with plenty of time.', isCompleted: false}, {id: 'w6-d40-t2', text: 'Stay calm, read instructions carefully, and trust your preparation. Good luck!', isCompleted: false}] },
        { day: 41, title: 'Post-Exam: Rest & Decompress', tasks: [{id: 'w6-d41-t1', text: 'You\'ve earned it! Take a complete break. Do not fret about the results.', isCompleted: false}] },
        { day: 42, title: 'Next Steps: Portfolio & Interviews', tasks: [{id: 'w6-d42-t1', text: 'Begin planning for portfolio refinement and interview preparation.', isCompleted: false}, {id: 'w6-d42-t2', text: 'Revisit notes on case studies and projects to highlight.', isCompleted: false}] }
    ]
  },
  {
      week: 7,
      title: 'Integration & Mock Tests',
      days: [
        { day: 43, title: 'Mini-Mocks & Timed Practice', tasks: [{ id: 'w7-d43-t1', text: 'Day 43: Part A mock (CEED 2023 Part A, 60 min) - Target ≥70% (105/150)', isCompleted: false }]},
        { day: 44, title: 'Part B Mock', tasks: [{ id: 'w7-d44-t1', text: 'Day 44: Part B mock (2 CEED Part B questions, 40 min total)', isCompleted: false}]},
        { day: 45, title: 'FULL MOCK EXAM #1', tasks: [{ id: 'w7-d45-t1', text: 'Full CEED 2023 Mock (3 hours total)', isCompleted: false}]},
        { day: 46, title: 'Mock Review', tasks: [{ id: 'w7-d46-t1', text: 'Detailed analysis of Mock #1: topics, question types, time management', isCompleted: false}]},
        { day: 47, title: 'Weak Area Intense Focus (Observation)', tasks: [{ id: 'w7-d47-t1', text: 'Solve 20 odd-one-out problems + 2 "Visual Sensitivity" (Q4) questions', isCompleted: false}]},
        { day: 48, title: 'Weak Area Intense Focus (Sketching)', tasks: [{ id: 'w7-d48-t1', text: 'Complete 5 full sketching (Q1) questions + 30-min material study', isCompleted: false}]},
        { day: 49, title: 'FULL MOCK EXAM #2', tasks: [{ id: 'w7-d49-t1', text: 'Full CEED 2024 Mock (3 hours total)', isCompleted: false}]},
        { day: 50, title: 'Mock 2 Review & Comparison', tasks: [{ id: 'w7-d50-t1', text: 'Score & compare to Mock #1. Is the weak area improving?', isCompleted: false}]}
      ]
  },
   {
      week: 8,
      title: 'Speed, Quality & Confidence',
      days: [
        { day: 51, title: 'Speed Optimization (Part A)', tasks: [{ id: 'w8-d51-t1', text: 'Goal: Answer 44 Part A questions in <60 min with ≥70% accuracy', isCompleted: false}, {id: 'w8-d51-t2', text: 'Practice 44 questions under a 60-min time limit.', isCompleted: false}]},
        { day: 52, title: 'Speed Retry', tasks: [{ id: 'w8-d52-t1', text: 'Retry yesterday\'s exercise with stricter timing; review fast errors', isCompleted: false}]},
        { day: 53, title: 'Quality Refinement (Part B)', tasks: [{ id: 'w8-d53-t1', text: 'Goal: Improve sketching consistency & design reasoning clarity', isCompleted: false}, {id: 'w8-d53-t2', text: 'Attempt a 5-question Part B set (100 min total, 20 min per Q).', isCompleted: false}]},
        { day: 54, title: 'Quality Comparison', tasks: [{ id: 'w8-d54-t1', text: 'Attempt another 5-question Part B set and compare quality with yesterday\'s.', isCompleted: false}]},
        { day: 55, title: 'Review & Confidence Building', tasks: [{ id: 'w8-d55-t1', text: 'Light review (no new practice). Skim Part A weak topics (30 min) + 1 quick Part B sketch (30 min).', isCompleted: false}]},
        { day: 56, title: 'Final Mini-Mock', tasks: [{ id: 'w8-d56-t1', text: 'Final mini-mock check. Part A only (CEED 2021, 60 min) - Target ≥75% (112/150).', isCompleted: false}]}
      ]
  },
  {
      week: 9,
      title: 'Revision & Readiness',
      days: [
        { day: 57, title: 'Rapid Topic Reviews', tasks: [{ id: 'w9-d57-t1', text: 'Part A Topic Skim (1.5 hours total).', isCompleted: false}, {id: 'w9-d57-t2', text: 'Part B Quick Practice (1 hour): 2 quick sketching questions.', isCompleted: false}]},
        { day: 58, title: 'Mistake Log Review & Rest', tasks: [{ id: 'w9-d58-t1', text: 'Mistake Log Review (1 hour): Focus on recurring errors.', isCompleted: false}, {id: 'w9-d58-t2', text: 'Rest Day: Light activity only, no cramming.', isCompleted: false}]},
        { day: 59, title: 'Exam Day Logistics & Final Mock', tasks: [{ id: 'w9-d59-t1', text: 'Finalize exam day logistics (admit card, stationery, travel).', isCompleted: false}, {id: 'w9-d59-t2', text: 'Final Light Mock (Part A only, 60 min): CEED 2020 Part A.', isCompleted: false}]},
        { day: 60, title: 'Rest & Mental Readiness', tasks: [{ id: 'w9-d60-t1', text: 'NO INTENSIVE PREP. Light skim of syllabus, 20-min meditation, and 8+ hours sleep.', isCompleted: false}]}
      ]
  }
];

export const resourcesList: Resource[] = [
    {
        category: 'Official & Past Papers',
        items: [
            { title: 'CEED 2026 – Official site & brochure', description: 'The primary source for syllabus, pattern, and official updates.', link: 'https://ceed.iitb.ac.in/ceed2026/', type: 'Website' },
            { title: 'CEED 2025 Question Paper', description: 'Use this for your initial diagnostic mock to set a baseline.', link: 'https://www.ceed.iitb.ac.in/2026/downloads/CEED_2025_Question_Paper.pdf', type: 'PDF' },
            { title: 'CEED 2024 Question Paper', description: 'An essential past paper for a full-length timed mock test.', link: 'https://www.ceed.iitb.ac.in/2026/downloads/CEED_2024_Question_Paper.pdf', type: 'PDF' },
            { title: 'CEED 2023 Question Paper', description: 'Use for your third major mock test to track progress.', link: 'https://www.ceed.iitb.ac.in/2026/downloads/CEED_2023_Question_Paper.pdf', type: 'PDF' },
            { title: 'CEED 2022 Question Paper', description: 'Great for focused drills on NAT, MSQ, and MCQ sections.', link: 'https://www.ceed.iitb.ac.in/2026/downloads/CEED_2022_Qestion_Paper.pdf', type: 'PDF' },
            { title: 'CEED 2021 Question Paper', description: 'An additional paper for a full-length mock or sectional practice.', link: 'https://www.ceed.iitb.ac.in/2026/downloads/CEED_2021_Question_Paper.pdf', type: 'PDF' },
            { title: 'CEED 2020 Question Paper', description: 'Perfect for a final "dress-rehearsal" of the Part-A section.', link: 'https://www.ceed.iitb.ac.in/2026/downloads/CEED2020qp.pdf', type: 'PDF' },
            { title: 'CEED Official Answer Keys', description: 'Crucial for accurately grading your Part-A mock tests.', link: 'https://www.ceed.iitb.ac.in/', type: 'Website' }
        ]
    },
    {
        category: 'Core Theory & Books',
        items: [
            { title: 'Design Drawing by Francis D.K. Ching', description: 'Your Part-B bible for perspective, composition, and form.', link: 'https://archive.org/details/DesignDrawingFrancisChingChapter', type: 'Book' },
            { title: 'The Design of Everyday Things by Don Norman', description: 'Essential for understanding usability principles that fuel Part-B problem identification.', link: 'https://freecomputerbooks.com', type: 'Book' },
            { title: 'Aptitude Books by R.S. Aggarwal', description: 'The standard for logical and analytical reasoning drills for Part-A.', link: 'https://www.google.com/search?q=R.S.+Aggarwal+Verbal+and+Non-Verbal+Reasoning', type: 'Book' }
        ]
    },
    {
        category: 'High-Yield PDFs (Aptitude & Design GK)',
        items: [
            { title: 'UCEED/CEED Spatial Ability Compendium', description: 'High-yield practice for mirror images, folding, and surfaces (NAT questions).', link: 'https://www.scribd.com/document/798109718/UCEED-2025-Full-Study-Material-Free-PDF-1729090082497', type: 'PDF' },
            { title: 'Logical Reasoning (Academic PDF)', description: 'Covers the fundamentals of syllogisms, series, and argument basics.', link: 'https://www.csus.edu/indiv/d/dowdenb/4/logical-reasoning.pdf', type: 'PDF' },
            { title: 'Logical Reasoning Problems (Practice PDF)', description: 'More practice sets to build speed and accuracy in analytical sections.', link: 'https://gnindia.dronacharya.info/Study-Materials/Download/Logical-Reasoning.pdf', type: 'PDF' }
        ]
    },
    {
        category: 'Sketching & Drawing Resources',
        items: [
            { title: 'Sketching for Product Designers', description: 'A great visual library for line weight, styling, and product forms. Emulate for Part-B.', link: 'https://www.google.com/search?q=Sketching+for+Product+Designers+pdf', type: 'Book' },
            { title: 'Basic Sketching for Industrial Designers', description: 'A PDF primer focusing on the fundamentals of lines, ellipses, and cubes for your daily warm-ups.', link: 'https://portal.tpu.ru/SHARED/y/YULJA_VIT/study/Tab1/basic_sketching-for_the_industrial_designer.pdf', type: 'PDF' }
        ]
    },
    {
        category: 'Video Tutorials & Channels',
        items: [
            { title: 'Color Theory for Beginners', description: 'A ~25 min video covering harmonies and contrast, essential for visual communication tasks.', link: 'https://www.youtube.com/watch?v=2QTHs7QSR9o', type: 'Video' },
            { title: 'CEED Part-B Solutions (AIR-1)', description: 'Watch a live solve to understand the required quality, speed, and thinking process.', link: 'https://www.youtube.com/results?search_query=CEED+2022+Part+B+Solutions+AIR+1', type: 'Video' },
            { title: 'Khan Academy – Simple Machines', description: 'Boosts your "practical & scientific knowledge" for Part-A with videos on gears, pulleys, etc.', link: 'https://www.khanacademy.org/science/physics/work-and-energy/mechanical-advantage', type: 'Video' },
            { title: 'StuffYouLook Blog/Channel', description: 'Excellent resource for CEED-specific sketching levels, observation training, and solved examples.', link: 'https://stuffyoulook.blogspot.com/', type: 'Website' },
            { title: 'MindYourDecisions Channel', description: 'Fun, engaging lateral and logic brainteasers to keep your Part-A skills sharp.', link: 'https://www.youtube.com/c/MindYourDecisions', type: 'Video' },
        ]
    },
    {
        category: 'Websites, Blogs & Articles',
        items: [
            { title: 'Careers360 CEED Guide', description: 'A good starting point for syllabus overviews, tips, and high-weightage topics.', link: 'https://design.careers360.com/articles/ceed-exam-preparation-guide', type: 'Website' },
            { title: 'Sustainability in Design (Article)', description: 'A brief on the new syllabus emphasis. Important for environment/GK questions.', link: 'https://onlyeducation.in/ceed-exam-pattern-changes-sustainability-design/', type: 'Website' }
        ]
    },
    {
        category: 'Mock Test Platforms',
        items: [
            { title: 'Official CEED Mock', description: 'Familiarize yourself with the Part-A UI. Free and released a few weeks before the exam.', link: 'https://www.ceed.iitb.ac.in', type: 'Website' },
            { title: 'D’Shala', description: 'Offers free sample mocks, analytics, and expert Part-B evaluation on paid tiers.', link: 'https://dshala.com', type: 'Website' },
            { title: 'SILICA Institute', description: 'Provides free past papers and some free online mock tests.', link: 'https://silica.co.in', type: 'Website' },
            { title: 'Design Mentor Studio', description: 'Completely free full-length mocks that simulate the actual exam environment.', link: 'https://designmentorstudio9157.graphy.com', type: 'Website' },
            { title: 'Architecture Aptitude', description: 'Quick, free 40-question aptitude tests with instant feedback for practice.', link: 'https://architectureaptitude.com', type: 'Website' },
            { title: 'BRDS / Rathore Design', description: 'Paid mock series with expert Part-B feedback, a valuable investment.', link: 'https://rathoredesign.com', type: 'Website' },
            { title: 'Creative Edge (TopRankers)', description: 'Paid platform offering regular test series with solutions and video explanations.', link: 'https://www.toprankers.com/design-entrance-exams-ceed', type: 'Website' },
            { title: 'Sanyukta Singh Studio', description: 'Offers live and recorded mock tests with personalized feedback on sketches.', link: 'https://www.youtube.com/@Sanyuktasinghstudio', type: 'Video' }
        ]
    },
    {
        category: 'Peer Communities & Support',
        items: [
            { title: 'Reddit r/ceed', description: 'The main hub. Share sketches/mocks for critique and discuss strategies. Use for weekly feedback.', link: 'https://www.reddit.com/r/ceed/', type: 'Community' },
            { title: 'Reddit r/ceedtakers_mdespeople', description: 'Focused on post-exam admissions, institute choices, and process clarifications.', link: 'https://www.reddit.com/r/ceedtakers_mdespeople/', type: 'Community' },
            { title: 'WhatsApp: CEED 2026 Group', description: 'Alumni-led group for active, real-time sketch feedback and doubt solving.', link: 'https://chat.whatsapp.com/FJGc9od7fbz7iRXsFnzYU0', type: 'Community' },
            { title: 'Telegram Groups', description: 'Search for "CEED 2026" to find and join active groups for resource sharing and group mocks.', link: 'https://telegram.org/', type: 'Community' }
        ]
    },
    {
        category: 'Aggregated Past-Paper Hubs',
        items: [
            { title: 'Collegedunia', description: 'A convenient one-stop link for downloading multiple years of past papers for self-study mocks.', link: 'https://collegedunia.com/exams/ceed/practice-papers', type: 'Website' },
            { title: 'Pahal Design', description: 'A deep archive of up to 16 years of papers, excellent for drilling specific question types.', link: 'https://pahaldesign.com/download-ceed-pyqs/', type: 'Website' }
        ]
    }
];

export const syllabusData: SyllabusSection[] = [
    {
        title: 'Exam Overview',
        description: 'CEED 2026 tests on two fronts: Part A is a computer-based screening test, and Part B is a pen-and-paper test of your design skills.',
        subsections: [
            { title: 'Part A (150 Marks)', points: ['Visual & Spatial Ability', 'Observation & Design Sensitivity', 'Analytical & Logical Reasoning', 'Language & Comprehension', 'Design & Art GK', 'Environmental & Scientific GK'] },
            { title: 'Part B (100 Marks)', points: ['Drawing & Rendering', 'Creativity & Visual Storytelling', 'Problem Identification & Solution Design', 'Communication'] }
        ]
    },
    {
        title: 'Part-A Topics (Mental Muscle + Design IQ)',
        subsections: [
            { title: 'Visual & Spatial Ability', points: ['Perspective understanding (1-2-3 point)', 'Mirror, rotation, flipping', 'Folding & unfolding (paper + 3D solids)', 'Views: top, front, side projection', 'Isometric to orthographic conversion', 'Depth perception & foreshortening', 'Pattern continuation', 'Image sequence / completion', 'Hole punching, cube folding, net interpretation'] },
            { title: 'Observation & Design Sensitivity', points: ['Odd man out (form/material/use/context)', 'Proportion & scale reasoning', 'Everyday object function logic', 'Identify usability problems in a scene', 'Product-part function recognition'] },
            { title: 'Analytical & Logical Ability', points: ['Series (visual + numerical)', 'Syllogism', 'Analogies & pattern logic', 'Data interpretation (bar, line, chart)', 'Deductive puzzles'] },
            { title: 'Language & Comprehension', points: ['Quick reading + inference', 'Humor, sarcasm, metaphor detection', 'Design vocabulary'] },
            { title: 'Design & Art GK', points: ['Movements: Bauhaus, Ulm, Memphis, Scandinavian, Minimalism, Brutalism', 'Indian visual culture basics', 'Famous designers (Dieter Rams, Charles & Ray Eames, etc.)', 'Famous products (Braun products, iMac, Swiss Posters)', 'UI/UX history: Xerox PARC, Apple HIG, Material Design'] },
            { title: 'Environmental & Scientific GK', points: ['Simple machines (pulleys, gears, levers)', 'Basic physics of daily objects (balance, force, stability)', 'Sustainability and material basics'] }
        ]
    },
    {
        title: 'Part-B Topics (Execution Under Timer)',
        subsections: [
            { title: 'Drawing & Rendering', points: ['Perspective (1-2-3 point)', 'Ellipses & cylinders (cups, bottles, wheels)', 'Boxes > products > complex forms', 'Line weight + clean contouring', 'Light + shadow basics', 'Material hints: metal, plastic, fabric, glass (simple strokes)', 'Human figures (gesture, proportion, hands, actions)', 'Scenes: interior/exterior (with scale + composition)'] },
            { title: 'Creativity & Visual Storytelling', points: ['Character design + expressions', 'Transformations (object to object)', 'Sequential comic panels (story logic)', 'Storyboarding for UX flows', 'Visual metaphors'] },
            { title: 'Problem Identification & Solution Design', points: ['Spot problem in daily life', 'Redesign an everyday object (bottle, chair, dustbin)', 'System-thinking: multi-stakeholder problem', 'UX flows (micro-interactions, feedback, accessibility)', 'Low-fidelity ideation + simple annotation'] },
            { title: 'Communication', points: ['Clear labeling', 'Arrow flows, hierarchy, callouts', 'Showing states (before/after, open/closed)'] }
        ]
    },
    {
        title: 'Design Theory + Vocabulary',
        subsections: [
            { title: 'Core Principles', points: ['Gestalt Principles', 'Visual hierarchy', 'Balance & symmetry', 'Rhythm, contrast, emphasis', 'Form follows function', 'Affordance, signifiers, mapping, feedback', 'Load theory (physical + cognitive)'] },
            { title: 'Color & Typography', points: ['Hue, saturation, value', 'Complementary / triadic / analogous', 'Warm vs cool psychology', 'Serif vs sans-serif basics', 'Legibility vs readability', 'Contrast ratios (accessibility)'] },
            { title: 'Materials & Manufacturing Basics', points: ['Plastics, wood, metal basics', 'Simple joins & hinges', 'Tolerances + ergonomics fundamentals', 'Injection molding (very basic awareness)', 'Surface finish naming'] },
            { title: 'Interaction Design', points: ['Human-centered design process (HCD)', 'Mental models', 'Task flows, user flows, journey maps', 'Microinteractions', 'Error states', 'Accessibility', 'Feedback loops', 'System vs UI thinking'] }
        ]
    },
];

export const mindsetAndStyle: SyllabusSection = {
    title: 'Mindset & Output Style',
    description: 'CEED rewards thinking and communication over purely aesthetic execution.',
    subsections: [
        {
            title: 'Core Philosophy',
            points: [
                'Fast, dirty ideation > Over-rendering',
                'Clarity > Beauty',
                'Explain your thinking in drawings',
                'Context always shown (environment, human use)',
                'Show before/after, cause/effect',
                'Avoid “pretty UI screens” — CEED wants thinking, not Dribbble polish'
            ]
        }
    ]
};

export const syllabusTables: SyllabusTable[] = [
    {
        title: 'Personal Priority Areas (Based on UI/UX Background)',
        headers: ['Area', 'Status', 'Action Plan'],
        rows: [
            [{ content: 'Hand sketching fluency', highlight: false }, { content: 'Must Fix', highlight: true }, { content: 'Daily drills on perspective, ellipses, and human figures. Focus on clarity over beauty.', highlight: false }],
            [{ content: 'Physical product thinking', highlight: false }, { content: 'Must Fix', highlight: true }, { content: 'Deconstruct and redesign everyday physical objects. Study materials and manufacturing basics.', highlight: false }],
            [{ content: 'UI/UX logic & Composition', highlight: false }, { content: 'Already Strong', highlight: false }, { content: 'Leverage this in problem identification and storyboarding. Sharpen, don\'t obsess.', highlight: false }],
            [{ content: 'Over-digital polish', highlight: false }, { content: 'Trap to Avoid', highlight: true }, { content: 'Focus on fast, communicative sketches. Thinking > Rendering.', highlight: false }],
            [{ content: 'Ignoring mechanical/logical GK', highlight: false }, { content: 'Trap to Avoid', highlight: true }, { content: 'Dedicate specific time blocks for Part-A GK on simple machines and scientific principles.', highlight: false }]
        ]
    },
    {
        title: 'Distilled Practice Benchmarks',
        headers: ['Topic', 'Sub-topics', 'Practice goal', 'Evidence of mastery'],
        rows: [
            [{ content: 'Perspective', highlight: false }, { content: '1/2/3-point, ellipses', highlight: false }, { content: '3 daily sketch drills', highlight: false }, { content: 'Clean scene sketch under 20 min', highlight: false }],
            [{ content: 'Product forms', highlight: false }, { content: 'Cuboid > cylinder > blends', highlight: false }, { content: '1 object/day', highlight: false }, { content: 'Bottle/chair/bag render', highlight: false }],
            [{ content: 'Human figures', highlight: false }, { content: 'Gesture, proportions', highlight: false }, { content: '10 poses/day', highlight: false }, { content: 'Clean action figure sequence', highlight: false }],
            [{ content: 'Visual intelligence', highlight: false }, { content: 'Spatial, pattern, odd-out', highlight: false }, { content: '30 mins/day', highlight: false }, { content: '80%+ in Part-A mocks', highlight: false }],
            [{ content: 'Design GK', highlight: false }, { content: 'Movements, icons', highlight: false }, { content: 'Flashcards nightly', highlight: false }, { content: 'Recall key designers/products', highlight: false }],
            [{ content: 'Problem solving', highlight: false }, { content: 'Redesign + reasoning', highlight: false }, { content: '2 briefs/week', highlight: false }, { content: 'Before-after storyboard clarity', highlight: false }]
        ]
    }
];

export const portfolioPrepData: SyllabusSection[] = [
  {
    title: "Portfolio & SOP Preparation (After Exam)",
    description: "While the exam is the first step, preparing these materials early will give you peace of mind and a head start for the interview rounds.",
    subsections: [
      {
        title: "Design Portfolio",
        points: [
          "Curate a 10–20 page portfolio with your best product and UI/UX case studies.",
          "Structure each project as a story: Problem → Process → Solution → Impact.",
          "Showcase a variety of mediums: include ideation sketches, CAD/3D models, graphic layouts, and interactive prototypes.",
          "Quality over quantity. Include only original work and be prepared to discuss every detail of your process."
        ]
      },
      {
        title: "Statement of Purpose (SOP)",
        points: [
          "Craft a 300–500 word essay explaining your motivation for pursuing M.Des.",
          "Align your background (academics, projects, UI/UX work) with your future goals in Product/Interaction Design.",
          "Be genuine and reflective. Why this institute? What do you hope to achieve?",
          "Use specific examples from your life to back up your statements. Brevity and clarity are key."
        ]
      }
    ]
  }
];