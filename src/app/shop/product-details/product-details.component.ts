import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  singleProduct:Product[] = [];
  products: Product[] = [];
  id:number = 0;
  phonenumber: number = 254721408076;

  constructor(private http: HttpClient, private productdetailsService:ProductdetailsService, private route:ActivatedRoute) {}

  ngOnInit(): void {

    this.getData();

    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.productdetailsService.getProductDetails(this.id).subscribe(
          datax =>{
            this.singleProduct = datax;
            console.log(datax)
          }
        )
      }
    );
  }

  getData() {
    this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/weddingcakes/').subscribe(response => {
      this.products  = response;
      console.log(this.products)
    });
  }

  // whatsapp 
  openWhatsAppp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.products[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.products[index].price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://sweetartcakes-fe-2u2e.vercel.app/shop/product-details/${this.products[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

  openWhatsApp() {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.singleProduct[0].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.singleProduct[0].price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.ahericare.com/shop/product-details/${this.singleProduct[0].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}
