function modifystring(str){
    let mstr="";
    for(i=0;i<str.length;i++){
        if(str[i]==" "){
            mstr+="-";
        }
        else{
            mstr+=str[i];
        }
        
    }
    return mstr
}
var str="The quick brown fox jumps over the lazy dog";
console.log(modifystring(str))