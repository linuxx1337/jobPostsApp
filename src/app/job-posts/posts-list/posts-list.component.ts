import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RepositoryService } from './../../shared/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { JobPosts } from 'src/app/_interface/job-posts.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { JobModalComponent } from '../job-modal/job-modal.component';
import { MatDialogRef } from '@angular/material/dialog';
import { JobApplications } from 'src/app/_interface/job-applications.model';
import { Interviews } from 'src/app/_interface/interviews.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [
    'title',
    'openAt',
    'closeAt',
    'numberOfInterviews',
  ];
  public dataSource = new MatTableDataSource<JobPosts>();
  public jobApplications = new MatTableDataSource<JobApplications>();
  public interviews = new MatTableDataSource<Interviews>();

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    private repoService: RepositoryService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.getAllPosts();
    this.getAllJobApplications();
    this.getAllInterviews();
    const result = await this.resolveAfter2Second();
    this.countInterviews();
  }

  public resolveAfter2Second() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // Get all posts from API
  public getAllPosts = () => {
    this.repoService.getRealData('JobPost').subscribe((res) => {
      this.dataSource.data = res as JobPosts[];
    });
  };

  // Get all  jobApplications from API
  public getAllJobApplications = () => {
    this.repoService.getRealData('JobApplication').subscribe((res) => {
      this.jobApplications.data = res as JobApplications[];
    });
  };

  // Get all interviews from API
  public getAllInterviews = () => {
    this.repoService.getRealData('Interview').subscribe((res) => {
      this.interviews.data = res as Interviews[];
    });
  };

  // Counting interviews
  public countInterviews() {
    for (let jobPost of this.dataSource.data) {
      let interviewCount: number = 0;
      // Loop trough all jobPosts
      for (let jobApplication of this.jobApplications.data) {
        // Inside of that loop trough all JobApplications
        if (jobPost.id === jobApplication.jobPostId) {
          //Here count the interviews
          for (let interview of this.interviews.data) {
            if (jobApplication.id === interview.jobApplicationId) {
              interviewCount++;
            }
          }
        }
      }
      jobPost.numberOfInterviews = interviewCount;
    }
  }

  // Filter function for Job Posts table
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  // Refresh button function
  public refreshPostsTable() {
    this.ngOnInit();
  }

  // Open modal when clicked on title name
  postDialogRef!: MatDialogRef<JobModalComponent>;
  openModal(onePost: any) {
    this.postDialogRef = this.dialog.open(JobModalComponent, {
      data: {
        id: onePost.id,
        title: onePost.title,
        openAt: onePost.openAt,
        closeAt: onePost.closeAt,
        description: onePost.description,
        notes: onePost.notes,
        numberOfInterviews: onePost.numberOfInterviews,
      },
    });
  }
}
