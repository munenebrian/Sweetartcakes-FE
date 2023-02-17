import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
        {path:"",component:ContactPageComponent},
        // { path: 'blog-details/:id', component: BlogDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}