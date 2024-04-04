import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'sycm-plan-purchase',
  standalone: true,
  imports: [],
  templateUrl: './plan-purchase.component.html',
  styleUrl: './plan-purchase.component.css'
})
export class PlanPurchaseComponent implements OnInit {
  plan!: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap): void => {
      this.plan = <string>params.get('plan');
    });
  }



}
