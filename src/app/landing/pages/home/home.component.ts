import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MybtnComponent } from '../../../shared/components/btn/btn.component';
import { PostListComponent } from '../../components/post-list/post-list.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostListComponent, MybtnComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
