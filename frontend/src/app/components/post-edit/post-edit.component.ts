import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';
import { MockPostService } from '../../services/mock-post.service';
import { ToastService } from '../../services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})
export class PostEditComponent implements OnInit {
  post: Post | undefined;
  postForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: MockPostService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required],
      tags: [''],
    });
  }

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPost(postId).subscribe({
      next: (post) => {
        this.post = post;
        if (post) {
          this.postForm.patchValue({
            ...post,
            tags: post.tags.join(', '),
          });
        }
      },
      error: (err) => {
        console.error('Error loading post:', err);
        this.toastService.error('Failed to load post.');
      },
    });
  }

  onSubmit(): void {
    if (this.postForm.valid && this.post) {
      const formValue = this.postForm.value;
      const updatedPost = {
        ...formValue,
        tags: formValue.tags.split(',').map((tag: string) => tag.trim()),
      }
      this.postService.updatePost(this.post.id, updatedPost).subscribe({
        next: (updated) => {
          if (updated) {
            this.toastService.success('Post updated successfully! ✨');
            this.router.navigate(['/posts']);
          }
        },
        error: (err) => {
          console.error('Error updating post:', err);
          this.toastService.error('Failed to update post. Please try again.');
        },
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/posts']);
  }
}
