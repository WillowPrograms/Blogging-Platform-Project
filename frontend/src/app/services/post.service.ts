import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:5000'; // This is the URL for the Flask (python) API 

  constructor(private http: HttpClient) {}

  checkHealth(): Observable<{ status: string }> {
    // Example implementation - shows how to call an API endpoint
    return this.http.get<{ status: string }>(`${this.apiUrl}/health`);
  }

  getPosts(term?: string): Observable<Post[]> {
    // TODO: Implement GET request to /api/posts with optional search query parameter
    throw new Error('Not implemented');
  }

  getPost(id: number): Observable<Post | undefined> {
    // TODO: Implement GET request to /api/posts/{id}
    throw new Error('Not implemented');
  }

  createPost(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Observable<Post> {
    // TODO: Implement POST request to /api/posts with post data in body
    throw new Error('Not implemented');
  }

  updatePost(
    id: number,
    post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>
  ): Observable<Post | null> {
    // TODO: Implement PUT request to /api/posts/{id} with updated post data
    throw new Error('Not implemented');
  }

  deletePost(id: number): Observable<boolean> {
    // TODO: Implement DELETE request to /api/posts/{id}
    throw new Error('Not implemented');
  }
}
