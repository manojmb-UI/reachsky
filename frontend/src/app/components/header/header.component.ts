import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    logo = 'assets/images/logo.png';

  links = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    // { label: 'Enroll', href: '#stories' }
  ];
}
