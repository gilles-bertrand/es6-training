import { genSaltSync, hashSync } from 'bcryptjs';

export default function user(name, email) {
  return `${name} has this email ${email}`;
}

const apiKey = '4356789FTYHB87657896786';
function generateUIDFromEmail(email) {
  return `hfdsjhgd ${email}`;
}
function generatePassword(mail) {
  const salt = genSaltSync(10);
  const hash = hashSync(mail, salt);
  return hash;
}
export { apiKey as key, generateUIDFromEmail, generatePassword };
