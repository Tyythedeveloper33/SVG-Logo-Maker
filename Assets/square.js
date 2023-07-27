const shape = require('./Shape')
class Square extends shape {
    constructor(){
        super('Square')
    }
     //render method for square (svg syntax for circle shape )
     render(shapeColor){
        return  `<rect x="77" y="25" width="150" height="150" fill="${shapeColor}" />`
        //placeholder svg for square
      }
}
module.exports = Square;