import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-engagement-cakes',
  templateUrl: './engagement-cakes.component.html',
  styleUrls: ['./engagement-cakes.component.css']
})
export class EngagementCakesComponent implements OnInit {

  products: Product[] = [];
  cats: Category[] = [];
  phonenumber: number = 254721408076;
  id:number = 0;

  title = 'pagination';
  page:number = 1;
  count:number = 0;
  itemscount:number = 12;
  itemcounts: any = [4,8,12,16,20]

  constructor(private http: HttpClient, private categoriesService: CategoriesService, private meta: Meta) {}

  ngOnInit(): void {

    this.meta.addTags([ 
      { name: 'description', content: 'This a cake shop' }, 
      { name: 'keywords', content: 'nairobi wedding cakes, cake shop, cakes, birthday cakes, sweet art, sweet art luxury cakes, kenya wedding cakes, nairobi bakeries, wedding cakes, nairobi cakes' } 
    ]);
  
  // pagination 
  this.getData();

  
  var elements = document.getElementsByClassName("column")as HTMLCollectionOf<HTMLElement>;

// Declare a loop variable
  var i;

  // List View
  function listView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "100%";
    }
  }

  // Grid View
  function gridView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "50%";
    }
  }
  /* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container!.getElementsByClassName("btn");
for (var i:any = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    // this.className += " active";
  });
}
  }
  
  getData() {
    this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/engagementCakes/').subscribe(response => {
      this.products  = response;
      console.log(this.products)
    });
  }

  onNextPageChange(event:any) {
    this.page=event;
    this.getData();
  }

  onPageSizeChange(event:any) {
    this.itemscount = event.target.value;
    this.page = 1;
    this.getData();
  }
  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.products[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.products[index].price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.sweetartluxurycakes.com/shop/product-details/${this.products[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}
