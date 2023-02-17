import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $(window).scroll(function () {
                var height = $(".navigation").height();
                var scrollTop = $(window).scrollTop();
                console.log("Scroll");
      
                if (scrollTop! >= height! - 70) {
                  $(".navigation").css("background-color", "#251104");
                } else {
                  $(".navigation").css("background-color", "transparent");
                }
              });
      });
  }

}
