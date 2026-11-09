import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Justine Carl C. Tolentino';
  location = 'Angeles City, Pampanga';
  email = 'tolentinojustinetolentino30@gmail.com';
  phone = '09682497702';

  // Expanded to 80+ words to satisfy the profile length requirement
  profile = 'I am an aspiring web developer and system analyst dedicated to building scalable, user-focused web applications. My immediate academic and professional goal is to master modern full-stack development, combining responsive frontend frameworks with robust database backends. I thrive on deconstructing complex requirements into efficient code architectures, designing clean system flows, and crafting intuitive user interfaces. Moving forward, I aim to continuously sharpen my technical skill set, adopt emerging industry tools, and contribute innovative digital solutions that solve real-world problems effectively.';

  // Expanded to 8 relevant skills
  skills = [
    'HTML5 and CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'Angular Framework',
    'Node.js & Express',
    'PHP & MySQL',
    'Relational Database Design',
    'Responsive Web Layouts'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
