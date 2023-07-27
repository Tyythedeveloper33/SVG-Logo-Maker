const shape = require('./Shape')
class Triangle extends shape {
    constructor(){
        super('triangle')
    }
     //render method for triangle (svg syntax for circle shape )
     render(shapeColor){
        return  `<polygon points ="100, 20 70, 80 130, 80" fill="${shapeColor}" />`
        //placeholder svg for triangle
      }
}
module.exports = Triangle;