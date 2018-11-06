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

  getLiClass() {
    const count = this.lovesIt;

    if (count > 0) {
      return 'list-group-item-success';
    } else if (count < 0) {
      return 'list-group-item-danger';
    }
  }

  onLove() {
    this.lovesIt ++;
  }

  onDontLove() {
    this.lovesIt --;
  }

}

