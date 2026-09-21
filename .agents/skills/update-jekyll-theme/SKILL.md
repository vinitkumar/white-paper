---
name: update-jekyll-theme
description: Updates the White Paper theme to the latest stable Ruby and Jekyll releases, resolves compatibility issues, verifies builds, maintains the changelog, and bumps the theme version. Use when asked to modernize, upgrade, or release this Jekyll theme, or invoke with /skill:update-jekyll-theme.
---

# Update Jekyll Theme

Upgrade the current White Paper repository completely. Do not stop after changing version constraints.

## Sources

Use current stable releases from official sources; do not rely on remembered versions:

- Ruby: <https://www.ruby-lang.org/en/downloads/>
- Jekyll: <https://jekyllrb.com/>
- Jekyll documentation: <https://jekyllrb.com/docs/>
- Theme documentation: <https://jekyllrb.com/docs/themes/>
- RubyGems metadata: <https://rubygems.org/gems/jekyll>

## Workflow

1. Inspect `git status`, the latest version tag, `Gemfile`, Ruby-version files, lockfiles, CI, `README.md`, `_config.yml`, and `CHANGELOG.md`.
2. Leave unrelated user changes untouched. Stop and report any overlap that cannot be preserved safely.
3. Resolve the latest stable Ruby and Jekyll versions from the official sources above. Exclude previews, release candidates, and nightlies.
4. Check the selected Ruby, Jekyll, Bundler, plugins, and native gems for compatibility before editing.
5. Add or update `.ruby-version`. Update `Gemfile` with explicit, justified compatibility constraints and remove obsolete direct dependencies only when proven unnecessary.
6. Generate or update `Gemfile.lock` with the selected Ruby and Bundler. Do not hand-edit dependency resolutions.
7. Update CI, development instructions, configuration, and theme files affected by the upgrade. Preserve theme behavior and public configuration unless compatibility requires a change.
8. Run the frontend build, dependency checks, `bundle exec jekyll build`, and relevant tests. Fix upgrade-caused warnings and failures. Never claim success for commands that did not run.
9. Determine the next semantic version from the latest reachable `vX.Y.Z` tag:
   - major: breaking configuration, output, API, or supported-runtime change
   - minor: backward-compatible capability
   - patch: backward-compatible fix or dependency refresh
10. Treat raising the minimum Ruby or Jekyll version beyond the prior supported range as a breaking change. Explain the selected bump.
11. Use `VERSION` as the canonical theme version, creating it if absent. Synchronize the README version and any theme-package metadata. Do not change unrelated tool-package versions unless they represent the theme release.
12. Create or update `CHANGELOG.md` using Keep a Changelog headings. Add a dated section for the new version with only user-relevant changes since the previous version tag. Include migration notes for breaking changes.
13. Re-run all verification after version and changelog edits.

## Release safety

Prepare the release but do not commit, tag, push, publish, or deploy unless the user explicitly requests it. Do not weaken dependency constraints or skip failures merely to make the build pass.

## Report

State the old and new Ruby, Jekyll, Bundler, and theme versions; compatibility changes; files changed; commands run; and any unresolved warnings. Provide the exact suggested tag without creating it.
