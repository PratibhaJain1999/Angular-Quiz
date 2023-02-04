export class quiz{
    question: string;
    answer:{option:string, correctAnswer:boolean} [];
    constructor(ques:string,ans:{option:string,correctAnswer:boolean}[]){
        this.question=ques,
        this.answer=ans
    }
}