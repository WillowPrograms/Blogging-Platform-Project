import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MockPostService } from '../../services/mock-post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: MockPostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPost(postId).subscribe(post => this.post = post);
  }
}
