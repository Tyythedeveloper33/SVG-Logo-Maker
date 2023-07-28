const shape = require('./Shape')
class Triangle extends shape {
    constructor(){
        super('Triangle')
    }
     //render method for triangle (svg syntax for circle shape )
     render(shapeColor){
        return  `<polygon points ="150, 30 105, 120 195, 120" fill="${shapeColor}" />`
        //placeholder svg for triangle
      }
}
module.exports = Triangle;