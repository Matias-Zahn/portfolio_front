import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { ContactFormData, ContactResponse } from '../models/contactForm.interface';





@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/send-email';

  sendContactForm(formData: ContactFormData): Observable<boolean>{
    return this.http.post<ContactResponse>(this.apiUrl, formData).pipe(
      tap(() => console.log('Correo enviado con exito')),
      map(() => true),
      catchError((err) => {
        console.error('Error en el servicio:', err);
        return of(false);
      })
    )

  }


}
