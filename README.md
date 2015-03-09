# MyBlog

This is my personal dev blog under developement, which is a project for me to learn AngularJS concepts. I'm using a boilerplate that consists of AngularJS, Bower, Gulp, Browserify and Jekyll. If you want to have access to it, you can through this [link](https://github.com/MatayoshiMakoto/angular-jekyll-boilerplate).

## Quick Start
So if you want to use this as a base for you blog or even a webapp with some markdown static generated content. you can follow this steps:

1. Make sure you have node.js installed;
1. Clone the repo;
1. Install the global requirements: `npm install -g gulp bower browserify`;
1. Install the local requirements: `npm install`;
1. Install the Bower components: `bower install`;
1. Install the Jekyll: `sudo gem install jekyll`;
1. Install the markdown language: `sudo gem install rdiscount`
1. Run locally with `gulp` and access it through  `http://localhost:5000/`;
1. Create a build: `gulp build` and preview it through `http://localhost:9999/`.

## Clean

If you want to clean both dist and dev folders you can run: `gulp clean`

## Posts

Any new post should be created inside the jekyll directory under post/_posts using Jekyll/Liquid convetions. For more info this [link](http://jekyllrb.com/docs/posts/) covers most of it.