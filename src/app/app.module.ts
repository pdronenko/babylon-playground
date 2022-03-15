import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './core/store';
import { BabylonModule } from './modules/babylon/babylon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BabylonModule, StoreModule.forRoot(reducers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
