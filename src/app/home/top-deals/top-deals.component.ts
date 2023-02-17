import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { TopdealsService } from 'src/app/services/topdeals.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.css']
})
export class TopDealsComponent implements OnInit{

  constructor(private topdealsService: TopdealsService) {}

  topDeals: Product [] = [];
  phonenumber: number = 254724087213;

  ngOnInit(): void {
    this.topdealsService.getTopDeals().subscribe(products => {
      this.topDeals = products;
      console.log(this.topDeals);
    });
  }

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.topDeals[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.topDeals[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://40163de3.ahericareng.pages.dev/product-details/${this.topDeals[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }
}
