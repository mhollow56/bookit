import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  constructor() { }
  @Input() book: Book;
  // . . .
@Output() bookSelected = new EventEmitter<void>();

// . . .

onBookSelected() {
    // Tell App that someone clicked on a book!
    this.bookSelected.emit();
}
  ngOnInit(): void {

  }

}
