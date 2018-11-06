/*

*/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is my data coming from ajax Call 1');
  }, 10000);
  //   reject();
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is my data coming from ajax Call 2');
  }, 2000);
});

const promises = [promise, promise2];
Promise.all(promises).then(results => console.log(results));

// promise.then(result => console.log(result));
// promise2.then(result => console.log(result));

// promise.then(result => {
//   console.log(result);
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('this is my data coming from ajax Call 2');
//     }, 3000);
//   });
//   promise2.then(result => console.log(result));
// });

// promise
//   .then(result => result)
//   .then(result => console.log(result))
//   .catch(() => console.log('uh une erreur there is !!!'));
