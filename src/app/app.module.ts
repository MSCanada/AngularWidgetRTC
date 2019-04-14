import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SampleDirectiveDirective } from './directive/sample-directive.directive';
import {Routes,RouterModule} from '@angular/router';
import { SampleSuhailComponent } from './sample-suhail/sample-suhail.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';



import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuardService} from './auth-guard.service';
const appRoutes:Routes=[
{path : '', canActivate: [AuthGuardService],component: HomeComponentComponent},
{path : 'sample', canActivateChild: [AuthGuardService],component: SampleSuhailComponent,children:[
{path : ':name/edit', component: ChildComponentComponent}


]},
{path : 'sample/:id', component: SampleSuhailComponent},
{path : 'feature', loadChildren:'./feature-component/feature.module#FeatureModule'},
{path : '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SampleDirectiveDirective,
    SampleSuhailComponent,
    HomeComponentComponent,
    ChildComponentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
