import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [AppComponent, AppNavComponent, HomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
