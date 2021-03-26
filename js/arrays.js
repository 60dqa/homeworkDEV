/*---------------------------------------------------    Массивы     -------------------------------------------*/

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
