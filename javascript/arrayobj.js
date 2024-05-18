let arr=[1,2,3,'a',"hello",true]
arr[0]=2
arr.pop()
console.log(arr)
//------obj-----//
let person={
    names:"ram",
    age: 16,
    gender: "male"
};
let{gender,age,names}=person
console.log(names)