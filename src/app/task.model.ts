// src/app/task.model.ts
export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
  }