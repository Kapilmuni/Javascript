let obj={
    name:"ram",
    lastname:"kumar",
    print:function(){
        console.log(this.name,this.lastname)
    }
}
obj.print()

function gr(num){
    for(i=1;i<=num;i++){
        if(num%i==0){
            console.log(i)
        }
         
        
    }
}
console.log(gr(9))