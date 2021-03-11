function Preson() {
  this.name = "jing";
}

function child() {
  Preson.call(this);
  this.type = "chl";
}

child.prototype = Object.create(Preson.prototype);
child.prototype.constructor = child;
