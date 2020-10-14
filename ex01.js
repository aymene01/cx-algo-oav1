const Camel =(string)=> {
    if (string === undefined){
      return 0
    } else { 
    let newStr = string.charAt(0).toUpperCase() + string.slice(1);
    let tab = newStr.match(/[A-Z][a-z]+/g);
    let a = tab.length
    return a++
    }
  }
