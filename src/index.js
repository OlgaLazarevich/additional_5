module.exports = function check(str, bracketsConfig) {
  var arr = str.split('');

    var first = '(',
    second = ')',
    fruits = [],
    result = '';
    
    
    
  for (let i = 0, len = arr.length; i < len ; i++) {
    
    for (let i = 0, len = arr.length; i < len ; i++) { 
        if (arr[i] == first && arr[i+1] == second){

            // console.log( `${i} ${arr} ${arr[i]}`);

    fruits.push(i);

        }
        else {
                // console.log(`${i} ${arr}`);
            }

    }
        // console.log(arr);
        // console.log(fruits);

    for (let i = 0, a = 0, len = fruits.length; i < len ; i++, a = 2){

           arr.splice(fruits[i] - a, 2);
        }
    fruits = [];

}

  if (arr.length == 0){
      result = true;
  }
    else {
      result = false;
  }
    return result
}
