const fs=require("fs");
const path = require("path");

function initStorage(){
    const pathToFile=path.join(__dirname,"..","data", "tasks.json" );
    const pathToFolder=path.join(__dirname, "..","data");
    const doesFolderExist=fs.existsSync(pathToFolder);
    const doesFileExist=fs.existsSync(pathToFile);

    if(doesFolderExist){
        if(doesFileExist){
            return "Папка і файл існують";
        }
        else{
          fs.writeFileSync(pathToFile, "[]");
            return "Папка існує, файл створено";
        }
    }
    else{
        fs.mkdirSync(pathToFolder, (err) => {
            if(err){
                console.error(err);
            }
        })
      const writeJSON=fs.writeFileSync(pathToFile, "[]", (err) => {
            if(err){
                console.error(err);
            }
        });
        return "Папку і файл створено";

    }

}

module.exports=initStorage;