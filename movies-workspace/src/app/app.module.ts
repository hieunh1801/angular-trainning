import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MoviesComponent } from "./movies/movies.component";
import { ListMoviesComponent } from './list-movies/list-movies.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, ListMoviesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
