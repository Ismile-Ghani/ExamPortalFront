import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor = ClassicEditor

  constructor(private activeRoute:ActivatedRoute,private questionService:QuestionService,private snack:MatSnackBar){}

  quizData:any

  question:any = {
    content:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
    quiz:{

    }
  }

  ngOnInit(): void {

    this.quizData = JSON.parse(this.activeRoute.snapshot.queryParams["q"])
    console.log(this.quizData)
    this.question.quiz = this.quizData
    
  }
  doSubmit(){

    if(this.question.content.trim() == '' || this.question.content.trim() == null){
      this.snack.open("Enter Question Content","OK")
      return;
    }

    if(this.question.option1.trim() == '' || this.question.option1.trim() == null){
      this.snack.open("Enter Question option 1","OK")
      return;
    }

    if(this.question.option2.trim() == '' || this.question.option2.trim() == null){
      this.snack.open("Enter Question option 2","OK")
      return;
    }

    if(this.question.option3.trim()  == '' || this.question.option3.trim()  == null){
      this.snack.open("Enter Question option 3","OK")
      return;
    }

    if(this.question.option4.trim()  == '' || this.question.option4.trim() == null){
      this.snack.open("Enter Question option 4","OK")
      return;
    }

    if(this.question.answer.trim()  == '' || this.question.answer.trim() == null ){
       this.snack.open("Select correct answer","OK")
       return;
     }

    if(this.question != null || this.question == null){
      this.questionService.addQuestions(this.question).subscribe((data)=>{
        console.log(data)
        this.snack.open("Question added successfully","OK")
      },
      (error)=>{
        console.log(error)
        this.snack.open("Something went wrong","OK")
      })
    }

    

    

  }

}
