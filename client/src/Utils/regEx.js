const regEx = {
  USERNAME_REGEX: /^[A-z][A-Za-z0-9-_]{3,16}$/,
  EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  PWD_REGEX: /^(?=.*[A-Za-z\d])[A-Za-z\d@$!%*#?&^_-]{8,32}$/,
  NAME_REGEX: /^[\w'\-,.][^0-9_!¡÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{1,30}$/,
  NUMBER_REGEX: /^\d{10,12}$/,
  AGE_REGEX: /^\d{1,3}$/,
  ADDRESS_REGEX: /^[\w'\-,.][^_!¡÷?¿/\\+=@#$%^&*{}|~<>;:[\]]{1,200}$/,
  MESSAGE_REGEX: /^[\w\n '\-,.!¡÷?¿/\\+=@#$%^&*{}|~<>;:[\]]{1,2000}$/,
  COST_REGEX: /^\d{1,6}$/,
};

export default regEx;
