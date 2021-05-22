import { Component, OnInit } from '@angular/core';
import {BigNews} from '../big-news';
import {NewsRoomService} from '../news-room.service'


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  img2 = "https://newsroom.pinterest.com/sites/pinnews/files/styles/thumb_square/public/post_thumbnail/2021-05/Thumbnail_primary-image_hero%20copy.png"

  topicLoading:Boolean = true; 
  topicData = {};

  constructor( private newsS :NewsRoomService) { }

  ngOnInit(): void {

    this.newsS.getTopic().then( (res)=>{
      this.topicData  = res
      this.topicLoading = false;
    })



  }

  


  



}
