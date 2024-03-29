const Production = false;
const Api = Production ? "PRODUCTION_API_URL" : "DEBUG_API_URL";

const App = {
    Name: "Buxxer",
    Domain: {
        Name: "buxxer",
        TLD: ".gg"
    },

    get Info() {
        return {
            SidebarSize: 15,
            ChatSize: 15,
        }
    },

    get MenuInfo() {
        return {
            DisplayName: `${this.Name}.gg`
        };
    }
}

const Config = {
    Production,
    Api,
    App
};

export default Config