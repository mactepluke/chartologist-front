import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {DualTitle, DualTitleComponent} from "../dual-title/dual-title.component";
import {plans} from "../core/constants/plans";

@Component({
  selector: 'sycm-plan-purchase',
  standalone: true,
  imports: [
    MatStepper,
    MatStep,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatStepperNext,
    MatStepLabel,
    MatStepperPrevious,
    MatLabel,
    DualTitleComponent
  ],
  templateUrl: './plan-purchase.component.html',
  styleUrl: './plan-purchase.component.css'
})
export class PlanPurchaseComponent implements OnInit {
  protected planType!: keyof typeof plans;
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  protected dualTitle!: DualTitle;
  selectedPlan!: any;
  selectedPlanFeatures!: string[];


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap): void => {
      this.planType = params.get('plan') as keyof typeof plans
    });

    this.selectedPlan = plans[this.planType];
    this.selectedPlanFeatures = this.selectedPlan.features;

    this.dualTitle = {
      smallBlackText: 'Complete your order and start using Chartologist today.',
      bigOrangeText: '',
      firstParagraph: '',
      secondParagraph: '',
    };

  }



}
