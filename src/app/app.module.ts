import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';
import { PersonalFinanceComponent } from './personal-finance/personal-finance.component';
import { BlogComponent } from './blog/blog.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ToolsComponent,
    PersonalFinanceComponent,
    BlogComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      {path:'about',component: AboutComponent},
      {path:'tools',component: ToolsComponent},
      {path:'personalFinance',component: PersonalFinanceComponent},
      {path:'blog',component: BlogComponent},
      {path:'DisclaimerComponent',component: DisclaimerComponent},     
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '*', component: HomeComponent },
      { path: '**', component: HomeComponent }   
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
