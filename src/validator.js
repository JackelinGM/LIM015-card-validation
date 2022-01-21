const validator = {
  isValid: (value) => {

    // para ingrezar numeros
  
    if (/[^0-9-\s]+/.test(value)) return false;

    // suma de digitos y numero par
    let sumDigit = 0, evenNumber = false;
    value = value.replace(/\D/g, "");

    //recorro el numero que ingreza el usuario
    for (let n = value.length - 1; n >= 0; n--) {
      let cDigit = value.charAt(n),//para devuelva el valor que se encuentra en la posion n
        nDigit = parseInt(cDigit, 10);// aca convierto el valor  en un numero entero
    
      if (evenNumber && (nDigit *= 2) > 9) nDigit -= 9;// creo una condicional 

      sumDigit += nDigit;
      evenNumber = !evenNumber;
    }

    if ((sumDigit % 10) == 0) {
      return true;

    }
    else {
      return false;

    }
  },

  maskify: (creditCardNumber) => {
    if (creditCardNumber.length < 6) return creditCardNumber;
    const last4Characters = creditCardNumber.substr(-4);
    const maskingCharacters = creditCardNumber.substr(0, creditCardNumber.length - 4).replace(/\d/g, '#');
    return `${maskingCharacters}${last4Characters}`;
  }

  
};

export default validator;
