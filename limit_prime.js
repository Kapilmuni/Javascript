function com(num){
    for(i=1;i<=num;i++){
        var count=0
        if(i>1){
            for(j=1;j<=i;j++){
                if(i%j==0){
                    count++
                }
            }
            if(count==2){
                console.log(i,"is prime")
            }
        }   
    }
}
com(50)