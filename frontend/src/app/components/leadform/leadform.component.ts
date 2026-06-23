import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonService } from '../../shared/common.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-lead-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './leadform.component.html',
  styleUrls: ['./leadform.component.css']
})
export class LeadFormComponent implements AfterViewInit {

  @ViewChild('leadSection')
  leadSection!: ElementRef;

  submitting = false;
  courses: string[] = [];



  leadForm!: FormGroup;

  constructor(private fb: FormBuilder, private commonservice: CommonService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.courses = [
      'PG in Digital Marketing',
      'Performance Marketing Pro',
      'SEO & Content Strategy',
      'Not sure — guide me'
    ];
    this.leadForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(160)
        ]
      ],

      phone_number: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9+\-\s]{8,15}$/)
        ]
      ],

      course: ['', Validators.required],

      message: ['', Validators.maxLength(500)]
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.lead-panel', {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.leadSection.nativeElement,
          start: 'top 75%'
        }
      });

      gsap.from('.lead-field', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        scrollTrigger: {
          trigger: this.leadSection.nativeElement,
          start: 'top 70%'
        }
      });
    }
  }

  onSubmit() {
    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }
    this.submitting = true;

    this.commonservice.postLeadForm(this.leadForm.value).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.submitting = false;
        this.leadForm.reset();
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        this.submitting = false;
      }
    });

    this.leadForm.reset();
  }

  get f() {
    return this.leadForm.controls;
  }
}