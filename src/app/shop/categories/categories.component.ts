import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Categoryproducts } from 'src/app/interfaces/category-products';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  phonenumber: number = 254721408076;
  catproducts:Categoryproducts[] = [];
  cats: Category[] = [];
  id:number = 0;

  constructor(private http: HttpClient, private categoriesService : CategoriesService,private route:ActivatedRoute, private meta: Meta) {}

  ngOnInit(): void {

    this.meta.addTags([ 
      { name: 'description', content: 'This a cake shop' }, 
      { name: 'keywords', content: 'nairobi wedding cakes, cake shop, cakes, birthday cakes, sweet art, sweet art luxury cakes, kenya wedding cakes, nairobi bakeries, wedding cakes, nairobi cakes' } 
    ]);

    // categories 
    this.http.get<Category[]>("https://sweetartcakes-be-production.up.railway.app/categories/").subscribe(
      data => {
        this.cats = data
        console.log(this.cats)
      }
    ); 

    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.categoriesService.getCategoryProducts(this.id).subscribe(
          datax =>{
            this.catproducts = datax;
            console.log(this.catproducts)
          }
        )
      }
    );
  }

  openWhatsApp(index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.catproducts[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.catproducts[index].price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.sweetartluxurycakes.com/shop/occasionalcakes-details/${this.catproducts[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}
