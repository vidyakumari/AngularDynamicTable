import { Component } from '@angular/core';
import { NewserveService } from './newserve.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicTable';
  constructor(private mydata: NewserveService) {}
  data = this.mydata.getdata();
  head = [];
  ngOnInit(){
    this.head = Object.keys(this.data[0]);
  }
}
