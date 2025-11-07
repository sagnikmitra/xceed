export type Page = 'home' | 'plan' | 'resources' | 'syllabus' | 'portfolio';

export interface Task {
  id: string;
  text: string;
  subtasks?: string[];
  link?: string;
  isCompleted: boolean;
}

export interface Day {
  day: number;
  title: string;
  tasks: Task[];
}

export interface Week {
  week: number;
  title: string;
  days: Day[];
}

export interface Resource {
    category: string;
    items: {
        title: string;
        description: string;
        link: string;
        // Fix: Add 'type' property to align with the data in `services/constants.ts`.
        type: string;
    }[];
}

export interface SyllabusSection {
    title: string;
    description?: string;
    subsections: {
        title: string;
        points: string[];
    }[];
}

export interface SyllabusTable {
    title: string;
    headers: string[];
    rows: (string | { content: string; highlight: boolean })[][];
}