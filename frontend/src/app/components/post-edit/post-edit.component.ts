import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';
import { MockPostService } from '../../services/mock-post.service';
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
    this.postService.getPost(postId).subscribe((post) => {
      this.post = post;
      if (post) {
        this.postForm.patchValue({
          ...post,
          tags: post.tags.join(', '),
        });
      }
    });
  }

  onSubmit(): void {
    if (this.postForm.valid && this.post) {
      const formValue = this.postForm.value;
      const updatedPost = {
        ...formValue,
        tags: formValue.tags.split(',').map((tag: string) => tag.trim()),
      }
      this.postService.updatePost(this.post.id, updatedPost).subscribe((updated) => {
        if (updated) {
          this.router.navigate(['/posts']);
        }
      });
    }
  }
}
