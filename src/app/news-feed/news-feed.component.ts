import { Component, OnInit } from '@angular/core';
import {BigNews} from '../big-news'


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  img2 = "https://newsroom.pinterest.com/sites/pinnews/files/styles/thumb_square/public/post_thumbnail/2021-05/Thumbnail_primary-image_hero%20copy.png"

  topicDataModel = {}

  constructor() { }

  ngOnInit(): void {
  }

  


  



}
