class Student {

  constructor(id, name, year, courses) {
    this.id = id
    this.name = name
    this.year = year
    this.courses = courses
  }

  getName(){
    return this.name
  }

  getYear(){
    return this.year
  }

  getCourses(){
    return this.courses
  }

  getInfo(){
    return {
      id: this.id,
      name: this.name,
      year: this.year,
      courses: this.courses
    }
  }
}

module.exports = Student