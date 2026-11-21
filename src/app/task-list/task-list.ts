import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleColorPipe } from '../pipes/title-color-pipe';

@Component({
  selector: 'app-task-list',
  imports: [UpperCasePipe, DatePipe, TitleColorPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tasks = signal<{ id: number; title: string; dueDate: string }[]>([
    { id: 1, title: 'AmineAmineAmineAmineAmine', dueDate: '2026-11-15' },
    { id: 1, title: 'Amine', dueDate: '2026-11-15' },
    { id: 1, title: 'Amine', dueDate: '2026-11-15' },
  ]);

  title = signal('');

  count = computed(() => this.tasks().length);

  add(task: { id: number; title: string; dueDate: string }) {
    this.tasks.update((items) => [...items, task]);
  }

  addTask() {
    const title = this.title;

    this.add({
      id: 3,
      title: title(),
      dueDate: '2026-11-21',
    });

    this.title.set('');
  }

  clear() {
    this.tasks.set([]);
  }
}
