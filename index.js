//sonlarni musbat butun sonlarga o'zgartirish:

// let numbers = [3.02, -3.65, 5, -9];

// function normaNumber(num){
//     for( let i = 0; i < num.length; i++){
//         if(num[i] < 0){
//             num[i] *= -1;
//            console.log( Math.round(num[i]));
//         }
//         else{
//             num[i]
//             console.log( Math.round(num[i]));
//         }
//     }
// }


// let son = normaNumber(numbers);
// console.log(son);



//constructor function

function car(nom, rang, narx){
    this.name = nom;
    this.color = rang;
    this.price = narx;
}

let car1 = new car('malibu', 'qora', '80 000')
let car2 = new car('mersedez', 'oq', '200 000')

console.log(car1);
console.log(car2);



