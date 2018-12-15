import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ExamService} from '../shared/exam.service';
import {Exam} from '../models/exam.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
  providers: [ExamService]
})
export class ExamsComponent implements OnInit {

  exam: Exam;
  constructor(private examService: ExamService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getExamData(params.get("id"));
    })
    
  }

  getExamData(id:string) {
    this.examService.getExam(id).subscribe((res) => {
      this.exam = res as Exam;
    })
  }

}
