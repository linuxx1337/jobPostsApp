import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  // ##################################################################
  // ################ Change this to get data from API ################
  // ##################################################################

  token: string =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI5MEZFRUQ2RUNERTZBNTJEMEVBMEQ3RDhCNjFEQUY1IiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2Rldi5pZC5pbmRpZ28uc2kiLCJuYmYiOjE2NjU0MjAwMjUsImlhdCI6MTY2NTQyMDAyNSwiZXhwIjoxNjY1NDIzNjI1LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdLCJjbGllbnRfaWQiOiIzZjc2ODczYS1jOTE3LTQyYWQtYWQ5Zi05NjAwMzlmNTEyZWYiLCJzdWIiOiI1NmRlMDE3Ny05NDFjLTQ5ZmYtN2MyYS0wOGRhNDU2MDg3YzUiLCJhdXRoX3RpbWUiOjE2NjUyMjM4NTMsImlkcCI6ImxvY2FsIiwic2lkIjoiOTM3MjdEMkU1MkI5RTc3NjVCNzg3RkE5OTMzNTA0OTAiLCJqdGkiOiI2MjI2NkVCODQ4Q0M5NEU0QjREMzZERTM0NzU5ODAzMyJ9.r39rELxZnZKiX7BkNnxdt8-JFqMZ1IF13J8gzTxZ5r4JE-DDIlbaWeEyUEF7Q7I1BNcbI_eu5-F_sMDlxLSiCezt6tLp4NjmF5nqP7cLUrEsPropuKPM9ON-6dNEgM5XRGTPIoaHFvmtQLsJfP65CvRTNjx6p37p00b5t1m2ml1G44xAwlUkdLDEjP1BddziZhdtGmNNEQjGalHViqjIeIrKZdqAKoEFc158EpvL8iwrhqOJ-GyhL3QEJqi_-99VNX8p0dDEipLuJssdOWunhk9XgFFdFV4PnIzmtOv3FTzmHOwV8eWI7y0NRY_IJgDzIw8VCP5n7bps-3i5xk4JjA';

  // Get data function for API
  public getRealData = (route: string) => {
    return this.http.get(
      this.createCompleteRoute(route, environment.urlAddress),
      this.generateHeaders()
    );
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
  };
}
