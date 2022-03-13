import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { ArcRotateCamera, Engine, HemisphericLight, Light, Vector3, Mesh, MeshBuilder, Scene } from 'babylonjs';
import { WINDOW } from '../../core/tokens/window.token';

@Injectable({
  providedIn: 'root',
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private camera: ArcRotateCamera;
  private scene: Scene;
  private light: Light;
  private box: Mesh;

  constructor(
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private readonly window: Window
  ) {}

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;
    this.engine = new Engine(this.canvas, true);
    this.scene = new Scene(this.engine);
    this.camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), this.scene);
    this.camera.attachControl(this.canvas, false);
    this.light = new HemisphericLight('light', new Vector3(0, 1, 0), this.scene);
    this.box = MeshBuilder.CreateBox('box', {}, this.scene);
  }

  public animate(): void {
    const rendererLoopCallback = () => {
      this.scene.render();
    };

    if (this.document.readyState !== 'loading') {
      this.engine.runRenderLoop(rendererLoopCallback);
    } else {
      this.window.addEventListener('DOMContentLoaded', () => {
        this.engine.runRenderLoop(rendererLoopCallback);
      });
    }

    this.window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }
}
