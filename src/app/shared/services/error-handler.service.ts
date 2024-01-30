import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


/**
 * Service for handling HTTP error responses.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';

  constructor(private router: Router) { }

  /**
   * Handles the given HTTP error response.
   * @param error - The HTTP error response.
   */
  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    } else if (error.status === 404) {
      this.handle404Error(error);
    } else {
      this.handleOtherErrors(error);
    }
  }

  /**
   * Handles a 500 HTTP error response.
   * @param error - The HTTP error response.
   */
  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }

  /**
   * Handles a 404 HTTP error response.
   * @param error - The HTTP error response.
   */
  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }

  /**
   * Handles other HTTP error responses.
   * @param error - The HTTP error response.
   */
  private handleOtherErrors = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
  }

  /**
   * Creates an error message from the given HTTP error response.
   * @param error - The HTTP error response.
   */
  private createErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}


