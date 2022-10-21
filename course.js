class Course {
  constructor(id = null, name = null, desc = null) {
    this.id = id
    this.name = name
    this.desc = desc
  }

  getInfo(){
    return {
      id: this.id,
      name: this.name,
      desc: this.desc === null ? 'no desc' : this.desc
    }
  }
}

module.exports = Course