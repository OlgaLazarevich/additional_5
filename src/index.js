module.exports = function check(str, bracketsConfig) {
    
    let open = bracketsConfig;
        close = bracketsConfig;
        ;
    
    let arr = str.split(''),
        middle = arr.length / 2;
    
    
   
    
    
    for (let c = 0; c < middle ; c++){
    
        for (let i = 0, len = arr.length -1 ; i < len ; i++){ 
    

            if (arr[i] === open[0][0] && arr[i+1] === open[0][1]){
            
                arr.splice(i, 2);
                i -= 1;
                len -= 2;
            }  
        }
    }
    
    
    let result = arr.length === 0? true: false;
    
    
    
  return result
}