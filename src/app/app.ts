import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header';
import { HeroComponent } from './sections/hero/hero';
import { ProblemComponent } from './sections/problem/problem';
import { PlatformComponent } from './sections/platform/platform';
import { UseCaseComponent } from './sections/use-case/use-case';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works';
import { SecurityComponent } from './sections/security/security';
import { AudienceComponent } from './sections/audience/audience';
import { CtaComponent } from './sections/cta/cta';
import { FooterComponent } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    ProblemComponent,
    PlatformComponent,
    UseCaseComponent,
    HowItWorksComponent,
    SecurityComponent,
    AudienceComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
