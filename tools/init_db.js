const {unes, aai} = require("../app/core/db.core");
const {DocumentStorage:DocumentStorageUNES} = require("../app/models/unes/documentStorage.model");
const {DocumentStorage:DocumentStorageAAI} = require("../app/models/aai/documentStorage.model");
const {ProfilePicture:ProfilePictureUNES} = require("../app/models/unes/profilePicture");
const {ProfilePicture:ProfilePictureAAI} = require("../app/models/aai/profilePicture");

async function setup(){
    console.log(DocumentStorageUNES);
    console.log(ProfilePictureUNES);
    await unes.sync();

    console.log(DocumentStorageAAI);
    console.log(ProfilePictureAAI);
    await aai.sync();
}
setup().catch(error=>{
    console.error(error);
});

console.log("changes done");