import { Component } from '@angular/core';

interface Audience {
  num: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-audience',
  templateUrl: './audience.html',
  styleUrl: './audience.css',
})
export class AudienceComponent {
  readonly audiences: Audience[] = [
    { num: '01', title: 'CIOs & CTOs', text: 'Adopt enterprise AI without replacing existing systems.' },
    { num: '02', title: 'Operations & managers', text: 'Unified visibility and clear, AI-driven insight across tools.' },
    { num: '03', title: 'Teams & employees', text: 'Answers in plain language, drawn from systems they already trust.' },
    { num: '04', title: 'Security teams', text: 'Full control retained; data never leaves your environment.' },
  ];
}
