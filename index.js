import { Plugin } from 'release-it';
import fs from 'fs';
import glob from 'glob';

class UpdateManifestPlugin extends Plugin {
  async init() {
    await super.init();
    const { preset, pattern } = this.options;

    this.preset = preset || 'react';
    this.pattern = pattern || '';
  }

  getLatestVersion() {
    const json = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    return json.version;
  }

  getPattern() {
    if (this.pattern) {
      return this.pattern;
    }
    switch (this.preset) {
      case 'angular':
        return './src/manifest*.json';
      case 'react':
      default:
        return './public/manifest*.json';
    }
  }

  bump(version) {
    const pattern = this.getPattern();
    glob.sync(pattern).forEach((file) => {
      const content = fs.readFileSync(file, 'utf8');
      const newContent = content.replace(
        /^(\s*"version": ").+(",$\s*)/gm,
        `$1${version}$2`,
      );
      fs.writeFileSync(file, newContent);
    });
  }
}

export default UpdateManifestPlugin;
