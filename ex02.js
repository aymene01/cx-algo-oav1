const pangram =(string)=> {
    const alph = ["a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z"]
    let newString = string.toLowerCase();
    return alph.every(x => newString.includes(x))
  }