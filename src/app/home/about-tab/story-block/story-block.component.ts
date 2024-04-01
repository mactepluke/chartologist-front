import {Component, inject, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {CustomIconComponent} from "../../../core/custom-icon/custom-icon.component";

export interface StoryBlockContent {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  iconName: string;
}

@Component({
  selector: 'sycm-story-block',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    CustomIconComponent
  ],
  templateUrl: './story-block.component.html',
  styleUrl: './story-block.component.css'
})
export class StoryBlockComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  @Input()
  textFirst: boolean = false;
  @Input()
  content!: StoryBlockContent;

  isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }

  ngOnInit(): void {
    if (this.isHandset()) {
      this.textFirst = false;
    }
  }

}
