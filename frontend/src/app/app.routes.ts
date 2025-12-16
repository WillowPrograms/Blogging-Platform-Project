import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    loadComponent: () =>
      import('./components/post-list/post-list.component').then((m) => m.PostListComponent),
  },
  {
    path: 'posts/create',
    loadComponent: () =>
      import('./components/post-create/post-create.component').then((m) => m.PostCreateComponent),
  },
  {
    path: 'posts/:id',
    loadComponent: () =>
      import('./components/post-detail/post-detail.component').then((m) => m.PostDetailComponent),
  },
  {
    path: 'posts/:id/edit',
    loadComponent: () =>
      import('./components/post-edit/post-edit.component').then((m) => m.PostEditComponent),
  },
  { path: '**', redirectTo: '/posts' },
];
