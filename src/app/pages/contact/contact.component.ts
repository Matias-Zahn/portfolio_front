import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  private contactService = inject(ContactService);


  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  isLoading = false;
  statusMessage: { type: 'success' | 'error', text: string } | null = null;

  onSubmit(form: NgForm){

    if(form.invalid || this.isLoading) return;

    this.isLoading = true;
    this.statusMessage = null;
    

    this.contactService.sendContactForm(this.formData)
      .subscribe((isSent) => {
        this.isLoading = false;

        if(isSent) {
          this.statusMessage = { type: 'success', text: '¡Mensaje enviado! Te responderé pronto.'}
          form.resetForm();
        }else{
          this.statusMessage = { type: 'error', text: 'Hubo un error al enviar. Intenta más tarde.'}
        }


      })

  }



 }  
