
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject({message:'done', count:10000});
  }, 5000);
});


// count a huge records
function counter() {
  return promise;
}


counter()
.then((response) => {
  console.log(response);
})
.catch((err) => {
  console.error(err);
});
;