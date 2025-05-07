import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var feather: any;

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    // Initialize Feather Icons after view is initialized
    if (typeof feather !== 'undefined') {
      feather.replace();
    } else {
      console.warn('Feather Icons not found. Make sure the Feather Icons script is loaded.');
    }
  }
}
