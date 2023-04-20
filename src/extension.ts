import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.clear();
  console.log('sl-mozc - activate(): start');

  let disposable = vscode.commands.registerCommand('sl-mozc.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from sl-mozc!');
  });

  context.subscriptions.push(disposable);

  console.log('sl-mozc - activate(): end');
}

export function deactivate() {
  console.log('sl-mozc - deactivate(): start');
  console.log('sl-mozc - deactivate(): end');
}
