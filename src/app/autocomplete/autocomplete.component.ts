import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public namelist = ['Apple', 'Bat', 'Cat', 'Dog'];

bareRe(a){

  console.log("Dukor"+a);
}
}
