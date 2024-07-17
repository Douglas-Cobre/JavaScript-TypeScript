const a = 2
const b = 4
const c = 0

function conta(a,b,c){
    const delta = (b**2)-4*(a*c)
    const x1 = (-b+Math.sqrt(delta))/2*a
    const x2 = (-b-Math.sqrt(delta))/2*a
    console.log(`Delta = ${delta}`)
    console.log(`X1 = ${x1}`)
    console.log(`X2 = ${x2}`)
}

conta(a,b,c)
