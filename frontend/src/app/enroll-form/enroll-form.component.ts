import {
  Component,
  Input,
  AfterViewInit
} from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Course } from '../../app/course-page/course.model';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonService } from '../shared/common.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-enroll-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css']
})
export class EnrollFormComponent implements AfterViewInit {

  @Input() course!: Course;

  form: any;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
  ) {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    phone_number: ['', [
      Validators.required
    ]],



    message: ['']
  });
  }

  ngAfterViewInit(): void {

    // gsap.from('.enroll-card', {
    //   y: 60,
    //   opacity: 0,
    //   duration: .8,
    //   ease: 'power3.out',
    //   scrollTrigger: {
    //     trigger: '.enroll-card',
    //     start: 'top 50%'
    //   }
    // });
  }

  submit(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const formdata ={
      name: this.form.value.name,
      email: this.form.value.email,
      phone_number: this.form.value.phone_number,
      message: this.form.value.message,
      course: this.course.title
    }

    this.commonService.postLeadForm(formdata).subscribe({
      next: (res) => {
        console.log('Form submitted successfully:', res);
        this.form.reset();
      },
      error: (err) => {
        console.error('Error submitting form:', err);
      }
    });
  }
}