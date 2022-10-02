import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class Dataservice{
    constructor(private http:HttpClient){

    }
    getData (req:any){
    // let req={ 
    //     name:"Sparkle Angel",
    //     age:2,
    //     colour:"blue" }
    // debugger;
    //   return this.http.post('https://crudcrud.com/api/69ca75137c8145b48fec96d03cd2ac22/task',req)   
    //  }

}}