const glob = require("glob");
const fs = require("fs-extra");
const path = require('path');

module.exports = function module (moduleOptions) {
  const postsStaticPathShort = path.resolve(this.options.buildDir, path.join('../static/posts/all', 'all-posts-short.json'));
  const projectsStaticPathShort = path.resolve(this.options.buildDir, path.join('../static/projects/all', 'all-projects-short.json'));
  const postsStaticPathLong = path.resolve(this.options.buildDir, path.join('../static/posts/all', 'all-posts-long.json'));
  const projectsStaticPathLong = path.resolve(this.options.buildDir, path.join('../static/projects/all', 'all-projects-long.json'));

  let allPostsShort = {"posts": []};
  let allProjectsShort = {"projects": []};
  let allPostsLong = {"posts": []};
  let allProjectsLong = {"projects": []};
  glob('**/static/posts/*.json', function(err, files) {
    files.forEach(function(file) {
      // Get the name of the json file - used for routing and filtering in the BlogFeed component
      let slug = String(file).split('/').slice(-1)[0].slice(0, -5);
      let postJson = fs.readJsonSync(file);
      postJson.slug = slug;
      allPostsLong.posts.push(postJson);
      let postJsonShort = Object.assign({}, postJson);
      delete postJsonShort.body;
      allPostsShort.posts.push(postJsonShort);
    });
      fs.writeJsonSync(postsStaticPathLong, allPostsLong);
      fs.writeJsonSync(postsStaticPathShort, allPostsShort);
  });
  glob('**/static/projects/*.json', function(err, files) {
    files.forEach(function(file) {
      // Get the name of the json file - used for routing and filtering in the BlogFeed component
      let slug = String(file).split('/').slice(-1)[0].slice(0, -5);
      let projectJson = fs.readJsonSync(file);
      projectJson.slug = slug;
      allProjectsLong.projects.push(projectJson);
      let projectJsonShort = Object.assign({}, projectJson);
      delete projectJsonShort.body;
      allProjectsShort.projects.push(projectJsonShort);
    });
      fs.writeJsonSync(projectsStaticPathLong, allProjectsLong);
      fs.writeJsonSync(projectsStaticPathShort, allProjectsShort);
  });
}
