let a= 'abcadeecfb'

function countalpha(str){
    
    let alphabetMap = new Map();
    
    for (let char of str){
    // if the character is already in countin or map
    if(alphabetMap.has(char)){
        alphabetMap.set(char,alphabetMap.get(char)+1)
    } 
    // if the character is not in the map
    else{
        alphabetMap.set(char,1)
        }
    }
console.log(alphabetMap)
const allkeys = Array.from(alphabetMap.keys())
for (let key of allkeys){
    console.log(key+'='+alphabetMap.get(key))
        }
    }
    
countalpha(a)