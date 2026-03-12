import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-event-types',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './event-types.component.html',
  styleUrl: './event-types.component.scss'
})
export class EventTypesComponent {

}
