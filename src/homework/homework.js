//---Asal Sayı Bulma---\\
let findPrimeNumber = (...numbers) => {
    let primeNumberInformation = numbers.map(function(number) {
        for (let i = 2; i < number; i++) {
            if(number % i == 0){
                return number + " Asal sayı değildir!"
            }
        }
        return number + " Asal sayıdır"
    })

    return primeNumberInformation
}

console.log(findPrimeNumber(22, 7, 10, 83, 97))

//---1000 'e kadar ki asal sayılar---\\

let findPrimeNumberUpToNumbers = (number) => {
    let numbers = []
    for (let i = 2; i < number; i++) {
        numbers[i - 2] = i
    } 

    let primeNumbers = numbers.filter(function(number) {
        let primeControl = 0

        findPrimeNumber(number) ==  `${number} Asal sayıdır` ? primeControl++ : undefined

        return primeControl != 0 ? number : undefined
    })

    return primeNumbers
}

console.log(findPrimeNumberUpToNumbers(1000))

//---Kendisi Hariç Pozitif Bölenleri Bulma---\\\

let findPositiveDividingNumbersTotal = (number) => {
    let total = 0
    for (let i = 0; i < number; i++) {
        if(number % i == 0) {
            total = total + i
        }
    }
    return total
}

//---Arkadaş Sayılar---\\

let findCountFriend = (number1, number2) => {
    let total1 = 0, total2 = 0
    
    total1 = findPositiveDividingNumbersTotal(number1)
    total2 = findPositiveDividingNumbersTotal(number2)

    if(total1 == number2 && total2 == number1){
        return `${number1} ve ${number2} Arkadaş sayıdır`
    }else {
        return `${number1} ve ${number2} Arkadaş sayı değildir`
    }

}

console.log(findCountFriend(1184,1210))

//---1000 'e kadar ki mükemmel sayılar---\\

let findPerfectNumberUpToNumbers = (number) => {
    let numbers = []
    for (let i = 2; i < number; i++) {
        numbers[i - 2] = i
    }

    let perfectNumbers = numbers.filter(function(number){
        let perfectNumberControl = 0

        findPositiveDividingNumbersTotal(number) == number ? perfectNumberControl++ : undefined
        return perfectNumberControl !=0 ? number : undefined
    })
    return perfectNumbers
}

console.log(findPerfectNumberUpToNumbers(1000))
