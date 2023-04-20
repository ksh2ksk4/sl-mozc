import * as vscode from 'vscode';
import * as childProcess from 'child_process';

export function activate(context: vscode.ExtensionContext) {
  console.clear();
  console.log('sl-mozc - activate(): start');

  let disposable = vscode.commands.registerCommand('sl-mozc.helloWorld', () => {
    const command = 'echo "(0 CreateSession)\n(1 SendKey 1 a)" | /Users/ksh2ksk4/mine/bin/mozc_emacs_helper';

    /**
     * about exec()
     *
     * https://stackabuse.com/executing-shell-commands-with-node-js/
     * https://www.js-tutorials.com/nodejs-tutorial/how-to-execute-shell-command-in-nodejs/
     */
    childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('sl-mozc - error: %o', error);

        return;
      }

      if (stderr) {
        console.error('sl-mozc - stderr: %o', stderr);

        return;
      }

      console.log('sl-mozc - stdout: %o', stdout);
    });
  });

  context.subscriptions.push(disposable);

  console.log('sl-mozc - activate(): end');
}

export function deactivate() {
  console.log('sl-mozc - deactivate(): start');
  console.log('sl-mozc - deactivate(): end');
}
