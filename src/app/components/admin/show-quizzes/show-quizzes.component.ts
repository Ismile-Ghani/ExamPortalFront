import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from 'src/app/service/quiz.service';
import { EditQuizDialogComponent } from '../edit-quiz-dialog/edit-quiz-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ShowQuizQuestionsComponent } from '../show-quiz-questions/show-quiz-questions.component';

@Component({
  selector: 'app-show-quizzes',
  templateUrl: './show-quizzes.component.html',
  styleUrls: ['./show-quizzes.component.css']
})
export class ShowQuizzesComponent implements OnInit{

  displayedColumns:any = ['check']
  dataSource:any = []
  data:any
  selection = new SelectionModel<any>(true, []);
  myjson:any = JSON

  constructor(private quizService:QuizService,public dialog: MatDialog,private snack:MatSnackBar){
    

  }
  
  ngOnInit(): void {

    this.quizService.getQuiz().subscribe(

      (quizData:any)=>{
        this.data = Object.assign(quizData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        
        //this.dataSource = data
        //console.log(this.dataSource)
        this.displayedColumns = this.displayedColumns.concat(Object.keys(quizData[0]))
        
        this.displayedColumns = this.displayedColumns.concat(['Show Questions'],['action']);
        
        console.log(this.displayedColumns)
      },
      (error:any)=>{
        console.log(error)
    
      }
    
      )
    
  }
  capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  EditQuiz(row:any){

    console.log(row)
    const dialogRef = this.dialog.open(EditQuizDialogComponent, {
      data: row,
      height: '400px',
      width: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog returned:' + result.data)
      
    });
  }

  
  DeleteQuiz(row:any,i:number){
    
    Swal.fire({
      icon:'warning',
      title:'Are u sure to delete this Quiz',
      confirmButtonText:'Delete',
      confirmButtonColor:'red',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){

        this.quizService.deleteQuiz(row.qId).subscribe(()=>{
          this.data.splice(i,1)
          this.dataSource = new MatTableDataSource<any>(this.data);
          Swal.fire('Success','Quiz has been deleted successfully','success')
          
        },
        (error)=>{
          console.log(error)
          this.snack.open("Something went wrong","OK")
        });

      }
    })
    

  }

  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    
    return numSelected === numRows;
  }
  removeSelectedRows() {
    
    this.selection.selected.forEach((item:any) => {
      let index: number = this.data.findIndex((d:any) => d === item);
      console.log(this.data.findIndex((d:any) => d === item));
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<any>(this.data);
    });
    this.selection = new SelectionModel<any>(true, []);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :null
      this.dataSource.data.forEach((row:any) => this.selection.select(row));
  }


}
