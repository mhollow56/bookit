import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor() { }
  @Input() book: Book;
  ngOnInit(): void {

  }

}
