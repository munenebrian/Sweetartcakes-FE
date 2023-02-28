import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { OcassionalcakedetailsService } from 'src/app/services/ocassionalcakedetails.service';

@Component({
  selector: 'app-occasional-cakes-details',
  templateUrl: './occasional-cakes-details.component.html',
  styleUrls: ['./occasional-cakes-details.component.css']
})
export class OccasionalCakesDetailsComponent implements OnInit {

  singleProduct:Product[] = [];
  id:number = 0;
  phonenumber: number = 254748459581;

  constructor(private ocassionalcakedetailsService:OcassionalcakedetailsService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.ocassionalcakedetailsService.getOccasionalCakeDetails(this.id).subscribe(
          datax =>{
            this.singleProduct = datax;
            console.log(datax)
          }
        )
      }
    );
  }

  openWhatsApp() {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.singleProduct[0].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.singleProduct[0].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.ahericare.com/shop/product-details/${this.singleProduct[0].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}
