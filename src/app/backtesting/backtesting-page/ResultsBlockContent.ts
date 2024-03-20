import {ResultsBlockItem} from "./results-block/results-block.component";

export class ResultsBlockContent {
  readonly items!: ResultsBlockItem[];

  constructor(items: ResultsBlockItem[]) {
    this.items = items;
  }
}
