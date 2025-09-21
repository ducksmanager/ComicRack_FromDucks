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
      prepareCmd: "zip -j FromDucks-plugin.crplugin _json_decode.py _json_scanner.py fromducks.ico FromDucks.py"
    }
  ],
  [
    "@semantic-release/github",
    {
      assets: [
        {
          path: "FromDucks-plugin.crplugin",
          label: "FromDucks ${nextRelease.version} Plugin"
        }
      ],
      releasedLabels: ["released"],
    },
  ],
];
