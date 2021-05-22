import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewsRoomService } from '../news-room.service';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  disabled: boolean = false;
  sending: boolean = false;

  keyForm = this.fb.group({
    accessKey: ['']
  })

  newsForm = this.fb.group({
    imgUrl: [''],
    date: [''],
    title: [''],
    link: ['']
  })


  constructor(private fb: FormBuilder, private newsS: NewsRoomService) { }

  ngOnInit(): void {
  }

  sendData() {
    
    this.sending = true;
    this.newsS.sendData({ key: this.keyForm.value.accessKey, data: this.newsForm.value })
    console.log("Sending . . .");

  }

}
