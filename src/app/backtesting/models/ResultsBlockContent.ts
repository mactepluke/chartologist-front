import {ResultsBlockItem} from "./ResultsBlockItem";

export class ResultsBlockContent {
  readonly items!: ResultsBlockItem[];

  constructor(items: ResultsBlockItem[]) {
    this.items = items;
  }
}
