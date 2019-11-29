class Formatter {
static capitalize = (string) =>{
    return string.CharAt(0).toUpperCase() + string.slice(1);
}
static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '');
}
static titleize(string){
    const punj = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let cap = string.replace(/^.{1}/g, s[0].toUpperCase());
    let arr = cap.split(' ');
    let last = arr.map(function(word){
      for(let i = 0; i < punj.length; i ++){
        if(punj[i] === word){
          return word.CharAt(0).toLowerCase() + word.slice(1);
        }
      }
    });
    return last.join(',');
  }
}
