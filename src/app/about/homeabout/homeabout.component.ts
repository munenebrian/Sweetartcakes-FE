import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-homeabout',
  templateUrl: './homeabout.component.html',
  styleUrls: ['./homeabout.component.css']
})
export class HomeaboutComponent implements OnInit{

  constructor( private meta : Meta) {}

  ngOnInit(): void{
    this.meta.addTags([ 
      { name: 'description', content: 'This a cake shop' }, 
      { name: 'keywords', content: 'nairobi wedding cakes, cake shop, cakes, birthday cakes, sweet art, sweet art luxury cakes, kenya wedding cakes, nairobi bakeries, wedding cakes, nairobi cakes' } 
  ]);
  }

}
