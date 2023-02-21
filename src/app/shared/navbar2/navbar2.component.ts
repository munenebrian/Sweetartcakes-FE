import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {

  constructor() {};

  menuVar: boolean = false;
  menu_icon_var: boolean = false;

  openMenu(){
    this.menuVar =! this.menuVar;
    this.menu_icon_var =! this.menu_icon_var;
  }

}
