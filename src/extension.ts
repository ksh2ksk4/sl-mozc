import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "sl-mozc" is now active!');

  let disposable = vscode.commands.registerCommand('sl-mozc.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from sl-mozc!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
