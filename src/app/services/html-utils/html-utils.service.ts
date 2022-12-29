import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlUtilsService {
  constructor() { }
  onlyAllowNumbers(e:KeyboardEvent){
    if(parseInt(e.key) > -1 || e.key === 'Backspace') return true;return false
  }
  requiredErrMgs(fieldName:string){
    return `${fieldName} is required`
  }
  minLengthErrMgs(minLength:number){
    return `Should have atleast ${minLength} characters`
  }
  minErrMgs(min:number){
    return `should be more than or equal to ${min}`
  }
  maxErrMgs(max:number){
    return `should be less than or equal to ${max}`
  }
}
