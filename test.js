// let obj={
//     name:"ram",
//     lastname:"kumar",
//     print:function(){
//         console.log(this.name,this.lastname)
//     }
// }
// obj.print()

// function gr(num){
//     for(i=1;i<=num;i++){
//         if(num%i==0){
//             console.log(i)
//         }
         
        
//     }
// }
// console.log(gr(9))
// function com(num){
//     for(i=1;i<=num;i++){
//         var count=0
//         if(i>1){
//             for(j=1;j<=i;j++){
//                 if(i%j==0){
//                     count++
//                 }
//             }
//             if(count!=2){
//                 console.log(i,"is not prime")
//             }
//         }   
//     }
// }
// com(50)
function yourFirstNested(num) {
    for (var i = 0; i < num; i++) {
        var row = "";
        for (var j = 1; j <= num; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}
yourFirstNested(5)

