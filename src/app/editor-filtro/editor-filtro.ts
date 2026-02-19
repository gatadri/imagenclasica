import { Component, computed, Signal } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo = Signal(100);
  contraste = Signal(100);
  blur = Signal(0);
  filtro = computed(() => {
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px)`;
  })
  actualizar = (prop: string, evento: Event){
const valor = (evento.target as HTMLInputElement).value; //recicir una propiedad y un evento
if (prop == 'brillo') this.brillo.set(+valor);
if (prop == 'contraste') this.contraste.set(+valor);
if (prop == 'blur') this.blur.set(+valor); //valores obtenidos incrementando
}
}
