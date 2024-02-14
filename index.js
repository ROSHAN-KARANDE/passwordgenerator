console.log("ekhb");

const passwordGet = document.getElementById("password");

const length = 10;

const uppercase = "ASDFGHJKLMNBVCXZQWERTYUIOP";
const lowerCase = "asdfghjklmnbvcxzqwertyuiop";
const number = "0123654789";
const symbol = "<>?}{|+_)(*&^%$#@!~";

const allchar = uppercase + lowerCase + number + symbol;

function pass() {
  let password = "";

  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }

  passwordGet.value = password;
}

const copypass = () => {
  passwordGet.select();
  document.execCommand("copy");
};
