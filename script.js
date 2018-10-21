console.clear()

class Dog {
  constructor () {
    // call function in constructor with this
    this.createElement()
    this.changeBackground()
    this.addInteractivity()
    this.addBarkingEvents()
  }
  // save new element into this not const
  createElement () {
    this.el = document.createElement('div')
    this.el.classList.add('dog')
    document.body.insertAdjacentElement('beforeend', this.el)
  }
  // we have to make function to create random nr. because we render new number 3 times.
  // some action needs to take place here
  changeBackground () {
    const rand = () => Math.round(Math.random()* 255)
    this.el.style.background = `rgb(${rand()},${rand()},${rand()})`
  }
  addInteractivity () {
    this.el.addEventListener('click', () => {
      this.changeBackground()
    })
  }
  addBarkingEvents () {
    this.el.addEventListener('mouseover', () => {
      this.startBarking()
    })
    this.el.addEventListener('mouseout', () => {
      this.stopBarking()
    })
  }
  startBarking () {
    this.startBark = document.createElement('div')
    this.startBark.classList.add('bark')
    this.startBark.textContent = 'WAU WAU!'
    this.el.insertAdjacentElement('afterbegin', this.startBark)
  }
  stopBarking () {
    this.startBark.remove()
  }



}

new Dog()
new Dog()
new Dog()
