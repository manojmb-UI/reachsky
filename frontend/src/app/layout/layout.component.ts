import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { LeadFormComponent } from '../components/leadform/leadform.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IndemandCoursesComponent } from '../indemand-courses/indemand-courses.component';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent, HomeComponent, LeadFormComponent, FooterComponent, IndemandCoursesComponent, HomeLayoutComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  users: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getUserInfo().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
