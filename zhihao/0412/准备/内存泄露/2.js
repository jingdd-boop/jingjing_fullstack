let map = new Set();
let value = {test:22};
map.add(value);

value = null;

//内存泄露


 // 手动删除
let map = new Set();
let value = {test:22};
map.add(value);

map.delete(value);
value = null;

// 使用weakset
let map = new WeakSet();
let value = { test: 22};
map.add(value);

value = null;