import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  public questions = [{question:"Comment s\'inscrire ?" , response: "Je sais pas"},
                      {question:"Qui suis-je ?" , response: "La réponse se trouve dans ton coeur."},
                      {question:"Qui veux un jus d'orange ?" , response: "MOI !!!!"},
                      {question:"Que penses tu du confilt qui oppose Booba et Kaaris" , response: "octogone"},
                      {question:"Comment se nomme une figure a 8 cotés égaux ?" , response: "octogone"},
                      {question:"Comment appelle t'on les habitants des tribus éloignées ?" , response: "octogone"},
                     ];

  constructor() { }

  ngOnInit() {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    if (this.step < this.questions.length)
    this.step++;
  }

  prevStep() {
    if (this.step < this.questions.length)
      this.step--;
  }

}
