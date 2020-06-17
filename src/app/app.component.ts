import { Component } from '@angular/core';

export interface Movie {title: string
  , yearReleased: number
  , rating: string
  , imdbLink: string
  , soundtrack: {
    youTubeMusicLink: string
  }
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  public favFlop: Movie =  { 
      title: "Solo"
    , yearReleased: 2018
    , rating: "PG-13"
    , imdbLink: "https://www.imdb.com/title/tt3778644/?ref_=nv_sr_srsg_0"
    , soundtrack: {
      youTubeMusicLink: "https://music.youtube.com/playlist?list=OLAK5uy_m-gVRU1K3SzRoZvlehjy-HfK76AhA0jTc"
    }
  }

  public onCheckout = (event: any) => console.log('check out', event);
  
  public textClick = (event: any) => console.log('data clicked:', event.target.innerText);

  public titleHover = (message: string) => console.log(message + ' the title:', this.favFlop.title);
}