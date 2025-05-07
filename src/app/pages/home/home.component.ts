import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import feather from 'feather-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  // You can add component logic here if needed
  constructor() {}

  ngAfterViewInit() {
    console.log('Inicializando Feather Icons...');
    try {
      feather.replace();
      console.log('Feather Icons inicializados correctamente');
    } catch (error) {
      console.error('Error al inicializar Feather Icons:', error);
    }
  }
}
