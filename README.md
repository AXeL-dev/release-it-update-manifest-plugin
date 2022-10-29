# release it - update manifest plugin

[![NPM](https://img.shields.io/npm/v/react-use-cancel-token.svg)](https://www.npmjs.com/package/release-it-update-manifest-plugin)
[![Downloads](https://img.shields.io/npm/dt/release-it-update-manifest-plugin.svg)](https://www.npmjs.com/package/release-it-update-manifest-plugin)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-green.svg)](https://standardjs.com)

> A [release-it](https://github.com/release-it/release-it) plugin to update manifest file(s) version on release.

## Install

```bash
npm i release-it-update-manifest-plugin
```

## Usage

Simply add the plugin to your `.release-it.json` file:

```json
{
  ...,
  "plugins": {
    "release-it-update-manifest-plugin": {
      "preset": "react"
    }
  }
}
```

## Options

| Option   | Default value | Description                                                   |
| -------- | ------------- | ------------------------------------------------------------- |
| `preset` | `react`       | Default plugin preset. Possible values: `react` or `angular`. |

## License

MIT © [AXeL-dev](https://github.com/AXeL-dev)
