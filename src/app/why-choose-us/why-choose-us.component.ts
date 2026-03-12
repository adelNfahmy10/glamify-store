import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  whyItems = [
    {
      icon:'assets/image/why-chooes-us-image/tailored-digital-icon.png',
      alt:'whyUs.items.tailoredTitle',
      title: "whyUs.items.tailoredTitle",
      desc:  "whyUs.items.tailoredDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/creative-design-icon.png',
      alt:'whyUs.items.creativeTitle',
      title: "whyUs.items.creativeTitle",
      desc: "whyUs.items.creativeDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/performance-first-icon.png',
      alt:'whyUs.items.EfficientManagementTitle',
      title: "whyUs.items.EfficientManagementTitle",
      desc: "whyUs.items.EfficientManagementDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/complete-marketing-icon.png',
      alt:'whyUs.items.FullSupportTitle',
      title: "whyUs.items.FullSupportTitle",
      desc: "whyUs.items.FullSupportDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/team-event-icon.png',
      alt:'whyUs.items.EventTeamTitle',
      title: "whyUs.items.EventTeamTitle",
      desc: "whyUs.items.EventTeamDesc"
    }
  ];
}
