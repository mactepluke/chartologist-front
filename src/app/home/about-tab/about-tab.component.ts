import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {StoryBlockComponent, StoryBlockContent} from "./story-block/story-block.component";
import {MatDivider} from "@angular/material/divider";
import {iconName} from "../../core/constants/icon-names";
import {AnimatedSphereComponent} from "../../animated-sphere/animated-sphere.component";
import {DualTitle, DualTitleComponent} from "../../dual-title/dual-title.component";

@Component({
  selector: 'sycm-about-tab',
  standalone: true,
  imports: [
    NgOptimizedImage,
    StoryBlockComponent,
    MatDivider,
    AnimatedSphereComponent,
    DualTitleComponent
  ],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTabComponent implements OnInit {
  protected firstBlockContent!: StoryBlockContent;
  protected secondBlockContent!: StoryBlockContent;
  protected thirdBlockContent!: StoryBlockContent;
  protected dualTitle!: DualTitle;

  ngOnInit(): void {

    this.dualTitle = {
      smallBlackText: 'Equip like a pro,',
      bigOrangeText: 'Trade like a machine',
      firstParagraph: 'Chartologist is a trading robot that monitors the market in real time and provides you with the best buy or sell signal.',
      secondParagraph: 'Unlike most trading indicators, it leverages powerful machine learning algorithms that detect recurring patterns in price action.',
    };

    this.firstBlockContent = {
      title: 'Receive real-time signals.',
      firstParagraph: 'Chartologist continuously fetches the latest price action of a variety of financial assets and performs a series of calculations in order to determine the most probable outcome.',
      secondParagraph: 'You get to receive those signals as soon as they are ready and use them to help with your decision making.',
      thirdParagraph: '',
      iconName: iconName.signals
    };

    this.secondBlockContent = {
      title: 'Automate your trading.',
      firstParagraph: 'If you prefer, you can let Chartologist make the trading for you based on these signals.',
      secondParagraph: 'Just connect your account to your favorite exchange, define your starting capital and choose your trading strategy based on your own risk tolerance and expected profits.',
      thirdParagraph :'Then let our algorithms work their magic.',
      iconName: iconName.automation

    };


    this.thirdBlockContent = {
      title: 'Test before you go.',
      firstParagraph: 'Use Chartologist’s free Backtesting feature to simulate automated trading during a past period of time.',
      secondParagraph: 'It will give you a good idea of Chartologist’s predictive performance.',
      thirdParagraph: 'See the results for yourself, and decide if you want to jump in!',
      iconName: iconName.backtesting
    };

  }
}
