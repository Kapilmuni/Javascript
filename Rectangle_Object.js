var rectangle={
    length:10,
    breadth:20,
    area:function(){
        console.log(this.length*this.breadth);
    },
    perimeter:function(){
        console.log(2*(this.length+this.breadth))
    }
}
rectangle.area()
rectangle.perimeter()