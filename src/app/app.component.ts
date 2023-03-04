import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { quiz } from './quiz/quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz';
 
constructor() { 

}

ngOnInit(): void {
}


}
