mcf
===

@TODO Requirements:
-------------------

## Getting Started
This plugin requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install all plugins with this command:

```shell
npm install
```

### Somne of the npm modules must be installed global:*
Selenium for local testing:
```shell
npm install -g selenium-standalone@2.43.1-5
```

Phantomjs `>=1.9.8` for Wraith and Webtests:
```shell
npm install -g phantomjs
```


WIP Installation Wraith
-----------------------

Wraith — A responsive screenshot comparison tool http://bbc-news.github.io/wraith/index.html

Installation requirements are always up to date on the project page than here. However, a quick guide ,)

## Requirements

Imagemagick and PhantomJS are required to use Wraith, install via your favourite package manager. You can also use SlimerJS and CasperJS, CasperJS can be used to target specific selectors. To read our detailed instructions for setup and install, as well as example configs, visit [wraith docs](http://bbc-news.github.io/wraith/index.html)

```sh
brew install phantomjs
brew install imagemagick
```

## Installation

Open terminal and run

    gem install wraith

You can then run the following to create a template snap.js and config file:

    wraith setup

## Using Wraith
You can type `wraith` into terminal to bring up the list of commands, but the one to start Wraith is

```sh
wraith capture config_name
```

This assumes that your snap.js and config.yaml are in the folders that were created on setup. To run the setup, create a folder and inside run

```sh
wraith setup
```

### CLI

There are other commands also available, these all expect a config_name to be passed as an option. Wraith will look for the config file at `configs/[config_name].yaml`. Complete List off Options find be here: http://bbc-news.github.io/wraith/index.html#Configoptions

```sh
  wraith capture [config_name]              # A full Wraith job
  wraith reset_shots [config_name]          # removes all the files in the shots folder
```