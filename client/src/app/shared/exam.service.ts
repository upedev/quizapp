import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Exam} from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  readonly baseUrl = 'http://localhost:8080/exam/';
  constructor(private http: HttpClient) { }

  getExam(id:string) {
    return this.http.get(this.baseUrl + id);
  }
}
