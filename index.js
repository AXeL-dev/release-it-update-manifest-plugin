import { Plugin } from 'release-it';
import fs from 'fs';
import glob from 'glob';

class UpdateManifestPlugin extends Plugin {
  async init() {
    await super.init();
    const { preset } = this.options;

    this.preset = preset || 'react';
  }

  getLatestVersion() {
    const json = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    return json.version;
  }

  getPattern(preset) {
    switch (preset) {
      case 'angular':
        return './src/manifest*.json';
      case 'react':
      default:
        return './public/manifest*.json';
    }
  }

  bump(version) {
    const pattern = this.getPattern(this.preset);
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
