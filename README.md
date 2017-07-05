# White Paper

**White Paper** is a theme for Jekyll. It is built keeping content in focus and is best for writers/developers who also like to share code with their essays.

## How to use White Paper

Fork the repo to your account click here by clicking the button on the top right as shown in the image:

![fork](https://cldup.com/vOF0oaUkh5-3000x3000.png) and then where you want to fork it as shown below.

![fork-repo](https://cldup.com/QMGPJDlayN-3000x3000.png)

Next, Go the the project settings and change the repository name to `<username>.github.io` where username is your username.

Change these entries in the `_config.yml` file:


```yml
master_repo: false
url: "<username>.github.io"
```
Also, change all other fields in the `_config.yml` file to your choice.

## Installation

### Local Development

This theme requires you to install couple of tools first to setup jekyll locally.

```$
git clone git@github.com:vinitkumar/white-paper.git

# If you have ruby installed.
gem install jekyll bundler

# If you have node installed.
npm install
sudo npm install -g grunt-cli  #to get the task runner for grunt.
bundle install
jekyll serve

# on running the serve script, the site will be live on 
http://127.0.0.1:4000
```
This theme uses grunt to concat & minify the css for best performance. In order to prepare the css build. Run `grunt`
It will create a main.min.css file in the css folder.

### Switch Syntax Highlighting.

This theme also provides syntax highlighting in different theme. Inside css folder, there is a syntax folder.

```$
.
├── emacs.css
├── github.css
├── monokai.css
├── native.css
├── syntax.css
└── vim.css

```

Now in the gruntfiles.js

```js
concat: {
  dist: {
    src: [
      'css/base.css',
      'css/sytax/emacs.css', // change this to another theme if you prefer, like vim.css and run grunt
      'css/octicons.css'
    ],
    dest: 'css/<%= pkg.name %>.add.css'
  }
}
```

## License 
* see [LICENSE](https://github.com/vinitkumar/white-paper/blob/gh-pages/LICENSE) file

## Version 
* Version 2.1.0

## Contact
#### Developer
* Homepage: http://vinitkumar.me
* e-mail: vinit1414.08@bitmesra.ac.in
* Twitter: [@vinitkme](https://twitter.com/vinitkme "vinitkme on twitter")
