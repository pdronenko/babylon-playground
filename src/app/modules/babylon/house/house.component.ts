import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engineService: EngineService) {}

  ngOnInit(): void {
    this.engineService.createScene(this.rendererCanvas);
    this.engineService.animate();
  }
}
