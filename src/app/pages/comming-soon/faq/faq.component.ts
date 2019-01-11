import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  public questions = [
    'Comment s\'inscrire ?',
    'Puis-je annuler une reservation ?',
    'Comment s\'effectue le paiement ?',
    'Quand la plateforme sera-t-elle disponible ?',
    'Puis-je annuler une reservation ?',
    'Comment s\'effectue le paiement ?',
    'Quand la plateforme sera-t-elle disponible ?',
    'Puis-je annuler une reservation ?',
  ];

  constructor() { }

  ngOnInit() {
  }

}
