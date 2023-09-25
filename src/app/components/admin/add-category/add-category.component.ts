import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  category:any = {
    "title" : "",
    "description" : ""
  }

  constructor(private categoryService: CategoryService,private snack:MatSnackBar,private router:Router){}

  doSubmit(){
    if(this.category.title.trim() == '' || this.category.title == null){
      this.snack.open("Enter Title" , "OK")
      return;
    }
    if(this.category.description.trim() == '' || this.category.description == null){
      this.snack.open("Enter Description","OK")
      return;
    }
    if(this.category.title != null && this.category.description != null){
      this.categoryService.addCategory(this.category).subscribe((data)=>{

        this.snack.open("Category added successfully","OK")
        this.router.navigate(['admin-dashboard/category'])
      },
      ()=>{
        this.snack.open("Something went wrong","OK")

      })
    }
  }

}
