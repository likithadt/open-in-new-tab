import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummy';
url:string='https://www.reddit.com/api/v1/authorize?client_id=gdlGdITofnrVWw&response_type=code&state=SupBro123&redirect_uri=https://e933c526.ngrok.io/auth/access&duration=permanent&scope=identity';


goToUrl(currentUrl: string): void {
  window.open(currentUrl, "_blank")
}

}
