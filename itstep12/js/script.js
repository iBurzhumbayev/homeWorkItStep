"use strict";


class User {
  constructor(name, surname){
      this.name = name;
      this.surname = surname;
  }
  getFullName(){
      console.log(`${this.name} ${this.surname}`)
  }
}
let date = new Date();
date = date.getFullYear();

class Student extends User {
  constructor(name, surname, year){
      super(name, surname);
      this.year = year;
  }
  getCourse(){
      if(this.year > (date - 5)){
      console.log((date + 1) - this.year)
      }else console.log(`Graduated from college in ${this.year + 5}`);
  }
}

let user = new User("Ilyas", "B");
let student = new Student("Ilyas", "B", 2019);
let student2 = new Student("Timur", "T", 2021);
let student3 = new Student("Igor", "B", 2015);

student.getFullName();
student.getCourse();
student2.getFullName();
student2.getCourse();
student3.getFullName();
student3.getCourse();

class Rectangle {
  constructor(width, height){
      this.width = width + "px";
      this.height = height + "px";
  }
  setWidth(width){
      this.width = width  + "px";
  }
  getWidth(){
      return this.width;
  }
  setHeight(height){
      this.height = height + "px";
  }
  getHeight(){
      return this.height;
  }
}
let rectangle = new Rectangle(200, 350);
console.log(rectangle);
rectangle.setWidth(500)
rectangle.setHeight(700);
console.log(rectangle);