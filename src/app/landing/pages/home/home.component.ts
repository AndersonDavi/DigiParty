import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MybtnComponent } from "../../../shared/components/btn/btn.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MybtnComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
