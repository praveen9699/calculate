import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
 count=0;
  constructor(public http: HttpClient) { }
  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    // debugger
    this.http.get<any>('https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/counter')
     .subscribe( (res)=>{
      //  debugger
      this.count=res[0].count;
      // debugger
    })

  }
  Increment(){
    this.count = this.count+1;
    let req={
      count: this.count
    }
    // debugger
    this.http.put<any>('https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/counter/62bd82886f047803e8aeac76',req)
     .subscribe((res)=>{
      // this.count=this.count;
    })

     
    // this.getdata();
   
  }
  Decrement(){
    this.count = this.count-1;
    let req={
      count: this.count,
    }
    this.http.put<any>('https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/counter/62bd82886f047803e8aeac76',req)
     .subscribe((res)=>{
      // this.count=this.count;
      
    })
  }

}