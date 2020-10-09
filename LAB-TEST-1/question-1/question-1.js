
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(arr){
    let arr1 = new Array;
    let x = 0;
    return new Promise((resolve,reject)=>{
    if(words.filter(w => typeof w === 'string')){
        resolve(words.map(word=>word.lenght))

        }else{
            reject(Error('Reject'))
        }

    }
 
    )
}

lowerCaseWords(mixedArray)
.then(result=>console.log(result))
.catch(error=>console.log(error))

