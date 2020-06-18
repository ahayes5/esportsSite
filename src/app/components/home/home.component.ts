import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  styleImageDiv(imageUrl: string): object {
    return {
      height: '100px',
      'background-position': 'center',
      'background-size': 'cover',
      'min-height': '30vh',
      width: '100%',
      padding: '0',
      backgroundImage: `url(${imageUrl})`
    };
  }

}
