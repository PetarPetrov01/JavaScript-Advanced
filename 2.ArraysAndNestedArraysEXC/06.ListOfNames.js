function listOfNames(inputArr){
    inputArr.sort((a,b)=>a.localeCompare(b))
    .forEach((name,num)=>{
        console.log(`${num++ + 1}.${name}`);
    })
}
listOfNames(["John", "Bob", "Christina", "Ema"])