
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {Routes,RouterModule} from '@angular/router';



import { FeatureComponentComponent } from './feature-component.component';
const appRoutes:Routes=[

{path : '', component: FeatureComponentComponent},


];

@NgModule({
  declarations: [
  
    FeatureComponentComponent
  ],
  imports: [
  SharedModule,
   RouterModule.forChild(appRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class FeatureModule { }
