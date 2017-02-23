White Paper
======
**White Paper** is a theme for Jekyll. It is built keeping content in focus and is best for developers who also like
to share code with their essays.

#### Screenshots

![sc1](https://cldup.com/HiKXSy5pAr.png "screen1")

![sc2](https://cldup.com/wKmYyj4CGM.png "screen2")

![sc3](https://cldup.com/PnOO95ATKW.png "share")

## Download
* [Version 2.0.0](https://github.com/vinitkumar/white-paper/archive/gh-pages.zip)

## Usage

This theme could be used in two ways: 

- Clone this repo to your account, change the fields `_config.yml` file and add/edit/delete the content in the `_posts` directory. It won't require you to install anything on your machine.


```yaml
name: White Paper
description: >
    A simple jekyll theme aimed at programmers who like clean interface to write posts
    and show off some code.
about: >
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.


url: ""
baseurl: "" 
markdown: kramdown
highlighter: rouge

gems: [jekyll-paginate,  jekyll-gist]

paginate: 3

logo:             logo.png
disqus_shortname:

owner:
  name:           whitepaper
  avatar:         ""
  email:          ""
  # Social networking links used in footer. Update and remove as you like.
  twitter:
  github:
  stackexchange:
  # For Google Authorship https://plus.google.com/authorship
  google_plus:

# Analytics and webmaster tools stuff goes here
google_analytics:
google_verify:
# https://ssl.bing.com/webmaster/configure/verify/ownership Option 2 content= goes here
bing_verify:

```

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
* Version 2.0.0

## Contact
#### Developer/Company
* Homepage: http://vinitkumar.me
* e-mail: vinit1414.08@bitmesra.ac.in
* Twitter: [@vinitkme](https://twitter.com/vinitkme "vinitkme on twitter")
