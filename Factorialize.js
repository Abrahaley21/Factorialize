// Factorialize!

function factorialize (num){
    let factorl=1
    for(let i=1; i<= num; i++){
        factorl*=i
    }
    return factorl
}
console.log(factorialize(10))
