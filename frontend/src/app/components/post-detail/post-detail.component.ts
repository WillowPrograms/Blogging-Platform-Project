import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MockPostService } from '../../services/mock-post.service';
import { ToastService } from '../../services/toast.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ConfirmModalComponent],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  private postId: number = 0;
  isConfirmModalOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postService: MockPostService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPost(this.postId).subscribe({
      next: (post) => this.post = post,
      error: (err) => {
        console.error('Error loading post:', err);
        this.toastService.error('Failed to load post.');
      },
    });
  }

  deletePost(): void {
    this.isConfirmModalOpen = true;
  }

  onConfirmDelete() {
    this.postService.deletePost(this.postId).subscribe({
      next: () => {
        this.toastService.success('Post deleted successfully!');
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        console.error('Error deleting post:', err);
        this.toastService.error('Failed to delete post.');
      },
    });
  }

  onCancelDelete() {
    this.isConfirmModalOpen = false;
  }
}
