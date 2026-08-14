const os=require("os");

const systemInfo={
   cpu: os.cpus(),
   freeMemory: os.freemem() / 1024 / 1024 / 1024,
   hours: os.uptime() /60 /60 ,
   type: os.type()
}

module.exports = systemInfo;
