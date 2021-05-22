import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagi-btn',
  templateUrl: './pagi-btn.component.html',
  styleUrls: ['./pagi-btn.component.scss']
})
export class PagiBtnComponent implements OnInit {

  @Input() length;
  @Input() pageSize = 4;
  @Input() pageStart = 1;

  @Input() pageEnd ;

  @Output() onPageChange = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }


  prevpage(){
    this.onPageChange.emit(0 - this.pageSize)
  }

  nextpage(){
    this.onPageChange.emit(0 + this.pageSize)
  }

}
