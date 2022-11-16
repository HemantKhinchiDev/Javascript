//for loop
for (i = 0; i <= 10; i++) {
  console.log("in loop", i)
  document.getElementById("demo").innerHTML += `<br/>${i} `
}
console.log("loop finiesh")
//
const names = ['shaun', 'mario', 'lugii'];
for (i = 0; i < names.length; i++) {
  //console.log(names[i], )
  let html = `<div>${names[i]}</div>`;
  console.log(html);
  document.getElementById("demo").innerHTML += html
}
console.log("name loop finiesh");

let result = 'x';
for (i = 0; i <= 100; i++) {
  for (k = 0; k <= 10; k++) {
    if (i == 0 && k > 10) {
      result += '[' + k + ']';
    }
    else if (k == 0 && i > 0) {
      result += '[' + i + '] ';
    }// for the number present
    else if (i > 0 && k > 0) {
      result += (i * k) + ' ';
    }// for multiplay
  }
  result += '\n'
}
console.log(result);
