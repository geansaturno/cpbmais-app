module.exports = {
  /**
   *
   * @param {string} testPath
   * @param {string} snapshotExtension
   * @returns string
   */
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath.slice(0, testPath.lastIndexOf('/')) + '/snapshot' + snapshotExtension,
  resolveTestPath: (snapshotFilePath) => snapshotFilePath.slice(0, snapshotFilePath.lastIndexOf('/')) + '/unit.spec.ts',
  testPathForConsistencyCheck: 'some/components/unit.spec.ts'
}
