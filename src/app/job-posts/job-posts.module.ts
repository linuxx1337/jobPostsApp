import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListComponent } from './posts-list/posts-list.component';

import { PostsRoutingModule } from './posts-routing/posts-routing.module';

import { MaterialModule } from './../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobModalComponent } from './job-modal/job-modal.component';

@NgModule({
  declarations: [PostsListComponent, JobModalComponent],
  imports: [CommonModule, PostsRoutingModule, MaterialModule, FlexLayoutModule],
})
export class JobPostsModule {}
