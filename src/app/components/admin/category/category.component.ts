import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/service/category.service';
import { EditDialogOverviewComponent } from '../edit-dialog-overview/edit-dialog-overview.component';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns:any = null
  dataSource:any = []
  data:any =[]
  

  constructor(private categoryService:CategoryService,public dialog: MatDialog,private snack:MatSnackBar,private router:Router){
    

  }
  
  
  ngOnInit(): void {

    this.categoryService.getCategory().subscribe(

      (categoryData:any)=>{
        
        //this.dataSource = data
        //this.displayedColumns = Object.keys(data)
        //console.log(data)
        //console.log('keys ' +Object.keys(data[0]).values)
        //console.log(this.dataSource)
        this.data = Object.assign(categoryData);
        console.log(this.data)
        this.dataSource = new MatTableDataSource(this.data);
        console.log(this.dataSource.data)
        this.displayedColumns = Object.keys(categoryData[0])
        console.log("columns: " + this.displayedColumns)
        this.displayedColumns = this.displayedColumns.concat(['action']);
    
      },
      (error)=>{
        console.log(error)
    
      }
    
      )
    
  }
  capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  EditCategory(row:any,i:number){

    console.log(row)
    const dialogRef = this.dialog.open(EditDialogOverviewComponent, {
      data: {row:row,id:i},
      height: '400px',
      width: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("in category component")
      console.log(result.formData.row.title)
      if(result != null || result != ''){
        this.categoryService.updateCategory(result.formData.row).subscribe((data:any)=>{
          this.snack.open("Category has been Updated","OK")
          this.router.navigate(['admin-dashboard/category'])
          },
          ()=>{
    
          this.snack.open("Something went wrong","Ok")
          this.router.navigate(['admin-dashboard/category'])
            
    
          })
      }
      
      
      
    });
    
  }

  
  DeleteCategory(row:any,i:number){
    Swal.fire({
      icon:'warning',
      title:'Are u sure to delete this Category',
      confirmButtonText:'Delete',
      confirmButtonColor:'red',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){

        this.categoryService.deleteCategory(row.cId).subscribe(()=>{
          this.data.splice(i,1)
          this.dataSource = new MatTableDataSource(this.data);
          Swal.fire('Success','Category has been deleted successfully','success')
          
        },
        (error)=>{
          console.log(error)
          Swal.fire('Error','Something went wrong','error')
        });

      }
    })

    
  }

  

  
  

}
