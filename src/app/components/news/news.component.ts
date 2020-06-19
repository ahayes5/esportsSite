import {AfterViewInit, Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})

@Injectable()
export class NewsComponent implements OnInit {
  height: number;
  width: number;
  constructor(private http: HttpClient) {
    this.height = Math.round(screen.height * .8);
    this.width = Math.round(this.height / 2);
    // this.getData();
  }
  getData() {
    this.http.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=OswegoEsports&count=1').subscribe(data => {
      console.log(data);
    });
  }
  ngOnInit(): void {
  }

}
