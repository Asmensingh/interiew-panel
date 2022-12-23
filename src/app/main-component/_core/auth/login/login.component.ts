import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormArray} from "@angular/forms";
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  dropDownData = [
    {position:'Front Developer'},
    {position:'Backend Developer'},
    {position:'Full Stack Developer'},
    {position:'MEAN Developer'},
    {position:'MERN Developer'},
  ]
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
