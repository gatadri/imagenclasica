import { Component , signal,computed} from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo= signal(100);
  contraste = signal(100);
  blur = signal(0);
  grayscale = signal(0);

  filtroScss = computed(()=>{
  return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px) grayscale(${this.grayscale()}%)`;
})

  
  aplicarBlancoNegro() {
  this.grayscale.set(100);
  this.blur.set(1);
  this.brillo.set(80);
  this.contraste.set(84);
}

quitarBlancoNegro() {
  this.grayscale.set(0);
  this.blur.set(0);
  this.brillo.set(100);
  this.contraste.set(100);
}

}