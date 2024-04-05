// Don't send to client, only use on server
const Secrets = {
    Offerwalls: {
        Lootably: {
            Embed: "lootable.com"
        },
        Offertoro: {
            Embed: "lootable.com"
        },
    },

    // Do not add extra fields
    Mysql: {
        username: "root",
        password: "",
        database: "casinodb",
        host: "127.0.0.1",
        port: 3306,
    }
}

export default Secrets