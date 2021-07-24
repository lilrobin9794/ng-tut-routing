import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './user-edit.guard';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
  ]
})
export class UserEditComponent implements OnInit, ComponentCanDeactivate {
  saved: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    this.saved = true;
  }

  canDeactivate(){
    return this.saved ? true : confirm("Nicht gespeichert. Sicher?");
  }

}
