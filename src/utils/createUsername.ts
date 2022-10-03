export const createUsername = (email: string) => {
  if (email) {
    const index = email.indexOf("@");
    return email.substring(0, index);
  }
  return "username";
};
