import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'sycm-dashboard-panel',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-panel.component.html',
  styleUrl: './dashboard-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPanelComponent {

}
