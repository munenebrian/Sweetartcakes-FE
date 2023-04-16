import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HomeWeddingService } from 'src/app/services/home-wedding.service';

@Component({
  selector: 'app-home-corporate',
  templateUrl: './home-corporate.component.html',
  styleUrls: ['./home-corporate.component.css']
})
export class HomeCorporateComponent implements OnInit{

  constructor(private homeWeddingService: HomeWeddingService) {}

  topDeals: Product [] = [];
  phonenumber: number = 254724087213;

  ngOnInit(): void {
    this.homeWeddingService.getFiveCorporateCakes().subscribe(products => {
      this.topDeals = products;
      console.log(this.topDeals);
    });
  }

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.topDeals[index].name}%0A%20%20%20%20%20%20%20%20*URL:*%20https://bonjoe-fe.vercel.app/shop/product-details/${this.topDeals[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}
