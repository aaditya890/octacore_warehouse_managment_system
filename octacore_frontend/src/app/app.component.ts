import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'octacore_frontend';

  @ViewChild("hero", { static: true }) heroRef!: ElementRef<HTMLElement>
  heroProgress = 0
  runProgress = 0

  ngOnInit(): void {
    setTimeout(() => this.onScroll(), 0)
  }

  @HostListener("window:scroll")
  onScroll() {
    const hero = this.heroRef?.nativeElement
    if (!hero) return
    const rect = hero.getBoundingClientRect()
    const h = Math.max(rect.height, 1)
    const visible = 1 - Math.min(Math.max((rect.top + h) / (window.innerHeight + h), 0), 1)
    this.heroProgress = Number(visible.toFixed(3))
    const topPortion = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + h), 0), 1)
    this.runProgress = Number(topPortion.toFixed(3))
    document.documentElement.style.setProperty("--hero-progress", `${this.heroProgress}`)
    document.documentElement.style.setProperty("--run-progress", `${this.runProgress}`)
  }

  // Function to calculate transform
  getHeroTransform(): string {
    const x = this.heroProgress * 12;
    const y = Math.sin(this.heroProgress * Math.PI) * 2;
    const scale = 1 + this.heroProgress * 0.04;
    return `translateX(${x}%) translateY(${y}px) scale(${scale})`;
  }
}
