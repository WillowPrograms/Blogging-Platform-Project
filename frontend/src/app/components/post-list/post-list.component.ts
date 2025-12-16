import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { MockPostService } from '../../services/mock-post.service';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ConfirmModalComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  searchTerm: string = '';
  isConfirmModalOpen: boolean = false;
  postToDelete: number | null = null;

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
    this.postToDelete = id;
    this.isConfirmModalOpen = true;
  }

  onConfirmDelete() {
    if (this.postToDelete !== null) {
      this.postService.deletePost(this.postToDelete).subscribe({
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
    this.isConfirmModalOpen = false;
    this.postToDelete = null;
  }

  onCancelDelete() {
    this.isConfirmModalOpen = false;
    this.postToDelete = null;
  }
}
