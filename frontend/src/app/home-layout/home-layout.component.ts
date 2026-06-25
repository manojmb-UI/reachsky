import { Component } from '@angular/core';
import { LeadFormComponent } from '../components/leadform/leadform.component';
import { IndemandCoursesComponent } from '../indemand-courses/indemand-courses.component';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-home-layout',
  imports: [HomeComponent, IndemandCoursesComponent, LeadFormComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
