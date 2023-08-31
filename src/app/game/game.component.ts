import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor() {}
  ngOnInit() {}

  onEleccionJugador(choice: string) {
    this.eleccionComputador = Math.floor(Math.random() * 3);
    this.showResult();
  }
  showResult() {
    let winner: string;

    switch (this.eleccionComputador) {
      case 0:
        if (choice === piedra) {
          winner = 'empate';
        } else if (choice === papel) {
          winner = 'computador';
        } else {
          winner = 'jugador';
        }
        break;
      case 1:
        if (choice === papel) {
          winner = 'empate';
        } else if (choice === rock) {
          winner = 'computador';
        } else {
          winner = 'jugador';
        }
        break;
      case 2:
        if (choice === tijera) {
          winner = 'empate';
        } else if (choice === papel) {
          winner = 'computador';
        } else {
          winner = 'jugador';
        }
        break;
    }
    this.resultado.textContent = 'El ganador es: ${winner} ';
  }
}
