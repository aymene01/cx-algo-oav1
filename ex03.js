const SOS =(string)=>{
    let newString = string.toUpperCase();
    let tab = newString.split('')
    let somme = 0;
    for (let i = 0; i < tab.length ; i++){
      if (tab[i] !== 'S' && tab[i] !== 'O'){
        somme++
      }
    }
    return somme
  }
  