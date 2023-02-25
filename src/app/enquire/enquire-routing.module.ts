import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquireComponent } from './enquire.component';
import { HomeenquireComponent } from './homeenquire/homeenquire.component';

const routes: Routes = [
  {
    path: '',
    component: EnquireComponent,
    children: [
        {path:"",component: HomeenquireComponent }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquireRoutingModule {}