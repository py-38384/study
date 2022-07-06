function iteration(values){
  let nextIndex = 0;
  return {
    next : function(){
      if(nextIndex < values.length){
        return {
          value : values[nextIndex++],
          done : false
        }
      }
      else{
        return {
          dane : true
        }
      }
    }
  }
}

let list = ['Piyal','Rakib','Ridoy','Mursalin','Rekha']
let name = iteration(list);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);