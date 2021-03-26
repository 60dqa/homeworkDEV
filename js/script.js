// 1.Если а – четное посчитать а*б, иначе а+б

        // var a;
        // var b;
        // var c;
        // var result;


        // function foundA(a,b) {
        //     if (a % 2 == 0){
        //         result = a * b ;
        //     }
        //     else {
        //         result = a + b;
        //     }
        //     console.log(result);
        // }   

        // foundA(6,12);
//-----------------------------------------------------------------------------------------------------------

// 2.Определить какой четверти принадлежит точка с координатами (х,у)

    // var x;
    // var y;

    // function foundQuarter(x , y) {
    //     if (x < 0 && y < 0) {
    //         console.log("III - quarter");
    //     }
    //     else if (x > 0 && y > 0) {
    //         console.log("II - quarter");
    //     }
    //     else if (x > 0 && y < 0) {
    //         console.log("IV - quarter");
    //     }
    //     else if (x < 0 && y > 0) {
    //         console.log("I - quarter");
    //     }
    //     else {
    //         console.log("not found any quarter");
    //     }
        
    // }

    // foundQuarter(0,4)
//-------------------------------------------------------------------------------------------------------------
    // 3. Найти суммы только положительных из трех чисел

    // function sumNumbersOverZero (a,b,c) {
    //     if ((a < 0) || (b < 0) || (c < 0)) {
    //         console.log("one of number is wrong");
    //     }
    //     else {
    //         result = a + b + c;
    //         console.log(result);
    //     }
    // }

    // sumNumbersOverZero(-1,2,0)
//-------------------------------------------------------------------------------------------------------------


    // 4.Посчитать выражение (макс(а*б*с, а+б+с))+3
    // условие!!!!!!
    // 
//-------------------------------------------------------------------------------------------------------------

    //5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил

    // var mark;
    // function rating(mark) {
    //     if (mark <=19) {
    //         console.log("F");
    //     }
    //     else if (mark >= 20 && mark <=39 ) { 
    //         console.log("E");
    //     }
    //     else if (mark >= 40 && mark <=59 ) { 
    //         console.log("D");
    //     }
    //     else if (mark >= 60 && mark <=74 ) { 
    //         console.log("C");
    //     }
    //     else if (mark >= 75 && mark <=89 ) { 
    //         console.log("B");
    //     }
    //     else {
    //         console.log("A");
    //     }
    // }

    // rating(12);


//-------------------------------------------------------------------------------------------------------------





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
         
    

        

//---------------------------------------------------    Массивы     -------------------------------------------

//1.Найти минимальный элемент массива

    // var arr = [6,5,241,21,5];
    // var min = arr[0];
    // for(var i=0; i<arr.length; i++){
    //     if(arr[i] < min) {
    //         min = arr[i];
    //     }
    // }
    // console.log(min);

    //2.Найти максимальный элемент массива
    // var arr = [6,5,2,21,5];
    // var max = arr[0];
    // for(var i=0; i<arr.length; i++){
    //     if(arr[i] > max) {
    //         max = arr[i];
    //     }
    // }
    // console.log(max);

    //3.Найти индекс максимального элемента массива

        // var arr = [6,5,2,21,5];
        //     var max = arr[0];
        //     for(var i=0; i<arr.length; i++){
        //         if(arr[i] > max) {
        //             max = arr[i];
        //         }
        //     }
        //  console.log(arr.indexOf(max));

    //4.Найти индекс минимального элемента массива

    //  var arr = [6,241,21,58];
    //  var min = arr[0];
    //  for(var i=0; i < arr.length; i++){
    //      if(arr[i] < min) {
    //          min = arr[i];
    //      }
    //  }
    //  console.log(arr.indexOf(min));
 
   /* 5 Посчитать сумму элементов массива с нечетными индексами */
         /*var arr = [6,241,21,58,32,233,2312,68];
         var sum= 0;
         for(var i = 0; i < arr.length; i++) {
           if(i % 2 !== 0){
                sum += arr[i];
             }
         }
         console.log(sum);*/


    /*6 Сделать реверс массива (массив в обратном направлении)*/
        /*var arr = [6,241,21,58,32,233,2312,68];
        var tmp = 0;
        
        for (var i = 0; i < arr.length / 2; i++) {
            tmp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = tmp;
        }
        console.log(arr);*/
        




   /* 7 Посчитать количество нечетных элементов массива*/
   /*var arr = [6,241,21,58,32,233,2312,68,71,21,21,21];
   var count = 0;
   for(var i = 0; i < arr.length; i++) {
       if (arr[i] % 2 !== 0){
           count ++;
       }
   }
   console.log(count);*/

    /*8 Поменять местами первую и вторую половину массива, например, для массива */

    /*var arr = [6,241,21,58]; 
    var newArr = [firstHalf,secondHalf];
    var firstHalf = [];
    var secondHalf = [];

    for(var i = 0; i < arr.length / 2; i++) {
        firstHalf[i] = arr[i];
        
    }
    console.log(newArr);*/ 
    //не верно

    /*Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))*/

/*----------------------------------Функции---------------------------------------*/
    /*Получить строковое название дня недели по номеру дня. */

    /*function getDay(num) {
        switch (num){
            case 1: 
            console.log("Monday");
            break;
            case 2: 
            console.log("Tuesday");
            break;
            case 3: 
            console.log("Wednesday");
            break;
            case 4: 
            console.log("thursday");
            break;
            case 5: 
            console.log("Friday");
            break;
            case 6: 
            console.log("Suturday");
            break;
            case 7: 
            console.log("Sunday");
            break;
            default:
                console.log("faQday");
        }
        return num;
    }

    console.log(getDay(7));*/


    /*Найти расстояние между двумя точками в двухмерном декартовом пространстве.*/
    /*function decart(firstDot, secondDot) {
        return Math.sqrt( ((secondDot.x - firstDot.x) ** 2) + ((secondDot.y - firstDot.y) ** 2) );
    }
    console.log(decart({x:-1, y:3}, {x: 4, y: 7}));*/



    /*Вводим число(0-999), получаем строку с прописью числа.*/

    
    function stingNum(num){

    }



    /*Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число*/



     
