import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('heroSection', { static: true })
  heroSection!: ElementRef;

  heroBg = 'assets/images/hero-bg.jpg';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      });

      tl.from('.hero-eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.6
      })
        .from('.hero-title span', {
          y: 80,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08
        }, '-=0.2')
        .from('.hero-sub', {
          y: 20,
          opacity: 0,
          duration: 0.6
        }, '-=0.4')
        .from('.hero-cta', {
          y: 20,
          opacity: 0,
          duration: 0.6
        }, '-=0.3')
        .from('.hero-stat', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1
        }, '-=0.3');
    }
  }

  stats = [
    {
      value: '100+',
      label: 'Learners trained'
    },
    {
      value: '94%',
      label: 'Placement rate'
    },
    {
      value: '₹4 LPA',
      label: 'Average CTC'
    },
    {
      value: '50+',
      label: 'Hiring partners'
    }
  ];

}