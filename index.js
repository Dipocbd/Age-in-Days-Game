function ageInDays(){
let birthyear= prompt('what year were you born?');
let ageInDays= (2021-birthyear) * 365;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('You are ' + ageInDays +  ' days old');
h1.setAttribute('id' , 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box result').appendChild(h1);
console.log(ageInDays);
}

function reset(){
document.getElementById('ageInDays').remove();
}