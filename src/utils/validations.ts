export const reggexEmail = (textEmail: string) => {
  let string = textEmail.trim();
  let reg =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log('reg.test(string) === false', reg.test(string));
  return reg.test(string);
};
