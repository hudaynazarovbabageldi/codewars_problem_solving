function toCamelCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      newStr += str[i + 1].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  console.log("newStr: ", newStr);

  return newStr;
}

toCamelCase("baba_geldi");

// console.log(toCamelCase("baba_geldi"));
