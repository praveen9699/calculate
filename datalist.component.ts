import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, } from '@angular/forms';
import { Dataservice } from '../data.service';
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
  headers =["sno","firstName"]
  tasks:any;

  // showmsg:boolean=false;
  firstName: any;
  rows: any;
  Isloading: boolean = false;
  editId: number=0;
  ishide:boolean=true;
  ishiden:boolean=false;
  constructor(private fb: FormBuilder, public http: HttpClient ,private service :Dataservice) { }
  profiles = this.fb.group({
                firstName: [''],
                status:[''],
                createdDate:[''],
                updateDate:['']

                            })
 ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.http.get<any[]>('https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/task')
     .subscribe(data => {
        this.tasks = data;
        this.ishiden =false 
      },
    )
  }
  onSubmit() {
  }

  markAsDone(task: any){
    let data =  {
      name: task.name,
      status: 'done',
    }
    let url = 'https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/task/' + task._id;
    this.http.put(url,data)
    .subscribe((res)=>{
        this.getdata()
      })

  }
  createUser(){
   let data = {
     name: this.profiles.value.firstName,
     status: 'pending',
     created_time: new Date(),
     updated_time: new Date()
    }

    this.http.post('https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/task',data).subscribe(
      (res)=>{
            // this.userData=res.Data
        this.getdata()
        this.profiles.get("firstName")?.setValue("");
        }
        )

      }
      taskremove(id:any){
          if(id !=undefined && id !=null && id !="")
           {
          var url='https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/task/'+id;
          this.http.delete<any>(url).subscribe(data =>{
                    this.getdata();
                       })
           }
          }
          getid(value:any){
            debugger
            if( value !=undefined && value !=null ){
              if( value.name !=undefined && value.name !=null && value.name !=""){
               this.ishide =false
               this.profiles.get("firstName")?.setValue(value.name);
                this.editId = value._id;
             }
            }
          }
          updateUser(){
            debugger
            if(this.editId !=undefined && this.editId != null){
            let data = {
              name: this.profiles.value.firstName,
              status: 'pending',
              created_time: new Date(),
              updated_time: new Date()
             }
             let url = 'https://crudcrud.com/api/3b48a56104cb4970826a37d1c56cb695/task/' +this.editId;
             this.http.put(url,data)
             .subscribe((res)=>{
                 this.getdata()
                this.ishiden =true
                 this.profiles.get("firstName")?.setValue("");
               })
          }
        }
   
  }
  

