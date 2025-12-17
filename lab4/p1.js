
const path=require('path');
const os=require('os');
console.log('directory path'+__dirname);
console.log('file path:'+__filename);
console.log('file extension'+path.extname(__filename));

console.log('file name'+path.basename(__filename));
console.log('dir name'+path.basename(__dirname));

console.log(path.join('user','pdf','documents'))

console.log(path.normalize("./folders///file//file.pdf"))

console.log(path.resolve('folder','subfolder','app.js'))
console.log(path.isAbsolute("c:\\Users\HP\OneDrive\Desktop\javascript\folder\subfolder\app.js"))
console.log('\n');
console.log(os.release());
console.log(os.version());

console.log(os.hostname());
console.log(os.platform());
console.log(os.arch());

console.log('\n');
console.log(os.totalmem()/1024/1024/1024);
console.log(os.freemem()/1024/1024/1024);

console.log('\n');

console.log(os.userInfo());
console.log(os.uptime()/86400);
console.log(os.cpus());
console.log(os.networkInterfaces());





