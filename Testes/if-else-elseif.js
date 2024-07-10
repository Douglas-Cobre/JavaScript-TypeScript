function hora(h){
    if (h>=6 && h <13){
        console.log('Bom dia');
    }else if(h>=13 && h<18){
        console.log('Boa tarde')
    }else if(h>=18 && h<=24 || h>=0 && h<6){
        console.log('Boa noite')
    }
}
hora(0)


//Teste com if e for 
function conta(n){
    if (n%3==0 && n%5==0) return 'FizzBuzz';
    if (n%3==0) return 'Fizz';
    if (n%5==0) return 'Buzz';
    if (n%3!=0 && n%5!=0) return 'Woody'
}

for (let i=0 ; i<=100 ; i++){
    console.log(i , conta(i));
}