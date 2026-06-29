import { Component } from '@angular/core';

@Component({
  selector: 'app-use-case',
  templateUrl: './use-case.html',
  styleUrl: './use-case.css',
})
export class UseCaseComponent {
  readonly beforeProblems = [
    'Systems are siloed',
    'Reporting is manual',
    'Disconnected workflows and delayed insights',
    'Decision-making is slow',
  ];

  readonly beforeStack = [
    'SAP for finance',
    'Salesforce for CRM',
    'A legacy HR database',
  ];

  readonly afterQueries = [
    'Finance: “Show quarterly operating margin.” → Cortex pulls from SAP',
    'HR: “Open positions vs. hires this year.” → Cortex reads legacy HR data',
    'Answers grounded in your real, governed data',
  ];

  readonly afterOutcomes = [
    'A single AI layer',
    'Instant visibility',
    'Smarter decisions at every level',
  ];
}
