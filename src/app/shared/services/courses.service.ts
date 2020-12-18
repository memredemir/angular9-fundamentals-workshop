import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // the data model, we will use this on http calls
  private model = 'courses';
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Temp Course',
      description: 'Temp Course of Angular 9',
      percentComplete: 22,
      favorite: false
    }
  ];

  constructor(private http: HttpClient) { }

  all() {
    //return this.courses;
    return this.http.get(this.getUrl());
  }

  find(courseId) {

  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlById(course.id), course);
  }

  delete(courseId) {
    return this.http.delete(this.getUrlById(courseId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
