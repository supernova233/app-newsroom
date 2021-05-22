import { Component, OnInit } from '@angular/core';
import { BigNews } from '../big-news';
import { NewsModel } from '../news-model';
import { NewsRoomService } from '../news-room.service'


@Component({
	selector: 'app-news-feed',
	templateUrl: './news-feed.component.html',
	styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

	img2 = "https://newsroom.pinterest.com/sites/pinnews/files/styles/thumb_square/public/post_thumbnail/2021-05/Thumbnail_primary-image_hero%20copy.png"

	topicLoading: Boolean = true;
	newsLoding:Boolean = true;
	topicData = {};

	newsData = [];
	newsSlice = [];
	pageSize = 8;
	pageStart = 1;
	pageEnd = (this.pageStart + this.pageSize) - 1;

	categoriesOption = [
		{ name: "News", value: "news" },
		{ name: "Ads", value: "ads" },
		{ name: "Company", value: "company" },
		{ name: "Creators", value: "creators" },
		{ name: "Pinterest for Business", value: "PinterestForBusiness" },
		{ name: "Product", value: "product" },
		{ name: "Technology", value: "technology" }
	]

	yearOption = [
		2021,
		2020,
		2019,
		2018,
		2017,
		2016,
		2015,
		2014
	]

	constructor(private newsS: NewsRoomService) { }

	ngOnInit(): void {

		this.newsS.getTopic().then((res) => {
			this.topicData = res
			this.topicLoading = false;
		})

		this.newsS.getAllNews().subscribe((res) => {
			this.newsData = res;
			this.newsSlice = res.slice(this.pageStart - 1, this.pageSize);
			this.newsLoding = false;
		})



	}

	changePage(direction) {

		if (this.pageStart + direction > 1){
			if(this.pageStart + direction < this.newsData.length){
				this.pageStart += direction;
			}	
		}else{
			this.pageStart = 1
		}

		if(this.pageEnd + direction > this.pageSize){
			if(this.pageEnd + direction > this.newsData.length){
				this.pageEnd = this.newsData.length
			}else{
				this.pageEnd += direction
			}

		}else{
			this.pageEnd = this.pageSize
		}
		


		this.newsSlice = this.newsData.slice(this.pageStart - 1, this.pageEnd);

	}











}
