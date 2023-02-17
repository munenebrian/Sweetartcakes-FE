import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { TopsellingService } from 'src/app/services/topselling.service';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit{

  constructor(private topsellingService: TopsellingService) {}

  topSales: Product [] = [];
  phonenumber: number = 254724087213;

  ngOnInit(): void {
    this.topsellingService.getTopSelling().subscribe(products => {
      this.topSales = products;
      console.log(this.topSales);
    });
  }

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.topSales[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.topSales[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://40163de3.ahericareng.pages.dev/product-details/${this.topSales[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}
