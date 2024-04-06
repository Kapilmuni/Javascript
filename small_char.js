function checkchar(a){
    var smallchar="abcdefghijklmnopqrstuvwxyz";
    for(i=0;i<smallchar.length;i++){
        if(a==smallchar[i]){
            return true;
        }  
    }
    return false
}
console.log(checkchar("d"))