import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { MockPostService } from '../../services/mock-post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  searchTerm: string = '';

  constructor(private postService: MockPostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts(this.searchTerm).subscribe((posts) => (this.posts = posts));
  }

  onSearch() {
    this.loadPosts();
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe((success) => {
      if (success) this.loadPosts();
    });
  }
}
