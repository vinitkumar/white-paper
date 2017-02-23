White Paper
======
**White Paper** is a theme for Jekyll. It is built keeping content in focus and is best for developers who also like
to share code with their essays.

#### Screenshot
![Screenshot software]( "screenshot software")

## Download
* [Version 1.0.0]()

## Usage

This theme could be used in two ways: 

- Clone this repo to your account, change the `_config.yml` file and add/remove/edit/delete the content in the `_posts` directory. It won't require you to install anything.

- Another way is to clone the project on your local machine and do the changes to the theme as per your choice. For this, follow the installation procedures next.

### Installation

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

This theme uses grunt to concat & minify the css for best performance. In order to prepare the css build. Run

```$
grunt
```
It will create a main.min.css file in the css folder.


### Syntax Highlighting for the code.

This theme also provides syntax highlighting in different theme. Inside css folder, there is a syntax folder.

```$
.
├── emacs.css
├── github.css
├── monokai.css
├── native.css
├── syntax.css
└── vim.css

0 directories, 6 files
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
* Version 1.0.0

## Contact
#### Developer/Company
* Homepage: http://vinitkumar.me
* e-mail: vinit1414.08@bitmesra.ac.in
* Twitter: [@vinitkme](https://twitter.com/vinitkme "vinitkme on twitter")