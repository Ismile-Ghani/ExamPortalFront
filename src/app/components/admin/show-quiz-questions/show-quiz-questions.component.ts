import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-quiz-questions',
  templateUrl: './show-quiz-questions.component.html',
  styleUrls: ['./show-quiz-questions.component.css']
})
export class ShowQuizQuestionsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private question:QuestionService){} 
  
  quizData:any
  questionData:any = []
  myjson:any = JSON

  ngOnInit(): void {
    this.quizData = JSON.parse(this.activatedRoute.snapshot.queryParams["q"])
    console.log("quiz data")
    console.log(this.quizData)
    this.question.getQuestions(this.quizData.qId).subscribe((data:any)=>{

      console.log(data)
      this.questionData = data
      console.log('question data')
      console.log(this.questionData)

    },
    (error:any)=>{

      console.log(error)

    })
  }

  delete(quesId:any,i:number){
    alert(i)
    Swal.fire({
      icon:'warning',
      title:'Are u sure to delete this Question',
      confirmButtonText:'Delete',
      confirmButtonColor:'red',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){

        this.question.deleteQuestions(quesId).subscribe(()=>{
          this.questionData.splice(i,1)
          Swal.fire('Success','Question has been deleted successfully','success')
          
        },
        (error)=>{
          console.log(error)
          Swal.fire('Error','Something went wrong','error')
        });

      }
    })
  }

}
