import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {StoryBlockComponent, StoryBlockContent} from "./story-block/story-block.component";
import {MatDivider} from "@angular/material/divider";
import {iconName} from "../../core/constants/icon-names";
import {AnimatedSphereComponent} from "../../animated-sphere/animated-sphere.component";
import {DualTitle, DualTitleComponent} from "../../core/dual-title/dual-title.component";

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
      smallBlackText: 'Your Automated Trading Solution.',
      bigOrangeText: 'Chartologist,',
      firstParagraph: 'Chartologist is an advanced trading robot designed to optimize your trading strategy. Leveraging powerful machine learning algorithms, it continuously analyzes real-time market data to deliver precise buy or sell signals.',
      secondParagraph: 'Don\'t venture in the markets without the finest indicators. ' +
        'With the Help of Chartologist, equip like a pro—then trade like a machine.'
    };

    this.firstBlockContent = {
      title: 'Real-time Signal Alerts.',
      firstParagraph: 'Stay updated with instant notifications whenever a trading opportunity arises.',
      secondParagraph: '',
      thirdParagraph: '',
      iconName: iconName.signals
    };

    this.secondBlockContent = {
      title: 'Automated Trading.',
      firstParagraph: 'Seamlessly integrate with your favorite exchange and let Chartologist execute trades based on your defined strategy.',
      secondParagraph: '',
      thirdParagraph :'',
      iconName: iconName.automation

    };

    this.thirdBlockContent = {
      title: 'Backtesting Capability.',
      firstParagraph: 'Test the effectiveness of your trading strategy with our free Backtesting feature, allowing you to make informed decisions before committing real capital.',
      secondParagraph: '',
      thirdParagraph: '',
      iconName: iconName.backtesting
    };

  }
}
