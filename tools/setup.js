const {existsSync, mkdirSync, readFileSync, writeFileSync} = require("fs");
const {execSync} = require("child_process");
const nunjucks = require("nunjucks");
const crypto = require("crypto");
const readline = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
});

nunjucks.configure({autoescape:true});

async function prompt(question){
    return await new Promise((resolve, reject)=>{
        try {
            readline.question(`${question}: `, answer => {
                resolve(answer);
            });
        } catch (error) {
            reject(error);
        }
    });
}

function check(path, role){
    if (!existsSync(path)){
        // console.log(`please store ${role} at '${path}'`);
    }
}

function render(path, template_name, ctx){
    let template = readFileSync(`tools/templates/${template_name}`);
    let output = nunjucks.renderString(template.toString(),
        ctx);
    writeFileSync(path, output);
}

async function setup(){
    try {
        if (!existsSync(".secrets/")){
            console.log("creating .secrets folder");
            mkdirSync(".secrets/", {recursive:true});
        }

        if (!existsSync(".secrets/private.key")){
            const ls = execSync("ssh-keygen -q -t rsa -b 4096 -m PEM -f .secrets/private.key -q -N \"\"");
            console.log("generating private key");
            console.log(ls.toString());
        }

        if (!existsSync(".secrets/public.key")){
            let ssl_path = "C:\\Program Files\\Git\\usr\\bin\\openssl.exe";
            if (process.platform==="linux"){
                ssl_path = "openssl";
            }
            const ls = execSync(`"${ssl_path}" rsa -in .secrets/private.key -pubout -out .secrets/public.key`);
            console.log("generating public key");
            console.log(ls.toString());
        }

        if (!existsSync(".secrets/config.js")){
            let template = readFileSync("tools/templates/config.js.njk");
            let pepper = crypto.randomBytes(16).toString("hex");
            let jwt_issuer = await prompt("jwt issuer");
            let output = nunjucks.renderString(template.toString(),
                {
                    pepper,
                    jwt_issuer,
                    databases:[
                        {
                            db_identifier: "unes_db",
                            db_username: "test",
                            db_password: "awsum",
                            db_name: "dev_unes_db"
                        }
                    ]
                });
            writeFileSync(".secrets/config.js",output);
        }

        if (!existsSync(".secrets/secret.js")){
            let template = readFileSync("tools/templates/secret.js.njk");
            let output = nunjucks.renderString(template.toString());
            writeFileSync(".secrets/secret.js",output);
        }

        if (!existsSync("app/.secrets/")){
            mkdirSync("app/.secrets/", {recursive:true});
        }

        if (!existsSync("app/.secrets/auth.config.js")){
            let template = readFileSync("tools/templates/auth.config.js.njk");
            let jwt_issuer = await prompt("jwt issuer:");
            let output = nunjucks.renderString(template.toString(),{
                jwt_issuer
            });
            writeFileSync("app/.secrets/auth.config.js",output);
        }

        // databases setup
        if (!existsSync("app/.secrets/uyah_regist.js")){
            let salt = crypto.randomBytes(16).toString("hex");
            render(
                "app/.secrets/uyah_regist.js",
                "uyah_regist.js.njk",
                {
                    salt
                });
        }

        let db_user = "";
        let db_password = "";

        if (!existsSync("app/.secrets/unes.secret.js")){
            db_user = db_user === "" ? await prompt("db username"): db_user;
            db_password = db_user === "" ? await prompt("db password"):db_password;
            let db_name = await prompt("db name unes");
            render(
                "app/.secrets/unes.secret.js",
                "db.secret.js.njk",
                {
                    db_user,
                    db_password,
                    db_name
                });
        }

        if (!existsSync("app/.secrets/unes_registrasi.secret.js")){
            db_user = db_user === "" ? await prompt("db username"): db_user;
            db_password = db_user === "" ? await prompt("db password"):db_password;
            let db_name = await prompt("db name registrasi");
            render(
                "app/.secrets/unes_registrasi.secret.js",
                "db.secret.js.njk",
                {
                    db_user,
                    db_password,
                    db_name
                });
        }

        if (!existsSync("app/.secrets/aai.secret.js")){
            db_user = db_user === "" ? await prompt("db username"): db_user;
            db_password = db_user === "" ? await prompt("db password"):db_password;
            let db_name = await prompt("db name aai");
            render(
                "app/.secrets/aai.secret.js",
                "db.secret.js.njk",
                {
                    db_user,
                    db_password,
                    db_name
                });
        }

        if (!existsSync("app/.secrets/directory.js")){
            let filestore_root = await prompt("filestore root");
            render(
                "app/.secrets/directory.js",
                "directory.js.njk",
                {
                    filestore_root
                });
        }

        check("app/.secrets/sa.json", "firebase service account details");
        check("app/.secrets/gmail_oauth.js", "oauth credentials unes");
        check("app/.secrets/gmail_oauth_unes.js", "oauth credentials registrasi");
        console.log("setup done");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

setup().then(r => console.log(r));