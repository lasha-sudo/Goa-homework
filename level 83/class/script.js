//1
let student = [
    {name: 'lasha',
    grade: 91}
]


let check = student.every(sco => sco.grade > 89);

let hasFailing = student.some(score => score.grade < 65)

student.forEach(stud => {
    console.log(`student: ${stud.name}`)
})


let honorRoll = []
student.forEach(grd =>{
    if(grd.grade >90) {
        honorRoll.push(grd)
    }

})

console.log(check)
console.log(hasFailing)
console.log(honorRoll)
