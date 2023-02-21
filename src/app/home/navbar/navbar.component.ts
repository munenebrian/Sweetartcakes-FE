import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() {};

  menuVar: boolean = false;
  menu_icon_var: boolean = false;

  openMenu(){
    this.menuVar =! this.menuVar;
    this.menu_icon_var =! this.menu_icon_var;
  }

}
