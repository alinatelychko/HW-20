 //task 1

let age = prompt("Enter your age?", 'Age');

if(age <= 17){
    answer = "Do you study at school?";
} else if (age <= 25 && age> 17){
    answer = "Do you study at Uni?";
} else if (age <=60 && age> 25){
    answer = "Do you have job?";
} else {
    answer = "What are you doing?";
}
alert(`Your name is: ${answer}`);

 //task 2
let  cssStyle = prompt('Which tipe of Display have you used?', );
switch (cssStyle) {
    case "block":
        alert('You used block');
        break;
    case "flex":
        alert('You used flex');
        break;
    case "grid":
        alert("You used grid" );
        break;
    case "inline":
        alert('You used inline' );
        break;
    case "none":
        alert('You used none');
        break;
    default:
        alert('Set display:inline-block');
 }


 //task 3
 let number;
 do {
  number = Number(prompt("Enter the number:",''))
  } while (isNaN(number) || number < 0);
  alert(`result is ${number * 12}`);


//Task4 
let num= 50;
for (let c = 2; c <= num; c++) {
  console.log(c);
}
