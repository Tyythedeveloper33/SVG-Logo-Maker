class shape {
    constructor(shapetype){
        this.shapetype = shapetype;
    }
// placeholder render method for each shape type (to be implemented in child classes)
render(){
    return '';
}
}
//child classes for each shapetype(circle, triangle, square)

module.exports = shape;