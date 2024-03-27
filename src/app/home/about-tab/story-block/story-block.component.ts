import {Component, inject, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

export interface StoryBlockContent {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  //Best image proportions: height 400 and width 500
  imagePath: string;
}

@Component({
  selector: 'sycm-story-block',
  standalone: true,
  imports: [
    NgOptimizedImage
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
