import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {StoryBlockComponent, StoryBlockContent} from "./story-block/story-block.component";
import {MatDivider} from "@angular/material/divider";
import {iconName} from "../../core/constants/icon-names";
import {AnimatedSphereComponent} from "../../animated-sphere/animated-sphere.component";

@Component({
  selector: 'sycm-about-tab',
  standalone: true,
  imports: [
    NgOptimizedImage,
    StoryBlockComponent,
    MatDivider,
    AnimatedSphereComponent
  ],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTabComponent implements OnInit {
  protected firstBlockContent!: StoryBlockContent;
  protected secondBlockContent!: StoryBlockContent;
  protected thirdBlockContent!: StoryBlockContent;

  ngOnInit(): void {
    this.firstBlockContent = {
      title: 'Receive real-time signals.',
      firstParagraph: 'Chartologist continuously fetches the latest price action of a variety of financial assets and performs a series of calculations in order to determine the most probable outcome.',
      secondParagraph: 'You get to receive those signals as soon as they are ready and use them to help with your decision making.',
      thirdParagraph: '',
      iconName: iconName.signals
    };

    this.secondBlockContent = {
      title: 'Automate your trading.',
      firstParagraph: 'I f you prefer, you can let Chartologist make the trading for you based these signals.',
      secondParagraph: 'Just connect your favorite exchange’s API key, define your starting capital and choose your trading strategy based on your own risk tolerance and expected profits.',
      thirdParagraph :'Then let our algorithms work their magic.',
      iconName: iconName.automation

    };


    this.thirdBlockContent = {
      title: 'Test before you go.',
      firstParagraph: 'Use Chartologist’s Backtesting feature to simulate automated trading during a past period of time and see the results for yourself.',
      secondParagraph: 'It will give you a good idea of Chartologist’s predictive performance.',
      thirdParagraph: '',
      iconName: iconName.backtesting
    };

  }
}
