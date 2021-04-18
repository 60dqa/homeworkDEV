// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
// Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function CookTime(n){ 
    return Math.ceil(n / 5) * 5;
}

//console.log(CookTime(9)); 

//2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function findArrElem(array){
    var res
    var oddArr = []
    var evenArr = []
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenArr.push(array[i]) 
        }
        else{
            oddArr.push(array[i])
        }
    }
    if(oddArr.length === 1){
        res = oddArr[0]
    }
    if(evenArr.length === 1){
        res = evenArr[0]
    }
    return res
}

// console.log(findArrElem([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));
// console.log(findArrElem(([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])));


//3. Принимая массив объектов и случайную строку.
//  У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм,
//   который фильтрует массив, заданный как первый параметр, и возвращает массив объектов,
//    которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

var arr = [
    {notitle: 'Some title'}, 
    {title: 'I like JS'}, 
    {title: 'This obj doesn’t have key title js'},
    {title: 'Js - is the best!'}
  ];
  
  function findKeys(arr,str){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(String(arr[i].title).toLowerCase().includes(str.toLowerCase()) ){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
//console.log(findKeys(arr, 'js')); 
  
 // 4. Принимая строку, ваша функция должна вернуть обьект,
 // в котором ключи – символы строки, значение – количество повторений символов в строке
 function countCharacters(str){
	var obj = {};
	for(var i = 0; i < str.length; i++){
		if(obj.hasOwnProperty(str[i])){
			obj[str[i]]++;
		} else if(str[i].toUpperCase().charCodeAt(0) >= 65 && str[i].toUpperCase().charCodeAt(0) <= 90){
			obj[str[i]] = 1;
		}
	}
	 return obj;
}
console.log(countCharacters('sparrow')) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters('aabcddeffge')) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}

  
