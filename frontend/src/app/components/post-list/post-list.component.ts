import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { MockPostService } from '../../services/mock-post.service';
import { ToastService } from '../../services/toast.service';
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

  constructor(
    private postService: MockPostService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts(this.searchTerm).subscribe({
      next: (posts) => (this.posts = posts),
      error: (err) => {
        console.error('Error loading posts:', err);
        this.toastService.error('Failed to load posts.');
      },
    });
  }

  onSearch() {
    this.loadPosts();
  }

  deletePost(id: number) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(id).subscribe({
        next: (success) => {
          if (success) {
            this.toastService.success('Post deleted successfully!');
            this.loadPosts();
          }
        },
        error: (err) => {
          console.error('Error deleting post:', err);
          this.toastService.error('Failed to delete post.');
        },
      });
    }
  }
}
