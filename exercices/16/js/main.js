/* eslint no-console:0 */
const utils = {
  message: 'gilles is back',
  sayHello() {
    return this.message;
  },
  sayGoodBye(params) {
    return `${params} goobye`;
  }
};
const init = () => {
  console.log(utils.sayHello());
  console.log(utils.sayGoodBye('gilles'));
};
init();
