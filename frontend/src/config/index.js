const Production = false;
const Api = Production ? "PRODUCTION_API_URL" : "DEBUG_API_URL";

const App = {
    Name: "Games",
    Domain: {
        Name: "games",
        TLD: ".gg"
    },

    get Info() {
        return {
            SidebarSize: 11,
            ChatSize: 17,
        }
    },

    get MenuInfo() {
        return {
            DisplayName: `${this.Name}.gg`
        };
    },
}

const Config = {
    Production,
    Api,
    App
};

export default Config