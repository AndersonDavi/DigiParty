import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface postUrl {
  name: string;
  img: string;
  categoria: string;
}

@Component({
  selector: 'app-post-url',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-url.component.html',
  styleUrl: './post-url.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostUrlComponent {
  @Input() icon: string = 'icon-twitch.svg';
  @Input() img: string = 'banner2.png';
  @Input() text: string = 'DIGIPARTYLEAGUE';


  constructor() {}
}
