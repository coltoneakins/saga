const fs = require("fs-extra");
const path = require('path');
import { Feed } from "feed";
import posts from '../static/posts/all/all-posts-long.json';

module.exports = function module (moduleOptions) {

  const feed = new Feed({
    title: "Colton Eakins' Blog",
    description: 'Colton Eakins is an interactive front-end developer who blogs about modern web development techniques.',
    id: 'https://coltoneakins.com/',
    link: 'https://coltoneakins.com/',
    image: 'https://coltoneakins.com/og-image.jpg',
    favicon: 'https://coltoneakins.com/favicon.ico',
    copyright: 'All rights reserved 2019, Colton Eakins',
    feedLinks: {
      rss: 'https://coltoneakins.com/rss.xml',
      json: 'https://coltoneakins.com/blog.json',
      atom: 'https://coltoneakins.com/atom.xml'
    },
    author: {
      name: 'Colton Eakins',
      link: 'https://coltoneakins.com/contact'
    }
  });

  posts.posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: 'https://coltoneakins.com/blog/post/' + post.slug,
      description: post.description,
      content: post.body,
      author: [
        {
          name: 'Colton Eakins',
          link: 'https://coltoneakins.com/contact'
        }
      ],
      date: new Date(post.date + 'T00:00:00'),
      image: 'https://coltoneakins.com' + post.thumbnail
    });
  });

  feed.addCategory('Web Development');
  feed.addCategory('Web Design');

  fs.outputFile(path.resolve(this.options.buildDir, path.join('../static/', 'rss.xml')), feed.rss2());
  fs.outputFile(path.resolve(this.options.buildDir, path.join('../static/', 'atom.xml')), feed.atom1());
  fs.outputFile(path.resolve(this.options.buildDir, path.join('../static/', 'feed.json')), feed.json1());

  //console.log(feed.rss2());
  // Output: RSS 2.0

  //console.log(feed.atom1());
  // Output: Atom 1.0

  //console.log(feed.json1());
  //Output: JSON Feed 1.0



}
