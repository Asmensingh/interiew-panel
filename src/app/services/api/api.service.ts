import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, Observer,catchError,throwError } from "rxjs";
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = environment.baseURL 
  constructor(
    private http:HttpClient,
    private router: Router,
    private alertService:AlertService,
    private toastr: ToastrService
  ) { }
  callAPI(method: "get" | "post" | "put" | "delete",data: any ,route: string, isMsgShow:Boolean = false ): Observable<any> {  
    return new Observable((observer: Observer<any>) => {
      this.http[method](this.baseURL + route, data).subscribe((data: any) => {
          if(isMsgShow) this.toastr.success(data.message, 'Success!')
          observer.next(data);
          observer.complete();
        }, error => {
          observer.error(this.handleError(error));
        });
    });
  }
  handleError(error: HttpErrorResponse){
    switch (error.status) {
      case 401:
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
        break;
      case 500:
        this.toastr.error(error.error.message, 'Error!')
        break;
      default:
        this.toastr.error(error.error.message, 'Error!')
        break;
    }
    // return throwError(error);
  }
}
