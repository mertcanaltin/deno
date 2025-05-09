// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

// Flags: --expose-internals
'use strict';
const common = require('../common');
const { spawnSyncAndExit } = require('../common/child_process');
const { internalBinding } = require('internal/test/binding');

const { hasSmallICU } = internalBinding('config');
if (!(common.hasIntl && hasSmallICU))
  common.skip('missing Intl');

{
  spawnSyncAndExit(
    process.execPath,
    ['--icu-data-dir=/', '-e', '0'],
    {
      status: 9,
      signal: null,
      stderr: /Could not initialize ICU/
    });
}

{
  const env = { ...process.env, NODE_ICU_DATA: '/' };
  spawnSyncAndExit(
    process.execPath,
    ['-e', '0'],
    { env },
    {
      status: 9,
      signal: null,
      stderr: /Could not initialize ICU/
    });
}
