export const branches = [
  "main"
];
export const plugins = [
  [
    "@semantic-release/commit-analyzer",
    {
      preset: "angular",
      parserOpts: { noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"] },
      releaseRules: [
        { type: "feat", release: "minor" },
        { type: "fix", release: "patch" },
        { type: "perf", release: "patch" },
        { type: "revert", release: "patch" },
        { breaking: true, release: "major" },
      ],
    },
  ],
  [
    "@semantic-release/release-notes-generator",
    {
      preset: "angular",
      parserOpts: { noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"] },
    },
  ],
  [
    "@semantic-release/exec",
    {
      prepareCmd: "sed -i 's/^\\(Version[[:space:]]*=[[:space:]]*\\).*/\\13.0/' Package.ini && npm run build ${nextRelease.version}"
    }
  ],
  [
    "@semantic-release/github",
    {
      assets: [
        {
          path: "FromDucks-${nextRelease.version}.crplugin",
          label: "FromDucks-${nextRelease.version}.crplugin"
        }
      ],
      releasedLabels: ["released"],
    },
  ],
];
