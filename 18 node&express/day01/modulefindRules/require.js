// require('./find.js');
// require('./find');

require('find');


//查找规则带路径的find.js 或者./find
//1 会优先在当前路径下查找find.js文件
//2 如果1没找到会去找find同名文件夹，在里边找index.js
//3 如果index.js没有找到则在find文件夹下找package.json 如果package.json里找到main字段
//4 根据main字段标识字段如main.js，则引入main.js


//如果require包含的时一个名字如find

//0 优先在系统级模块里查找，找不到则会进入1
//1 优先在当前路径的node_moudules文件夹下查找find同名的find.js
//2 如果1没找到，则优先在当前文件夹下查找find同名目录find,并查找find目录下的index.js
//3 如果2没有找到则在find文件夹下查找package.json,如果不存在package.json则继续向上级的node_modules文件夹里查找
//4 如果找到package.json中查找main属性，根据main属性引入具体的js 如会加载main属性的"main"："./lib/xxx.js"
//5 如果package.json中没有找到main属性，则继续去上级目录的node_modules文件夹里查找