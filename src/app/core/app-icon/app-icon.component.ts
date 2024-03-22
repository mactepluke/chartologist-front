import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'sycm-app-icon',
  standalone: true,
  imports: [],
  templateUrl: './app-icon.component.html',
  styleUrl: './app-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppIconComponent {
  @Input() iconName!: string;
}
