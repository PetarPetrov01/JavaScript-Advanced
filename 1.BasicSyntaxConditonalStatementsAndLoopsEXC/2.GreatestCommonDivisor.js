function greatestDivisor(fNum, sNum) {
    while(fNum!==sNum){
        if(fNum>sNum){
            fNum -=sNum
        } else {
            sNum -=fNum
        }
    }
    console.log(sNum);
}
greatestDivisor(2154, 458)

