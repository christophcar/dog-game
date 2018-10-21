console.clear()

// create class constructor
class Dog {
  // call functions
  constructor () {
    this.createElement()
    this.changeBackground()
    this.addInteractivity()
    this.addBarkingEvents()
    this.startMoveTimeout()
    this.addEyes()
    this.randomBlinking()
  }
  // create new div with class 'dog' and insert into body
  createElement () {
    this.el = document.createElement('div')
    this.el.classList.add('dog')
    document.body.insertAdjacentElement('beforeend', this.el)
  }
  // change Background of <div>
  changeBackground () {
    // generate random color
    const rand = () => Math.round(Math.random() * 255)
    // place random color as background
    this.el.style.background = `rgb(${rand()}, ${rand()}, ${rand()})`
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

  startMoveTimeout () {
    setTimeout(() => {
      this.move()
      this.startMoveTimeout()
    }, 1000)
  }

  move () {
    this.el.style.right = this.getRandomPosition()
  }

  getRandomPosition () {
    const rand = Math.round(Math.random()*80)-40
    return `${rand}px`
  }

  addEyes () {
  this.newEyes = [new Eye(this.el), new Eye(this.el)]
  }

  randomBlinking () {
  setTimeout( () => {
    this.newEyes.forEach(eye => eye.blink())
    this.randomBlinking()
  }, 1000 + Math.random()*3000)
  }
}

class Eye {
  constructor(target) {
    this.el = document.createElement('div')
    this.el.classList.add('eye')
    target.insertAdjacentElement('afterbegin', this.el)
  }

  blink () {
    this.el.style.transform = 'scale(1,0.1)'
    setTimeout( () => {
      this.el.style.transform = 'scale(1,1)'
    }, 200)
  }
}

// call instances
new Dog()
new Dog()
