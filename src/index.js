const vscode = require("vscode")

module.exports = {
    /**
     * Runs when this extenstion has been installed at first time
     * @param {vscode.ExtensionContext} context 
     */
    activate: async (context) => {
        //TODO: Make this function only run when this extenstion installed for the first time
        let Clicked = await vscode.window.showInformationMessage("Thank you for installing Neon Dark Theme", "Give a star 🌟");
        if(Clicked && Clicked.startsWith("Give"))vscode.env.openExternal("https://github.com/SudhanPlayz/NeonDark-Theme")
    },
}