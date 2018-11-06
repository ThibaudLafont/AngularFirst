import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      'title': 'Hudson',
      'content': 'Enim pariatur amet tempor consequat quis culpa. ' +
        'Adipisicing occaecat labore aliquip amet excepteur ea adipisicing dolor culpa velit esse elit est ullamco. ' +
        'Fugiat duis officia voluptate mollit deserunt id dolore quis est dolore. Ea amet exercitation dolor velit magna. ' +
        'Duis minim quis cupidatat aute.',
      'lovesIt': 0,
      'createdAt': 'Tue Feb 03 1987 14:08:44 GMT+0000 (UTC)'
    },
    {
      'title': 'Gardner',
      'content': 'Enim pariatur amet tempor consequat quis culpa. ' +
        'Adipisicing occaecat labore aliquip amet excepteur ea adipisicing dolor culpa velit esse elit est ullamco. ' +
        'Fugiat duis officia voluptate mollit deserunt id dolore quis est dolore. Ea amet exercitation dolor velit magna. ' +
        'Duis minim quis cupidatat aute.',
      'lovesIt': 1,
      'createdAt': 'Thu Oct 26 1989 08:28:03 GMT+0000 (UTC)'
    },
    {
      'title': 'Pratt',
      'content': 'Enim pariatur amet tempor consequat quis culpa. ' +
        'Adipisicing occaecat labore aliquip amet excepteur ea adipisicing dolor culpa velit esse elit est ullamco. ' +
        'Fugiat duis officia voluptate mollit deserunt id dolore quis est dolore. Ea amet exercitation dolor velit magna. ' +
        'Duis minim quis cupidatat aute.',
      'lovesIt': -3,
      'createdAt': 'Fri Dec 31 2010 13:37:43 GMT+0000 (UTC)'
    },
    {
      'title': 'Carey',
      'content': 'Enim pariatur amet tempor consequat quis culpa. ' +
        'Adipisicing occaecat labore aliquip amet excepteur ea adipisicing dolor culpa velit esse elit est ullamco. ' +
        'Fugiat duis officia voluptate mollit deserunt id dolore quis est dolore. Ea amet exercitation dolor velit magna. ' +
        'Duis minim quis cupidatat aute.',
      'lovesIt': -1,
      'createdAt': 'Sun Oct 12 2003 10:11:48 GMT+0000 (UTC)'
    },
    {
      'title': 'Hinton',
      'content': 'Enim pariatur amet tempor consequat quis culpa. ' +
        'Adipisicing occaecat labore aliquip amet excepteur ea adipisicing dolor culpa velit esse elit est ullamco. ' +
        'Fugiat duis officia voluptate mollit deserunt id dolore quis est dolore. Ea amet exercitation dolor velit magna. ' +
        'Duis minim quis cupidatat aute.',
      'lovesIt': 5,
      'createdAt': 'Mon Dec 09 1974 14:05:49 GMT+0000 (UTC)'
    }
  ];
}
