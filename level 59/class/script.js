let mathPoint = Number(prompt("enter your math point: "));

let GeographyPoint = Number(prompt("enter your Geography point: "));

let EnglishPoint = Number(prompt("enter your English point: "));

let GRade = (mathPoint + GeographyPoint + EnglishPoint) /3

if(90 <= GRade >= 100) {
    console.log("A")}
else if(70 <= GRade > 80) {
    console.log("B")
}else if(50 <= GRade > 65) {
    console.log("C")
}else if(25 <= GRade > 50) {
    console.log("D")
} else{
    console.log(" წადი ისწავლე და მერე მოდი")
};

