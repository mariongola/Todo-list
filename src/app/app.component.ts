import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  {

  tarefa : String = "";
  tarefas : Array<String> = [
    "Tarefa 1",
    "Tarefa 2",
    "Tarefa 3",
    "Tarefa 4",
    "Tarefa 5"
  ];

  adicionar() {
    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }

}


