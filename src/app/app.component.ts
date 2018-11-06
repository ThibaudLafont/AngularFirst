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
      'content': 'Enim pariatur amet tempor consequat quis culpa. Adipisicing occaecat labore aliquip amet excepteur ea adipisicing dolor culpa velit esse elit est ullamco. Fugiat duis officia voluptate mollit deserunt id dolore quis est dolore. Ea amet exercitation dolor velit magna. Duis minim quis cupidatat aute.',
      'lovesIt': 0,
      'created_at': 'Tue Feb 03 1987 14:08:44 GMT+0000 (UTC)'
    },
    {
      'title': 'Gardner',
      'content': 'Ea consequat ad do in cillum adipisicing aute eu occaecat dolore anim sint. Pariatur ex sint labore velit consectetur duis cillum. Nulla esse sunt exercitation dolore anim incididunt Lorem minim ut commodo et commodo mollit enim. Ex tempor voluptate laboris aliqua velit deserunt ut. Aute adipisicing est mollit magna eiusmod fugiat quis.',
      'lovesIt': 1,
      'created_at': 'Thu Oct 26 1989 08:28:03 GMT+0000 (UTC)'
    },
    {
      'title': 'Pratt',
      'content': 'Reprehenderit quis deserunt laborum ea. Minim laborum incididunt non commodo mollit dolor et consectetur nulla. Velit ad duis non ex nulla elit in. Reprehenderit incididunt et magna et. Occaecat sunt magna veniam mollit et duis ea id.',
      'lovesIt': -3,
      'created_at': 'Fri Dec 31 2010 13:37:43 GMT+0000 (UTC)'
    },
    {
      'title': 'Carey',
      'content': 'Ut commodo amet dolore sint culpa sint aliquip. Pariatur enim magna amet nulla aliqua voluptate nulla nostrud cupidatat sint sunt aliqua in adipisicing. Consequat occaecat aliquip sint dolore adipisicing eu eu cillum voluptate deserunt labore. Ex nostrud id consectetur adipisicing minim laborum nulla ut do duis irure ad velit. Culpa anim dolor consequat adipisicing irure irure.',
      'lovesIt': -1,
      'created_at': 'Sun Oct 12 2003 10:11:48 GMT+0000 (UTC)'
    },
    {
      'title': 'Hinton',
      'content': 'Reprehenderit sint occaecat proident laborum excepteur consequat. Ad est eiusmod sunt ea ad ullamco ut. Esse sunt eu pariatur minim. Cupidatat dolore deserunt adipisicing quis ut fugiat. Culpa fugiat reprehenderit sunt do esse pariatur reprehenderit exercitation.',
      'lovesIt': 5,
      'created_at': 'Mon Dec 09 1974 14:05:49 GMT+0000 (UTC)'
    }
  ];
}
