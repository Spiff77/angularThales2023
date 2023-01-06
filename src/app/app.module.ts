import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnknowComponent } from './unknow/unknow.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductAddComponent} from './product-add/product-add.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: UnknowComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    UnknowComponent,
    ProductDetailComponent,
    ProductAddComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
