/* ex4.1 */
const count=(array)=>{
    return array.length
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




