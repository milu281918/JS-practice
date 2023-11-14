//problem1
let object={
    milu:98,
    sadiq:90,
    miskath:50
}
for(let i=0;object.keys(object).length;i++){
    console.log(`${object.keys(object)[i]} ${object[object.keys(object)[i]]}`)
}
//problem2
for(let i in object){
    console.log(`${i} ${object[i]}`)
}
//problem3
let number=5;
let n=prompt("enter your number:")
let a="try again";
while(true){
            
            if(number==n){
                console.log(n);
                break;
            }
            else{            
                    console.log(a);   
                    n=prompt("enter your number:")
            }
}
//problem4
let sum=0;
let arr=[1,2,3,4,5];
let mean=(a)=>{
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
mean(arr);
