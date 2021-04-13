let map = new Map();
let key = new Array(5 * 1024 * 1024);
map.set(key, 1);
key = null;


let map = new Map();
let key = new Array(5 * 1024 * 1024);
map.set(key, 1);

map.delete(key);
key = null;


let map = new WeakMap();
let key = new Array(5 * 1024 * 1024);
map.set(key, 1);

key = null;