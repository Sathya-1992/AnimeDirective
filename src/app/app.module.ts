import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeDirective } from './anime.directive';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeDirective,
    InputComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
