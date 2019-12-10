import { Component, OnInit } from "@angular/core";
import { Movie } from "../../models/movie";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "Iron Man",
    releaseYear: 2018
  };
  constructor() {}

  ngOnInit() {}
}
