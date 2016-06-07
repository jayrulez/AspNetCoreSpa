## Features

* [ASP.NET Core RC2](http://www.asp.net/)
* [Entity Framework Core](https://docs.efproject.net/en/latest/)
* [Angular 2 RC1](https://angular.io/)
* [Webpack](https://webpack.github.io/)
* [SASS](http://sass-lang.com/) support
* [Best practices](https://angular.io/docs/ts/latest/guide/style-guide.html) in file and application organization for Angular 2.
* Testing Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](https://karma-runner.github.io/0.13/index.html).
* Coverage with [Istanbul](https://github.com/gotwarlost/istanbul) and [Karma](https://karma-runner.github.io/0.13/index.html).
* Type manager with [Typings](https://github.com/typings/typings)
* [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot Module Replacement) with Webpack
* [Typedoc](http://typedoc.io/) for typescript documentation
* [Server](https://github.com/aspnet/dotnet-watch) and [client](https://webpack.github.io/docs/hot-module-replacement.html) watches
* Login and Registration functionality using [Asp.Net Identity](https://docs.asp.net/en/latest/security/authentication/identity.html)
* An example of Angular 2 child routes (About page has two child routes)
* [Angular 2 dynamic forms](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html) for reusability and to keep html code DRY.
* More coming....

## Pre-requisites

1. [.Net core sdk](https://www.microsoft.com/net/core#windows)
2. Either [VSCode](https://code.visualstudio.com/) with [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp) extension OR [Visual studio 2015 update 2](https://www.visualstudio.com/) with [.Net Core tooling](https://www.microsoft.com/net/core#windows)
4. [Nodejs](https://nodejs.org/en/)


## Installation
```
1. clone the repo
    git clone https://github.com/asadsahi/AspNetCoreSpa
2. Change directory to our repo
    cd AspNetCoreSpa
3. dotnet restore
4. Install global dependencies
    npm install typings rimraf webpack -g
5. npm install
6. typings install
7. Create webpack vendor manifest file for fast webpack rebuils
    webpack --config config/webpack.config.vendor.js
8. Set appropriate environment 
    set ASPNETCORE_ENVIRONMENT=Development
9. Run the app 
    dotnet run (for single run) OR dotnet watch (in watch mode)
10. Browse using http://localhost:5000
```


## Other commands

### run Angular 2 tests
```bash
npm run test
```
### watch and run Angular 2 tests
```bash
npm run watch:test
```
### Typescript documentation
```bash
npm run docs
# this will create documentation in doc folder at the root location (open index.html file) 
```
