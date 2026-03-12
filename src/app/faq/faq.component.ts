import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faq = {
    items: [
      {
        question: "faq.",
        answer: "After logging in, click 'Create Event' and fill in the event details like date, location, and tickets."
      },
      {
        question: "How can I share the event with guests?",
        answer: "Once the event is created, share the booking link via email, social media, or messaging apps."
      },
      {
        question: "How do I track bookings?",
        answer: "You can monitor all bookings in real-time through your dashboard for each event."
      },
      {
        question: "How do guests enter the event?",
        answer: "Guests use a QR code generated for their tickets, which is scanned at the event entrance for fast and secure entry."
      }
    ]
  };
}
