import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.selectedCourse = emptyCourse;
  }

  selectHandler(course) {
    this.selectedCourse = course;
  }

  deleteCourse(id) {
    this.coursesService.delete(id).subscribe((result) => this.refreshCourses());
  }

  cancel() {
    this.resetSelectedCourse();
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService
        .update(course)
        .subscribe((result) => this.refreshCourses());
    } else {
      this.coursesService
        .create(course)
        .subscribe((result) => this.refreshCourses());
    }
  }

  loadCourses() {
    this.coursesService.all().subscribe((courses) => {
      this.courses = courses;
    });
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }
}
