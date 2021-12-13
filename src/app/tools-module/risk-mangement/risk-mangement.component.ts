import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-mangement',
  templateUrl: './risk-mangement.component.html',
  styleUrls: ['./risk-mangement.component.scss']
})
export class RiskMangementComponent implements OnInit {

  /*
  * future calculation
  */

  lotSize: number = 100;
  riskAmount: number = 0;
  riskATR: number = 0;
  pipRate: number = 0;
  postionToEnter: number = 0;
  lotsToEnter: number = 0;
  ATRvalue: number = 0;
  actualRisk: number = 0;

  /**
   * option calculation
   */

  option_riskAmount: number = 0;
  option_buy: number = 0;
  opton_delta: number = 0.4;
  option_ATR: number = 0;
  option_takeProfit: number = 0;
  option_stoploss: number = 0;
  option_riskATRPips: number = 0;

  option_pipRate: number = 0;
  option_lotsToEnter: number = 0;
  option_positionSizeToEnter: number = 0;
  option_ActualRisk: number = 0;

  calculate() {
    this.riskATR = 1.5 * this.ATRvalue;
    this.pipRate = this.riskAmount / this.riskATR;
    this.lotsToEnter = this.pipRate / this.lotSize;
    this.postionToEnter = Math.floor(this.lotsToEnter);
    this.actualRisk = this.postionToEnter * this.lotSize * this.riskATR;
  }

  calculateOption() {
    this.option_ATR = this.ATRvalue * this.opton_delta;
    this.option_riskATRPips = this.option_ATR * 1.5;
    this.option_stoploss = this.option_buy - this.option_riskATRPips;
    this.option_takeProfit = this.option_buy + this.option_ATR;
    this.option_pipRate = this.option_riskAmount / this.option_riskATRPips;
    this.option_positionSizeToEnter = this.option_pipRate / this.lotSize;
    this.option_lotsToEnter = Math.floor(this.option_positionSizeToEnter);
    this.option_ActualRisk =
      this.option_lotsToEnter * this.lotSize * this.option_riskATRPips;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
