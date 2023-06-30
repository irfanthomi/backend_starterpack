const config = {
    organizations:{
        unes:{
            domains:{
                development:[
                    "localhost_unes"
                ]
            }
        }
    }
}

let c = {
    orgs: []
}

for (const org in config.organizations) {
    if (Object.hasOwnProperty.call(config.organizations, org)) {
        const element = config.organizations[org];
        c.orgs.push(org)
    }
}

module.exports = c
