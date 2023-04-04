import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  constructor( private meta: Meta) {};

  ngOnInit(): void {
    let slideIndex = 0;
    showSlides();

    this.meta.addTags([ 
      { name: 'description', content: 'This a cake shop' }, 
      { name: 'keywords', content: 'nairobi wedding cakes, cake shop, cakes, birthday cakes, sweet art, sweet art luxury cakes, kenya wedding cakes, nairobi bakeries, wedding cakes, nairobi cakes' } 
  ]);

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 4000);
    }
  }
}
