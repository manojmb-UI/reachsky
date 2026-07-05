import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';

import { gsap } from 'gsap';

@Component({
  selector: 'app-indemand-courses',
  imports: [CommonModule],
  templateUrl: './indemand-courses.component.html',
  styleUrl: './indemand-courses.component.css'
})
export class IndemandCoursesComponent implements AfterViewInit {

  @ViewChild('rootSection')
  rootSection!: ElementRef<HTMLElement>;
  constructor(private router: Router) { }

courses = [
  {
    title: 'Digital Marketing Mastery',
    level: 'Beginner → Advanced',
    hours: '120 hrs',
    learners: '40+',
    rating: '4.9',
    desc: 'Master SEO, Google Ads, Meta Ads, Social Media Marketing, Content Marketing, Email Marketing, Analytics, and AI-powered marketing strategies.',
    skills: [
      'SEO',
      'Google Ads',
      'Meta Ads',
      'Social Media Marketing'
    ],
    hot: true,
    slug: 'digital-marketing-mastery'
  },
  {
    title: 'Full Stack Development',
    level: 'Beginner → Advanced',
    hours: '180 hrs',
    learners: '50+',
    rating: '4.9',
    desc: 'Build complete web applications by mastering HTML, CSS, JavaScript, Python, Django, and MySQL through hands-on projects and real-world development.',
    skills: [
      'HTML',
      'CSS',
      'bootstrap',
      'JavaScript',
      'Python',
      'Django',
      'MySQL'
    ],
    hot: true,
    slug: 'full-stack-development'
  }
];

  ngAfterViewInit(): void {

    setTimeout(() => {

      const cards =
        this.rootSection.nativeElement.querySelectorAll('.indemand-card');

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

    }, 100);

  }
  enroll(course: any) {
   this.router.navigate(['/course', course]);
  }
}