Array.prototype.reduce = function(callback,inintValue) {
  if (this !== null || this === undefined) {
    throw console.error('');
  }

  if(typeof callback !== 'function') {
    throw console.error('');
  }

  let O = Object(this);
  let len = O.length;
  let i = 0;
  let acc = inintValue;
  if(acc === undefined) {

  } 

}