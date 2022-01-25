const vscode = require("vscode");
let db = require("./db");

module.exports = {
  /**
   * Runs when this extenstion has been installed at first time
   * @param {vscode.ExtensionContext} context
   */
  activate: async (context) => {
    /*db = new db(context.workspaceState);

    let rating = db.get("rating");

    if (!rating || rating !== "ok") {
      db.set("rating", "ok");
      let Clicked = await vscode.window.showInformationMessage(
        "Thank you for installing Neon Dark Theme",
        "Give a star 🌟"
      );
      if (Clicked && Clicked.startsWith("Give"))
        vscode.env.openExternal(
          "https://github.com/SudhanPlayz/NeonDark-Theme"
        );
    }
    */
  },
};
