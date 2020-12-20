import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  selectedCourse;
  originalTitle;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  @Input() set course(value) {
    if(value) {
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  };
}
