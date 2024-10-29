import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mybtn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css',
})
export class MybtnComponent {
  @Input() outline: boolean = false;
  @Input() color: string = 'primary';
  @Input() text: string = 'Click';
}
