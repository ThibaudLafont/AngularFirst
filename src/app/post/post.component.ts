import { Component, OnInit, Input } from '@angular/core';
import {Post} from './Type/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  getLiClass() {
    const count = this.post.lovesIt;

    if (count > 0) {
      return 'list-group-item-success';
    } else if (count < 0) {
      return 'list-group-item-danger';
    }
  }

  onLove() {
    this.post.lovesIt ++;
  }

  onDontLove() {
    this.post.lovesIt --;
  }

}


