const shape = require('./Shape')

class Circle extends shape {
    constructor(){
        super('Circle');
    }
    //render method for circle (svg syntax for circle shape )
    render(shapeColor){
      return  `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
      //placeholder svg for circle
    }
}
module.exports = Circle;