import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work';

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  
    //   let req={ 
    //     name:"Sparkle Angel",
    //     age:2,
    //     colour:"blue" }
    // debugger;
    //   this.http.post('https://crudcrud.com/api/c03e2c615d5843a29e6f870f5d72598f/unicorns',req).subscribe(data => {
    //     debugger
    //     let fghgf= data;
      
    // });
  }
}

