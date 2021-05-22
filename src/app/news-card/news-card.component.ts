import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() imgUrl = "https://newsroom.pinterest.com/sites/pinnews/files/styles/thumb_square/public/post_thumbnail/2021-05/Christine-Deputy-Headshot-background_0.jpg?h=d0e75635&itok=ZjzdBMLu";

  constructor() { }

  ngOnInit(): void {
  }

}
