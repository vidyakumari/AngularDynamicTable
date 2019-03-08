import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserveService {
  constructor() { }
  data=[
    {id: '1', 'name': 'vidya', 'DOB': '22/11/1997'},
    {id: '2', 'name': 'animesh', 'DOB': '14/10/1996'},
    { id: '3', 'name': 'garima', 'DOB': '29/01/1998'},
    {id: '4', 'name': 'rahul', 'DOB': '10/08/1997'},
    {id: '5', 'name': 'renu', 'DOB': '17/10/1997'},
  ];
  
  setdata(data){
    data = this.data
  }
  getdata(){
    return this.data;
  }
}
