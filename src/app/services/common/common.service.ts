import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) { }
  formState(): "Add" | "Edit" | "View" {
    if(this.router.url.includes("view")) return "View";
    if(this.router.url.includes("edit")) return "Edit";
    return "Add";
  }
  async getBrands(): Promise<Array<any>> {
    const res = await this.apiService.callAPI('get',{},"common/brands/").toPromise();
    return res.data    
  }
}
