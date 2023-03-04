import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { quiz } from './quiz/quiz.model';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizz:any = [
    {
      question:'1) Which Instrument Dr.A.P.J Abdul Kalam is playing in the image?<br><br><img src="assets/images/Dr apj abdul kalam.jpg"> ',
      answer:[
        {option:'Nandeshwaram',  correctAnswer:false},
        {option:'Sitar',  correctAnswer:false},
        {option:'Veena',  correctAnswer:true},
        {option:'Violin',  correctAnswer:false},


      ]
    },
    {
      question:'2) In which movie Lata Mangeshkar sing the song ?<br><br><audio controls loop><source src="assets/Media/song Lata Mangeshkar.mp3"></audio> ',
      answer:[
        {option:'Kinara',  correctAnswer:true},
        {option:'Parivaar',  correctAnswer:false},
        {option:'Kuch kuch hota hai',  correctAnswer:false},
        {option:'Dil to pagla hai',  correctAnswer:false},


      ]
    },
    {
      question:'3)Whose tabla can we hear in the famous chasing Basanti sequence in the film "Sholay"?<br><br><video controls class= "tabla"><source src="assets/Media/tabla.mp4"></video>',
      answer:[
        {option:'Pt. Anokhe Lal Mishra',  correctAnswer:false},
        {option:'Ud.Zakeer Hussain',  correctAnswer:false},
        {option:'Pt. Sampta Prasad',  correctAnswer:true},
        {option:'Ud. Ahmed Jan Thirakuwa',  correctAnswer:false},


      ]
    },
    {
      question:'4)With Which song did Lata Mangeshkar do her first Hindi playback?',
      answer:[
        {option:'Natai Chaitrachi Nvalai',  correctAnswer:false},
        {option:'Pa Lagoon Kar Jori Re Shyam',  correctAnswer:true},
        {option:'Janani Janam Bhoomi',  correctAnswer:false},
        {option:'Main Khili Khili Phulvari',  correctAnswer:false},


      ]
    },
    {
      question:'5)Who is the youngest indian singer to win a filmfare award?',
      answer:[
        {option:'Neeti Mohan',  correctAnswer:false},
        {option:'Ankit Tiwari',  correctAnswer:true},
        {option:'Arjit Singh',  correctAnswer:false},
        {option:'Nazia Hussain',  correctAnswer:false},


      ]
    },
    {
      question:'6)When was Lata Mangeshkar awarded the Padma Bhushan?',
      answer:[
        {option:'1969',  correctAnswer:true},
        {option:'1948',  correctAnswer:false},
        {option:'1935',  correctAnswer:false},
        {option:'2001',  correctAnswer:false},


      ]
    },
    {
      question:'7) Which of the following musical instruments is of Indian origin?',
      answer:[
        {option:'Guitar',  correctAnswer:false},
        {option:'Drumps',  correctAnswer:false},
        {option:'Piano',  correctAnswer:false},
        {option:'Flute',  correctAnswer:true},


      ]
    },
    {
      question:'8) In which creative art is Sonal Mansingh distinguished ?',
      answer:[
        {option:'Dance',  correctAnswer:true},
        {option:'Vocal Music(Hindustani)',  correctAnswer:false},
        {option:'Painting',  correctAnswer:false},
        {option:'Instrument Music',  correctAnswer:false},


      ]
    },
    {
      question:'9)The theory of classical music is discussed in ?',
      answer:[
        {option:'Yajurveda',  correctAnswer:false},
        {option:'Samaveda',  correctAnswer:true},
        {option:'Rigveda',  correctAnswer:false},
        {option:'Atharvaveda',  correctAnswer:false},


      ]
    },
    {
      question:'10)Which from the following is a "Classical" dance for?',
      answer:[
        {option:'Bhangra',  correctAnswer:false},
        {option:'Bharatanatyam',  correctAnswer:true},
        {option:'Chhau',  correctAnswer:false},
        {option:'Wangala',  correctAnswer:false},


      ]
    },
    {
      question:'11)Which among the following is a martial dance?',
      answer:[
        {option:'Kathakali',  correctAnswer:false},
        {option:'Bamboo dance in Meghalaya',  correctAnswer:false},
        {option:'Chhau of Mayurbhanj',  correctAnswer:true},
        {option:'Bhangra of Punjab',  correctAnswer:false},


      ]
    },
    {
      question:'12)Rukmini Devi Arundale was associated with which of the following forms of classical dances? ',
      answer:[
        {option:'Khatak',  correctAnswer:false},
        {option:'Kuchipudi',  correctAnswer:false},
        {option:'Odissi',  correctAnswer:false},
        {option:'Bharat Natyam',  correctAnswer:true},


      ]
    },
    {
      question:'13)Which of the following is a folk dance of Rajasthan? ',
      answer:[
        {option:'Garba',  correctAnswer:false},
        {option:'Dandiya',  correctAnswer:false},
        {option:'Ghumar',  correctAnswer:true},
        {option:'Kathak',  correctAnswer:false},


      ]
    },
    {
      question:'14)Shambhu Maharaj excelled in?',
      answer:[
        {option:' Hindustani Classical Music',  correctAnswer:false},
        {option:'Instrumental Music',  correctAnswer:false},
        {option:' Urdu Poetry',  correctAnswer:false},
        {option:'Kathak',  correctAnswer:true},


      ]
    },
    {
      question:'15)With which of the following instruments is Anuradha Pal associated?',
      answer:[
        {option:' Sitar',  correctAnswer:false},
        {option:'Veena',  correctAnswer:false},
        {option:' Mandolin',  correctAnswer:false},
        {option:'Tabla',  correctAnswer:true},


      ]
    },
    
  
  
  
    
    
    ]
     
  constructor() { 
  }
   
  getQuiz(){
    return this.quizz;
  }
 
 
}
