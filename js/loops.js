
//---------------------------------------------------     ЦЫКЛЫ      -------------------------------------------


//1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99

// function foundSumAndCount(){
//     var counter = 0;
//     var sum = 0;
//     for (let i=1; i< 100; i++){
//         if (i % 2 == 0) {
//             counter++;
//             sum+=i;
//         }        
//     }
//     console.log(counter);
//     console.log(sum);

// }

// foundSumAndCount();


//2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
    // function simlpeNum(n){
    //     mark:
    //     for (var i = 2; i <= n; i++) { 
    //         for (var j = 2; j < i; j++) { 
    //             if (i % j == 0) continue mark; 
    //     }

    //     console.log(i);
    //     }
    // }


    //  simlpeNum(100);


   /* 3.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного 
    подбора и метод бинарного поиска)*/
    // function sqrtOfNum(num) {
    //     var resultNum = Math.sqrt(num);
    //     console.log(Math.floor(resultNum));
    // }
    //бинарный
    /*function binary(num) {
        var res = 0;
        var low = 0;
        var high = num;
        while(low <= high){
            var mid=(low + high) / 2;
            mid = Math.floor(mid);
            if(mid * mid == num){
                return mid;
            }
            if(mid * mid < num){
                low = mid + 1;
                res = mid;
            }
            else{
                high = mid-1;
            }
        }
        return res;
    }
    
    console.log(binary(36));*/
    
    // sqrtOfNum(22);

    /* 4 Вычислить факториал числа n. n! = 1*2*…*n-1*n; */

    /*function Factorial(n) {
        var factorial = 1;
        for (var i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
        
    }

    console.log(Factorial(3));*/

    //5. Посчитать сумму цифр заданного числа
    /* function sumNumber(num) {
             var sum = 0; 
             var tmp = null;
             while (num) {
                tmp = num % 10;
                num = (num - tmp) / 10;
                sum += tmp;
             }
             console.log(sum);
         }
        
         sumNumber(123);*/

    //6.Вывести число, которое является зеркальным отображением
    // последовательности цифр заданного числа, например, задано число 123, вывести 321.
         