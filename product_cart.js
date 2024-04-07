var product=["Rice", "Dal", "Salt"];
var quantity=[2, 3, 1];
price=[60, 50, 20];

var data=[];
for(i=0;i<product.length;i++){
    let obj={}
    obj.product=product[i];
    obj.quantity=quantity[i];
    obj.price=price[i];
    data.push(obj)
}
console.log("data = ",data)

let obj2={
    obj:data,
    total:function(){
        let total=0;
        for(i=0;i<this.obj.length;i++){
            total+=this.obj[i].quantity*this.obj[i].price
        }
        console.log("total=",total)
    }
}
obj2.total()