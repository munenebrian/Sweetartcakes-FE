import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavoursComponent } from './flavours.component';
import { HomeflavoursComponent } from './homeflavours/homeflavours.component';

const routes: Routes = [
  {
    path: '',
    component: FlavoursComponent,
    children: [
        {path:"",component: HomeflavoursComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlavoursRoutingModule {}