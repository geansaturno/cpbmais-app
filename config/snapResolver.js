module.exports = {
  /**
   *
   * @param {string} testPath
   * @param {string} snapshotExtension
   * @returns string
   */
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath.replace(/\.spec\.ts/, snapshotExtension),
  resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath.replace(snapshotExtension, '.spec.ts'),
  testPathForConsistencyCheck: 'some/components/Component.spec.ts'
}
