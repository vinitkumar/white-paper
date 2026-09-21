# Changelog

All notable changes to White Paper are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.0.0] - 2026-09-22

### Added

- Right-to-left stylesheet generation.
- Automated builds for the supported Ruby and Node.js versions.

### Changed

- Require Ruby 4.0 and upgrade Jekyll from 4.3.4 to 4.4.1.
- Replace the Grunt asset pipeline with Vite and Sass.
- Load generated stylesheets from `dist/css`.
- Replace the bundled Octicons assets with Font Awesome.
- Refine the paper-like visual system with a quieter palette, readable measure,
  responsive typography, accessible focus states, and refreshed screenshots.

### Fixed

- Update frontend dependencies with known security fixes.
- Correct footer social icons and spacing.

### Migration

- Install Ruby 4.0 and Bundler 4 before installing dependencies.
- Run `yarn build` instead of `grunt` to compile theme assets.
- Update custom stylesheet references from `/css/main.min.css` to
  `/dist/css/main.min.css`. RTL sites should use
  `/dist/css/main.min.rtl.css`.

[7.0.0]: https://github.com/vinitkumar/white-paper/compare/v6.0.0...v7.0.0
