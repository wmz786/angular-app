import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1>Hello world!</h1>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
