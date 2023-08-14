let name = {
    fname: "abilash",
    lname: "abi"
}

let fullName = function(area, town){
    console.log(this.fname+ " " +this.lname+ 'from'+ " " +area + " " +town);
}

let name2 = {
    fname: "akash",
    lname: "ak"
}

/* 
call- used to access the function "function borrowing" 
    - pass the argument sepreatly using comma 
    - fist argument will be reference of the variable and then paramenters 

apply - similar to the call but we need to pass the argument as a list
      -  first argument will be the referenc of the variable, second is array list

bind - create the copy of the method and bind with the object and will return the function 
     - return the method that can used later.    

*/

fullName.call(name, "nellithope", "puducherry") 
fullName.apply(name2, ["adiyar", "chennai"])

let printBind = fullName.bind(name2, "Mumbai", "karanataka");
console.log(printBind);
printBind();