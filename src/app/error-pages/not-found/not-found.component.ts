import { Component, OnInit } from '@angular/core';

/**
 * Component for displaying the "Not Found" page.
 */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  notFoundText: string = "404 Sorry couldn't find it !!!"

  constructor(){}

  ngOnInit(): void {
      
  }
}
