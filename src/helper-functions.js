export const numToRoms = (num, isLowerCase) => {
  const digits = num.toString().split("");
  const key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];
  let romanNumerals = "";
  for(var i = 2; i >= 0; i--) {
      romanNumerals = (key[+digits.pop() + (i * 10)] || "") + romanNumerals;
  }
  if (isLowerCase) {
    return romanNumerals.toLowerCase()
  } else {
    return romanNumerals
  }
}