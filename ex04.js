/* ex4.1 */
const count =(array, e)=>{
    let k = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === e){
            k++
        }
    }
    return k
}

/* ex4.2 */
const moyenne =(array)=> {
    let somme = 0;
    for(let i = 0; i < array.length; i++){
      somme += array[i]
    }
    return somme/array.length
  
  }

  /* ex4.3 */
  const Mini = (array) =>{
    let mini = array[0]
    for(let i = 0; i < array.length; i++){
      if(mini > array[i]){
        mini = array[i]
      }
    }
    return mini
  }

/* ex4.4/5 */

const Max = (array) =>{
    let maxi = array[0]
    for(let i = 0; i < array.length; i++){
      if(maxi < array[i]){
        maxi = array[i]
      }
   }
    return maxi
  }

/* ex4.6 */
const diff=(array)=>{
    const smaller = Mini(array)
    const higher = Max(array)
    return Math.abs(higher - smaller);
}





