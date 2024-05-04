import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("myCanvas", { static: false }) canvas!: ElementRef;
  ctx!: CanvasRenderingContext2D | null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.ctx = this.canvas.nativeElement.getContext("2d");
    if (this.ctx != null) {
      const ctx = this.ctx;
      setInterval(() => {
        ctx.reset();
        for (let i = 0; i < 2000; i += 100) {
          for (let j = 0; j < 2000; j += 100) {
            ctx.beginPath();
            ctx.arc(70 + i, 45 + j, 40, 0, 2 * Math.PI);

            /*ctx.fillStyle = `rgb(
              ${Math.floor(Math.random() * 255)}
              ${Math.floor(Math.random() * 255)}
              ${Math.floor(Math.random() * 255)})`;*/

            if (Math.random() * 10 < 5) {
              ctx.fill();
            } else {
              ctx.stroke();
            }
          }
        }
      }, 500);
    }
  }
}
