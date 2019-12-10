import { Component, OnInit } from "@angular/core";
import { fakeMovies } from "../fakeMovies";
import { Movie } from "src/models/movie";
@Component({
  selector: "app-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.scss"]
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[] = fakeMovies;
  constructor() {}

  ngOnInit() {}
}
