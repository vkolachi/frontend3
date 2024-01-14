// let name={
//     firstname:"venkatesh",
//     lastname:"kolachi",
//     printfullName: function(){
//         console.log(this.firstname+" "+this.lastname);
//     }
// }
// name.printfullName();

// let name2={
//     firstname:"rajesh",
//     lastname:"ramesh",
// }
// name.printfullName.call(name2);

let name={
    firstname:"venkatesh",
    lastname:"kolachi",
    
}
let printfullName= function(hometown,state){ 
    console.log(this.firstname+" "+this.lastname+" is from "+hometown+ " from " + state);
}
printfullName.call(name,"belgaum","karnataka");

let name2={
    firstname:"rajesh",
    lastname:"ramesh",
}
printfullName.call(name2,"delhi","delhi");

printfullName.apply(name,["belgaum","karnataka"]);

printfullName.apply(name2,["delhi","delhi"]);

let printMyName=printfullName.bind(name2,"delhi","delhi");
console.log(printMyName);
printMyName();

