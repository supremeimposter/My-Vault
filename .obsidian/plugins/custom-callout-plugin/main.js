const { Plugin } = require('obsidian');

module.exports = class CustomCalloutPlugin extends Plugin {
  async onload() {
    console.log('Custom Callout Plugin loaded.');

    this.addCommand({
      id: 'insert-custom-callout',
      name: 'Insert Custom Callout',
      callback: () => {
        const editor = this.app.workspace.activeLeaf.view.sourceMode.cmEditor;
        const selectedText = editor.getSelection();
        const customCalloutText = `<div class="pdf-reference">${selectedText}</div>\n`;

        editor.replaceSelection(customCalloutText);
        editor.setCursor(editor.getCursor('end'));
      },
    });

    this.addSettingTab(new CustomCalloutSettingsTab(this.app, this));
  }
};

class CustomCalloutSettingsTab {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
  }

  display(containerEl) {
    containerEl.empty();
    containerEl.createEl('h2', { text: 'Custom Callout Plugin Settings' });
  }
}

