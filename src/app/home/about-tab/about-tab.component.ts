import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {StoryBlockComponent, StoryBlockContent} from "./story-block/story-block.component";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'sycm-about-tab',
  standalone: true,
  imports: [
    NgOptimizedImage,
    StoryBlockComponent,
    MatDivider
  ],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTabComponent implements OnInit {
  protected firstBlockContent!: StoryBlockContent;
  protected secondBlockContent!: StoryBlockContent;
  protected thirdBlockContent!: StoryBlockContent;
  protected fourthBlockContent!: StoryBlockContent;


  ngOnInit(): void {
    this.firstBlockContent = {
      title: 'Imagine if you could predict an asset’s price action with enough accuracy.',
      firstParagraph: 'You would be able to buy or sell at the\n' +
        'right time and make a profit.',
      secondParagraph: 'This is the promise of Technical Analysis, a discipline that involves examining charts and making\n' +
        'predictions based on\n' +
        'indicators such as trends, moving averages, support, and resistances.',
      thirdParagraph: 'Unfortunately, the reality is often disappointing.',
      iconName: 'test'
    };

    this.secondBlockContent = {
      title: 'We are more than yet another Technical Analysis algorithm.',
      firstParagraph: 'Instead of simply filtering chart data through a predefined model of arbitrary indicators, we take a different approach.',
      secondParagraph: 'Chartologist analyzes recurring patterns on a more fundamental level and creates predictive strategies',
      thirdParagraph :'This approach is known as machine learning, as the algorithm learns through trial and error to capture the uniqueness\n' +
        'of past price action—everything that sets it apart from purely random data.',
      iconName: 'test'

    };


    this.thirdBlockContent = {
      title: 'We compare powerful predictive patterns against real-time market data.',
      firstParagraph: 'If Chartologist identifies a favorable entry point, it sends notifications to take action.',
      secondParagraph: 'Timing is crucial in trading—being late to buy or sell can result in missed opportunities for profit.\n' +
        'That\'s why sometimes the best strategy is to let our machine trade for you in real-time.',
      thirdParagraph: 'With Chartologist at your service, you have the option to trade manually or let our finely-tuned machine handle it for you. The possibilities are endless.',
      iconName: 'test'
    };

    this.fourthBlockContent = {
      title: 'Test before you take the plunge.',
      firstParagraph: 'As an old proverb wisely states: “trust, but verify.”',
      secondParagraph: 'We encourage you to do just that with us—explore our Backtesting section and see for yourself.',
      thirdParagraph: 'Simulate trusting Chartologist with your funds over a specific period to assess the actual results of following its signals.',
      iconName: 'test'
    };

  }
}
