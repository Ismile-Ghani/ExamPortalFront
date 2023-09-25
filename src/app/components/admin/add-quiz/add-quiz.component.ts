import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{

  quiz:any = {
    "title" : "",
    "description" : "",
    "maxMarks" :"",
    "noOfQuestions" :"",
    "status" : true,
    "category" :{}
  }
  category:any = [
  ];
  selectedValue: any;

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data)=>{
      this.category = data;

    },
    (error)=>{
      console.log(error)
      this.snack.open("Error in loading data","OK")
    })
  }

  constructor(private quizService: QuizService,private snack:MatSnackBar,private router:Router,private categoryService:CategoryService){}
   
  

  doSubmit(){
    if(this.quiz.title.trim() == '' || this.quiz.title == null){
      this.snack.open("Enter Title" , "OK")
      return;
    }
    if(this.quiz.description.trim() == '' || this.quiz.description == null){
      this.snack.open("Enter Description","OK")
      return;
    }
    if(this.quiz.maxMarks == '' || this.quiz.maxMarks == null){
      this.snack.open("Enter maximum marks","OK")
      return;
    }
    if(this.quiz.noOfQuestions == '' || this.quiz.noOfQuestions == null){
      this.snack.open("Enter number of question","OK")
      return;
    }
    // if(this.quiz.category == '' || this.quiz.category == null){
    //   this.snack.open("Please select category","OK")
    //   return;
    // }

    if(this.quiz.title != null && this.quiz.description != null && this.quiz.maxMarks != null && this.quiz.noOfQuestions != null){
      this.quizService.addQuiz(this.quiz).subscribe((data)=>{

        this.snack.open("Quiz added successfully","OK")
        this.router.navigate(['admin-dashboard/show-quizzes'])
      },
      ()=>{
        this.snack.open("Something went wrong","OK")

      });
    }
  }


}
