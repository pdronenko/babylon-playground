import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabylonModule } from './modules/babylon/babylon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BabylonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
