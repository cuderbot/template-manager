template-manager
================
[![Version](https://img.shields.io/npm/v/template-manager.svg)](https://npmjs.org/package/template-manager)
[![Downloads/week](https://img.shields.io/npm/dw/template-manager.svg)](https://npmjs.org/package/@cuder/template-manager)
[![License](https://img.shields.io/npm/l/@cuder/template-manager.svg)](https://github.com/cuderbot/template-manager/blob/master/package.json)

CLI que crea proyectos base y boilerplate código.

Este repositorio basicamente nació, del aburrimiento de tener que configurar un proyecto con cada herramienta que usaba (linter, formater, test unitarios, entre otros), para que el código siga un estandar, además de tener que implementar, cada código .

Al cabo de un tiempo de haber comenzado en este proyecto, encontre herramientas que servian a este problema,
pero ya me habia empezado a gustar la idea en si. 

¡Ojo!
El plan no es darle un soporte continuo, ni mucho menos.


<!-- toc -->
### Tabla de contenidos
* [Como funciona](#como-funciona)
* [Instalacion](#instalacion)
* [Comandos](#comandos)
<!-- tocstop -->
<!-- comoFuncionaStop -->
# Como funciona

La idea es de agrupar posibles configuraciones de proyectos.
<!-- comoFuncionaStop -->
# Instalacion
<!-- instalacion -->
```sh-session
$ npm install -g template-manager
$ default [COMMAND]
running command...
$ default (-v|--version|version)
default-settings/0.0.1 linux-x64 node-v15.1.0
$ default --help [COMMAND]
USAGE
  $ default [COMMAND]
...
```
<!-- instalacionStop -->
# Comandos
<!-- comandos -->
* [`template-manager create`](#template-manager-create)
* [`template-manager list`](#default-help-command)

## `default hello [FILE]`

describe the command here

```
USAGE
  $ default hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ default hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/cuderbot/default-settings-node/blob/v0.0.1/src/commands/hello.ts)_

## `default help [COMMAND]`

display help for default

```
USAGE
  $ default help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- comandosStop -->


<!--
                 _                     _________  
   ___ _ __ ___ (_)_ __ ___   _____  _|___ /___ \ 
  / _ \ '_ ` _ \| | '_ ` _ \ / _ \ \/ / |_ \ __) |
 |  __/ | | | | | | | | | | |  __/>  < ___) / __/ 
  \___|_| |_| |_|_|_| |_| |_|\___/_/\_\____/_____|
estuvo aqui
-->