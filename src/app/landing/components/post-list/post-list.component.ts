import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostUrlComponent } from '../post-url/post-url.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostUrlComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent {
  public posts = [
    {
      id: 1,
      title: 'TWITCH LIVE',
      icon: 'icon-twitch.svg',
      img: 'banner2.png',
    },
    {
      id: 2,
      title: 'DIGIPARTYLEAGUE',
      icon: 'icon-instagram.svg',
      img: 'banner3.png',
    },
  ];
}
