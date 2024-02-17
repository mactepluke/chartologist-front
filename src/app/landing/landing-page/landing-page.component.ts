import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {environment} from "../../../environments/environment";
import {AppIconComponent} from "../../core/app-icon/app-icon.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'sycm-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard,
    TitleCasePipe,
    AppIconComponent,
    MatButton
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './_landing-page.component-theme.scss']
})
export class LandingPageComponent {
  protected readonly environment = environment;
  @Output()
  private hasLanded = new EventEmitter<boolean>();

  protected onGetStared() {
    this.hasLanded.emit(true);
  }
}
