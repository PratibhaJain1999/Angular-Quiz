import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from '../quiz.service';
import { quiz } from './quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzz: any = [
    {
      question: '',
      answer: [
        {
          option: '',
          correctAnswer: '',
        }
      ]

    }
  ];
  currentQuiz = 0;
  selectAnswers = false;
  quizList = false;
  StartQuiz = true;
  correctAnswer= 0;
  inCorrectAnswer=0
  results=false
  questions: any;
    

  constructor(private quiizzService: QuizService ) {

    
  }

  ngOnInit(): void {
    this.quizzz = this.quiizzService.getQuiz();


  }
  quizBtn() {
    this.quizList = true
    this.StartQuiz=false
    this.currentQuiz = 0;
    this.correctAnswer=0;
    this.inCorrectAnswer=0;
    this.quizzz.forEach((element:any) => {
      element.optionSelected = '';
      element.optionCorrect = '';
    });
  }
 
  onAnsers(option:any,answer:boolean) {
    this.quizzz[this.currentQuiz].optionSelected = option;
    this.quizzz[this.currentQuiz].optionCorrect = answer;

    
   

    // setTimeout(() => { 
      
    //   this.currentQuiz++;
    //   this.selectAnswers = false;

    // }, 500);
   
  }

    previousQuest()
    {
      this.currentQuiz--;
    }

    nextQuest() {
      this.currentQuiz++;
    }


  showResults(){
    this.quizzz.forEach((element:any) => {
      if(element.optionCorrect) {
        this.correctAnswer++;
        
        }
        else{
          this.inCorrectAnswer++;
        }
        this.answerBtn()
        
    },
    );
    this.results=true
  }
  answerBtn(){
    if(this.correctAnswer >=7){
      Swal.fire(
        "Congratulations! you pass the quiz",
        this.correctAnswer+ ' out of ' + this.quizzz.length,
         "success")

    }
    else{
      Swal.fire(
        "Opps you not pass the quiz",
        this.correctAnswer+ ' out of ' + this.quizzz.length,
         "error")
    }
  }
}