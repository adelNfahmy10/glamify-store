import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureComponent implements OnInit{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  isBrowser = false;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this._PLATFORM_ID);
  }

  features = [
    {
      id: 1,
      image: 'assets/image/feature-image/technical-icon.png',
      title: 'features.items.supportTitle',
      description: 'features.items.supportDesc'
    },
    {
      id: 2,
      image: 'assets/image/feature-image/social-icon.png',
      title: 'features.items.socialTitle',
      description: 'features.items.socialDesc'
    },
    {
      id: 3,
      image: 'assets/image/feature-image/motion-icon.png',
      title: 'features.items.motionTitle',
      description: 'features.items.motionDesc'
    },
    {
      id: 4,
      image: 'assets/image/feature-image/graphic-icon.png',
      title: 'features.items.designTitle',
      description: 'features.items.designDesc'
    },
    {
      id: 5,
      image: 'assets/image/feature-image/web-icon.png',
      title: 'features.items.webTitle',
      description: 'features.items.webDesc'
    },
  ];
}
