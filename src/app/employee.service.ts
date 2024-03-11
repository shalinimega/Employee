import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './EmployeeEntity';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url="http://localhost:8080/findaa";
  constructor(private http:HttpClient) { }

  showAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }


  
}
