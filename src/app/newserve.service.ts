import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserveService {
  constructor() { }
data=[
    {id: '1','first-name': 'vidya','last-name':'kumari','E-mail':'vidz@gmail.com','Designation':'SE','DOB': '22/11/1997'},
    {id: '2','first-name': 'animesh','last-name':'agri','E-mail':'ani@gmail.com','Designation':'SE','DOB': '14/10/1996'},
    {id: '3','first-name': 'garima','last-name':'goswami','E-mail':'grru@gmail.com','Designation':'JE','DOB': '29/01/1998'},
    {id: '4','first-name': 'rahul','last-name':'kandpal','E-mail':'rahul@gmail.com','Designation':'SE','DOB': '10/08/1997'},
    {id: '5','first-name': 'renu','last-name':'kandpal','E-mail':'renu@gmail.com','Designation':'SE','DOB': '17/10/1997'},
  ];
  
  setdata(data){
    data = this.data
  }
  getdata(){
    return this.data;
  }
}
