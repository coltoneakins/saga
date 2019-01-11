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
	    	let postJson = fs.readJsonSync(file);
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
	    	let projectJson = fs.readJsonSync(file);
		allProjectsLong.posts.push(projectJson);
		let projectJsonShort = Object.assign({}, projectJson);		    
		delete projectJsonShort.body;
		allProjectsShort.posts.push(projectJsonShort);
	    });
            fs.writeJsonSync(projectsStaticPathLong, allProjectsLong);
            fs.writeJsonSync(projectsStaticPathShort, allProjectsShort);
	});
}
