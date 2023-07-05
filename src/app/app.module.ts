import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HomeComponent } from './views/home/home.component';
import { PlainHtmlComponent } from './views/plain-html/plain-html.component';
import { ProductListComponent } from './views/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    PlainHtmlComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
