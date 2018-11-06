import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() lovesIt: number;
  @Input() createdAt: Date;

  constructor() { }

  ngOnInit() {
  }

  printLovesIt() {
    const $count = this.lovesIt;
    let $string = ' like';

    if ( $count > 1 || $count < -1) {
      $string += 's';
    }

    return $count + $string;
  }

}

