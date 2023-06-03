import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-homeflavours',
  templateUrl: './homeflavours.component.html',
  styleUrls: ['./homeflavours.component.css']
})
export class HomeflavoursComponent implements OnInit{

  constructor( private meta : Meta) {}

  ngOnInit(): void{
    this.meta.addTags([ 
      { name: 'description', content: 'This a cake shop' }, 
      { name: 'keywords', content: 'nairobi wedding cakes, cake shop, cakes, birthday cakes, sweet art, sweet art luxury cakes, kenya wedding cakes, nairobi bakeries, wedding cakes, nairobi cakes' } 
  ]);
  }

}
