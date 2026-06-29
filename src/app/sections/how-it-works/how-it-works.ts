import { Component, computed, signal } from '@angular/core';

interface Stage {
  title: string;
  weeks: string;
  items: string[];
}

const WINDOW = 4;

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorksComponent {
  /** Ported verbatim from the design's DCLogic.allStages. */
  private readonly allStages: Stage[] = [
    {
      title: 'Onboarding',
      weeks: '1–2 Weeks',
      items: [
        'Discovery workshops',
        'Mapping your systems, goals, and constraints',
        'Access and environment validation',
      ],
    },
    {
      title: 'Analysis',
      weeks: '2–3 Weeks',
      items: [
        'Data and system mapping',
        'Architecture and AI-layer planning',
        'RBAC, security, and compliance prep',
        'KPI and AI scope definition',
      ],
    },
    {
      title: 'Build & Integration',
      weeks: '4–6 Weeks',
      items: [
        'Deploying Cortex in your environment',
        'Integrating legacy and enterprise systems',
        'AI model setup and tuning',
        'QA, testing, and performance validation',
      ],
    },
    {
      title: 'Go-Live & Adoption',
      weeks: '1–2 Weeks',
      items: [
        'Controlled rollout',
        'User training and onboarding',
        'Dashboard setup',
        'Optional chat interface activation',
      ],
    },
    {
      title: 'Monitoring & Optimization',
      weeks: 'Ongoing',
      items: [
        'Continuous AI fine-tuning',
        'Performance monitoring',
        'Security and compliance updates',
        'Adding new systems over time',
      ],
    },
  ];

  private readonly maxStart = Math.max(0, this.allStages.length - WINDOW);
  private readonly start = signal(0);

  readonly visibleStages = computed(() =>
    this.allStages.slice(this.start(), this.start() + WINDOW),
  );
  readonly prevDisabled = computed(() => this.start() <= 0);
  readonly nextDisabled = computed(() => this.start() >= this.maxStart);

  prev(): void {
    this.start.update((s) => Math.max(0, s - 1));
  }

  next(): void {
    this.start.update((s) => Math.min(this.maxStart, s + 1));
  }
}
