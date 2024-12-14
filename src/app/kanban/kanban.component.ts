import { Component, OnInit } from '@angular/core';

interface Task {
  id: number
  title: string
  description: string
  status: string
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent  implements OnInit {

  tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'todo' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'in-progress' },
    { id: 4, title: 'Task 4', description: 'Description for Task 4', status: 'in-progress' },
    { id: 5, title: 'Task 5', description: 'Description for Task 5', status: 'done' },
    { id: 6, title: 'Task 6', description: 'Description for Task 6', status: 'done' }
  ];

  moveTask(task
    : Task, newStatus: 'todo' | 'in-progress' | 'done') {
    task.status = newStatus;
  }
  ngOnInit() {}

}