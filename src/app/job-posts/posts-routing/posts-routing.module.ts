import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from '../posts-list/posts-list.component';

const routes: Routes = [{ path: '', component: PostsListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class PostsRoutingModule {}
