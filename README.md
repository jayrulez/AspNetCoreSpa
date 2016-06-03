## Pre-requisites

```
1. Install .net core sdk (https://www.microsoft.com/net/core#windows)
2. VSCode with c# extension OR
3. Visual studio 2015 update 2
4. Nodejs
```

## Installing

```
1. clone the repo
2. dotnet restore
3. npm install
4. typings install
5. Open command line and run two commands in same window
    a. set ASPNETCORE_ENVIRONMENT=Development
    b. dotnet run
6. Browse using http://localhost:5000
```

## Features
    * AspNetCore RC2
    * EFCore
    * Angular 2 RC1 (Client side)
    * Webpack (for client build)
    * Hot Module replacement with webpack
    * Client lazy loading using es6-promise loader
    * SASS support

## Few references
### 1. Find .net process id to attach to debugger (in command line)
     * wmic
     * process where caption="dotnet.exe" get ProcessId

### 2. Upgrade from tsd to typings
    * npm uninstall tsd
    * rm -rf typings
    * npm install typings
    * typings init --upgrade
    * rm tsd.json
    * typings install
    * Add typings/main and typings/main.d.ts in tsconfig.json's exclude section to avoid duplicate identifiers during compilation
    
### 3. Webpack stats analyser
    * webpack --config config/webpack.config.js --profile --json > stats.json
    * then feed stats.json file into "https://webpack.github.io/analyse/"