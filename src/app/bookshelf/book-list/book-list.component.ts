import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

//export class BookListComponent implements OnInit {

  export class BookListComponent {
    @Output() currentSelectedBook = new EventEmitter<Book>();

    // . . .

    handleBookSelected(book: Book) {
      // console.log('BOOK:', book);
      this.currentSelectedBook.emit(book);
    }
  }


  ngOnInit(); void {


  }

  myBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    )
];

function ngOnInit() {
  throw new Error('Function not implemented.');
}

