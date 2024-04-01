import {ChangeDetectionStrategy, Component, Input, numberAttribute, OnInit} from '@angular/core';
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'sycm-custom-icon',
  standalone: true,
  imports: [
    MatIcon,
    AsyncPipe
  ],
  templateUrl: './custom-icon.component.html',
  styleUrl: './custom-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIconComponent implements OnInit {
  @Input()
  iconName!: string;
  @Input({transform: numberAttribute})
  scale: number = 1;
  @Input()
  color: string = '';
  iconLoaded: boolean = false;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      this.iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${this.iconName}.svg`)
    );
    this.iconLoaded = true;
  }


}
