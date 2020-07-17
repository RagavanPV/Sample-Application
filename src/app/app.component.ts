import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { RestEndpoints } from './constants/rest-endpoints';
interface User {
  id: number;
  name: string;
}

const USERS: User[] = [
  {
    id: 1,
    name: 'Russia',
  },
  {
    id: 2,
    name: 'Canada',
  },
  {
    id: 3,
    name: 'United States',
  },
  {
    id: 4,
    name: 'China',
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpService) {}
  objects: User[];

  ngOnInit() {
    this.http.get(RestEndpoints.GET_USERS).subscribe((response) => {
      this.objects = response.body;
    });
  }
}
