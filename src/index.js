const vscode = require("vscode")
const LocalStorageService = require("./services/LocalStorageService")

module.exports = {
    /**
     * Runs when this extenstion has been installed at first time
     * @param {vscode.ExtensionContext} context 
     */
    activate: async (context) => {
        const lts = new LocalStorageService(context.workspaceState)

        let isAsked = lts.getValue("rating")

        if(!isAsked){
            let Clicked = await vscode.window.showInformationMessage("Thank you for installing Neon Dark Theme", "Give a star 🌟");
            if(Clicked && Clicked.startsWith("Give"))vscode.env.openExternal("https://github.com/SudhanPlayz/NeonDark-Theme")
            lts.setValue("rating", true)
        }
    },
}
