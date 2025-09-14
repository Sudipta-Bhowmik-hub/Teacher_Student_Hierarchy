import React from 'react';
import './index.css';

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass extending Person
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getDetails() {
    return `${super.getDetails()}, Course: ${this.course}`;
  }
}

// Teacher subclass extending Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

// React component to demonstrate inheritance
function App() {
  const student = new Student("Alice", 20, "Computer Science");
  const teacher = new Teacher("Mr. Smith", 45, "Mathematics");

  return (
    <div className="container">
      <h1>Inheritance Example</h1>
      <div className="card">
        <h2>Student Details</h2>
        <p>{student.getDetails()}</p>
      </div>
      <div className="card">
        <h2>Teacher Details</h2>
        <p>{teacher.getDetails()}</p>
      </div>
    </div>
  );
}

export default App;
