import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engineService: EngineService) {}

  ngOnInit(): void {
    this.engineService.createScene(this.rendererCanvas);
  }

  ngAfterViewInit(): void {
    this.engineService.animate();
  }
}
