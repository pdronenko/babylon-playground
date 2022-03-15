import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store';
import { loading } from '../../../core/store/loading.actions';
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

  constructor(private engineService: EngineService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('loading').subscribe((state) => {
      console.log('state', state);
    })
    this.engineService.createScene(this.rendererCanvas);
  }

  ngAfterViewInit(): void {
    this.rendererCanvas.nativeElement?.focus();
    this.engineService.animate();
    this.store.dispatch(loading());
  }
}
