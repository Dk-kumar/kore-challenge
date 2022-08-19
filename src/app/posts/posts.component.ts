import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  savedPost: any = [];

  constructor() {
    this.savedPost = JSON.parse(localStorage.getItem('savedPost') || '[]');
  }

  ngOnInit(): void {}

  postDelete(Src: string) {
    debugger
    this.savedPost = this.savedPost.filter((res: any) => {
      return res.src !== Src;
    });
    localStorage.setItem('savedPost', JSON.stringify(this.savedPost));
  }
}
