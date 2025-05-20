import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- IMPORTANTE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- IMPORTA FormsModule aqui também
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = ['item 1', 'item 2', 'item 3', 'item 4'];
  public newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
}
