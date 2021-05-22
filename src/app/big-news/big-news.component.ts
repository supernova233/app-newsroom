import { Component, OnInit ,Input } from '@angular/core';
import { BigNews } from '../big-news';

@Component({
  selector: 'app-big-news',
  templateUrl: './big-news.component.html',
  styleUrls: ['./big-news.component.scss']
})
export class BigNewsComponent implements OnInit {

  @Input() newsConten:BigNews;

  constructor() { }

  ngOnInit(): void {
  }

}
