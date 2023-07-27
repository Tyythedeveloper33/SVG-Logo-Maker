const shape = require('./Shape')
class Square extends shape {
    constructor(){
        super('Square')
    }
     //render method for square (svg syntax for circle shape )
     render(shapeColor){
        return  `<rect x="75" y="50" width="50" height="50"fill="${shapeColor}" />`
        //placeholder svg for square
      }
}
module.exports = Square;