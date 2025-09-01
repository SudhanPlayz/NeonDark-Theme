const vscode = require("vscode");
const LocalStorageService = require("./db");

module.exports = {
  /**
   * Runs when this extenstion has been installed at first time
   * @param {vscode.ExtensionContext} context
   */
  activate: async (context) => {
    const db = new LocalStorageService(context.globalState);

    let rating = db.get("rating");

    if (!rating || rating !== "ok") {
      db.set("rating", "ok");
      let Clicked = await vscode.window.showInformationMessage(
        "Thanks for installing Neon Dark Theme! Help it grow by starring the repo",
        "⭐ Star on GitHub"
      );
      if (Clicked && Clicked.includes("Star"))
        vscode.env.openExternal(
          "https://github.com/SudhanPlayz/NeonDark-Theme"
        );
    }
  },
};
