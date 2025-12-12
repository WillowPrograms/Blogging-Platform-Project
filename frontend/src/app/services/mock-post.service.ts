import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { filter, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockPostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'My First Post',
      content: 'This is the content of my first :)',
      category: 'Technology',
      tags: ['Tech', 'Programming'],
      createdAt: '2025-09-01T12:00:00Z',
      updatedAt: '2025-09-01T12:00:00Z',
    },
    {
      id: 2,
      title: 'Another Post',
      content: 'Content goes here...:p',
      category: 'Lifestyle',
      tags: ['Life'],
      createdAt: '2025-09-02T12:00:00Z',
      updatedAt: '2025-09-02T12:00:00Z',
    },
  ];

  private nextId = 3;

  getPosts(term?: string): Observable<Post[]> {
    let filteredPosts = this.posts;
    if (term) {
      const lowerTerm = term.toLowerCase();
      filteredPosts = this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerTerm) ||
          post.content.toLowerCase().includes(lowerTerm) ||
          post.category.toLowerCase().includes(lowerTerm)
      );
    }

    return of(filteredPosts);
  }

  getPost(id: number): Observable<Post | undefined> {
    const post = this.posts.find((p) => p.id == id);
    return of(post);
  }

  createPost(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Observable<Post> {
    const now = new Date().toISOString();
    const newPost: Post = {
      ...post,
      id: this.nextId++,
      createdAt: now,
      updatedAt: now,
    };
    this.posts.push(newPost);
    return of(newPost);
  }

  updatePost(
    id: number,
    post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>
  ): Observable<Post | null> {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index === -1) return of(null);
    const existing = this.posts[index];
    const updated: Post = {
      ...post,
      id,
      createdAt: existing.createdAt,
      updatedAt: new Date().toISOString(),
    };
    this.posts[index] = updated;
    return of(updated);
  }

  deletePost(id: number): Observable<boolean> {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index === -1) return of(false);
    this.posts.splice(index, 1);
    return of(true);
  }
}
