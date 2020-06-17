import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public name: string = "Curtis McLaws";
  public favFlop: {title: string
    , yearReleased: number
    , rating: string
    , imdbLink: string
    , soundtrack: {
      youTubeMusicLink: string
    }
  } = { 
      title: "Solo"
    , yearReleased: 2018
    , rating: "PG-13"
    , imdbLink: "https://www.imdb.com/title/tt3778644/?ref_=nv_sr_srsg_0"
    , soundtrack: {
      youTubeMusicLink: "https://music.youtube.com/playlist?list=OLAK5uy_m-gVRU1K3SzRoZvlehjy-HfK76AhA0jTc"
    }
  }
}