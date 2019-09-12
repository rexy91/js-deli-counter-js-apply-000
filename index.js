function takeANumber(array, person){
    array.push(person)

    return `Welcome, ${person}. You are number ${array.length} in line.`

}

function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  }
  else{
    var empty_array = []
    for (var i=0; i<array.length; i++){
      empty_array.push(` ${i+1} ${array[i]}`)
    }
  }
  return "The line is currently:" + empty_array
}
