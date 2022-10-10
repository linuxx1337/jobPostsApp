import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.css'],
})
export class JobModalComponent implements OnInit {
  // receive data from PostListComponent using 'MAT_DIALOG_DATA'
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PostsListComponent>
  ) {}

  ngOnInit(): void {}
}
