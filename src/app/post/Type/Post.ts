import {Input} from '@angular/core';

class Post {
  @Input() title: string;
  @Input() content: string;
  @Input() lovesIt: number;
  @Input() createdAt: Date;
}

export { Post as Post};
