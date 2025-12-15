import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockPostService } from '../../services/mock-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: MockPostService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required],
      tags: [''],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const formValue = this.postForm.value;
      const post = {
        ...formValue,
        tags: formValue.tags ? formValue.tags.split(',').map((tag: string) => tag.trim()) : [],
      };
      this.postService.createPost(post).subscribe({
        next: () => this.router.navigate(['/posts']),
        error: (err) => console.error('Error creating post:', err),
      });
    }
  }
}
