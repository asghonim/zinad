tellmeajoke
===========

tell me a random joke

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tellmeajoke.svg)](https://npmjs.org/package/tellmeajoke)
[![Downloads/week](https://img.shields.io/npm/dw/tellmeajoke.svg)](https://npmjs.org/package/tellmeajoke)
[![License](https://img.shields.io/npm/l/tellmeajoke.svg)](https://github.com/zinad-task-command/tellmeajoke/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tellmeajoke
$ tellmeajoke COMMAND
running command...
$ tellmeajoke (-v|--version|version)
tellmeajoke/0.0.0 win32-x64 node-v10.15.3
$ tellmeajoke --help [COMMAND]
USAGE
  $ tellmeajoke COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tellmeajoke hello [FILE]`](#tellmeajoke-hello-file)
* [`tellmeajoke help [COMMAND]`](#tellmeajoke-help-command)

## `tellmeajoke hello [FILE]`

describe the command here

```
USAGE
  $ tellmeajoke hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tellmeajoke hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/zinad-task-command/tellmeajoke/blob/v0.0.0/src\commands\hello.ts)_

## `tellmeajoke help [COMMAND]`

display help for tellmeajoke

```
USAGE
  $ tellmeajoke help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src\commands\help.ts)_
<!-- commandsstop -->
