import { Component, OnInit } from '@angular/core';

export interface Movie {
    title: string
  , image: string
  , votes: number
};

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Movie[] = [];

  constructor() {
    this.movies.push ({title: 'The Last Airbender', image: '../../assets/LastAirbender.jpg', votes: 0});
    this.movies.push ({title: 'Hobgoblins', image: '../../assets/Hobgoblins.jpg', votes: 0});
    this.movies.push ({title: 'Jack and Jill', image: '../../assets/JackNJill.jpg', votes: 0});
    this.movies.push ({title: 'The Hobbit', image: '../../assets/Hobbit.jpg', votes: 0});
    this.movies.push ({title: 'Solo', image: '../../assets/Solo.jpg', votes: 0});
   }

  ngOnInit(): void {
  }

  public Vote = (movie) => {movie.votes += 1}
  public UnVote = (movie) => { if(movie.votes > 0) {
    movie.votes -= 1
    }
  }

}
