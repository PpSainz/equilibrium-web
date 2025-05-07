import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail() {
    const email = 'contacto@equilibrium.com';
    const subject = encodeURIComponent(this.formData.subject);
    const body = encodeURIComponent(
      `Nombre: ${this.formData.name}\n\n` +
      `Correo: ${this.formData.email}\n\n` +
      `Mensaje:\n${this.formData.message}`
    );
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}
