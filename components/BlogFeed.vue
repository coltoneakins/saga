<template>
  <article class="blog-feed">

    <p>{{ allPosts }}</p>

    <article class="blog-feed__tags">
      <h2 class="subtitle is-5">Select a category below:</h2>
      <ul class="tags">
        <nuxt-link to="/blog">
          <li class="tag">all</li>
        </nuxt-link>
        <nuxt-link
          v-for="tag in categories"
          :key="tag.id"
          :to="'/blog/category/' + tag.text">
          <li
            class="tag">{{ tag.text }}</li>
        </nuxt-link>
      </ul>
    </article>

    <article class="blog-feed__posts">
      <transition-group
        name="slide-fade"
        tag="div">
        <div
          v-for="post in feed"
          :key="post.id"
          class="box blog-feed__post">
          <nuxt-link :to="post.path">
            <article>
              <div class="columns">
                <div class="column is-3 is-12-mobile">
                  <div class="blog-feed__post-thumbnail">
                    <img
                      :alt="post.altText"
                      :src="webpackImageToStaticPath(post.thumbnail)">
                  </div>
                </div>
                <div class="column is-9 is 12-mobile">
                  <div class="blog-feed__post-content">
                    <div class="title is-5">{{ post.title }}</div>
                    <div class="subtitle is-6">{{ post.description }}</div>
                    <div class="subtitle is-6">By {{ post.author }} // Published {{ post.published }}</div>
                  </div>
                  <div class="blog-feed__post-tags">
                    <ul class="tags">
                      <li
                        v-for="tag in post.categories"
                        :key="tag.id"
                        class="tag">{{ tag.text }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </nuxt-link>
        </div>
      </transition-group>
      <transition name="slide-fade">
        <div
          v-if="feed.length === 0"
          class="blog-feed__post-notification notification is-warning has-text-centered">
          <p>No posts found.</p>
        </div>
      </transition>
    </article>

  </article>
</template>

<script>
import allPosts from '~/static/posts/all/all-posts-long.json'

export default {
    props: {
        filter: {
            default: () => ({}),
            type: Object
        }
    },
    data: function() {
        return {
            feed: [],
            categories: [
                {id: 0, text: 'html'},
                {id: 1, text: 'css'},
                {id: 2, text: 'js'},
                {id: 3, text: 'python'},
                {id: 4, text: 'emacs'},
                {id: 5, text: 'web-scraping'},
                {id: 6, text: 'vue'}
            ],
            posts: [
                //{id: 0, title: '', slug: '', description: '', author: '', published: '', thumbnail: '', altText: '', path: '', categories: [{}]},
                {id: 0, title: 'Post 1', slug: 'post1', description: 'Description of Post 1', author: 'Colton Eakins', published: 'Jan. 2, 2019', thumbnail: 'python.png', altText: 'Python logo', path: '/blog/post/post1', categories: [{id: 0, text: 'python'}]},
                {id: 1, title: 'Post 2', slug: 'post2', description: 'Description of Post 2', author: 'Colton Eakins', published: 'Jan. 3, 2019', thumbnail: 'sass.jpg', altText: 'Sass logo', path: '/blog/post/post2', categories: [{id: 0, text: 'html'}, {id: 1, text:'css'}]},
                {id: 2, title: 'Post 3', slug: 'post3', description: 'Description of Post 3', author: 'Colton Eakins', published: 'Jan. 4, 2019', thumbnail: 'js.jpg', altText: 'JavaScript logo', path: '/blog/post/post3', categories: [{id: 0, text: 'js'}, {id: 1, text:'vue'}]},
            ],
            allPosts: allPosts
        }
    },
    watch: {
      $route: function(to, from) {
        this.sortFeed();
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // Run the sortFeed function when the component is mounted to create
        // the initial feed with all posts (unfiltered).
        this.sortFeed();
      })
    },
    methods: {
        webpackImageToStaticPath(thumbnail) {
            // https://github.com/vuejs-templates/webpack/issues/126
            return require('~/static/images/thumbnails/' + thumbnail);
        },
        sortFeed() {
            if(this.filter) {
                if(this.filter.type === 'tag') {
                    return this.feed = this.posts.filter(post => Boolean(post.categories.find(tag => tag.text === this.filter.slug)));
                } else if(this.filter.type === 'post') {
                    return this.feed = this.posts.filter(post => post.slug === this.filter.slug);
                } else {
                    return this.feed = this.posts;
                }
            } else {
                return this.feed = this.posts;
        }
      }
    }
}
</script>

<style>
.blog-feed__tags {
    margin-top: 15px;
    margin-bottom: 15px;
}
.blog-feed__tags .tags > a {
    margin-right: 10px;
}
.blog-feed__tags a:first-child .tag {
    background-color: #CCCB80;
    color: #363636;
}
.blog-feed__tags .tag {
    background-color: #363636;
    color: #fff;
}
.blog-feed__tags .nuxt-link-exact-active .tag {
    background-color: #23D160;
}
.blog-feed__post-tags .tags {
    text-align: right;
}
.blog-feed__post-tags {
    margin-top: 15px;
}
.blog-feed__post-thumbnail img {
    width: 300px;
    height: 150px;
    object-fit: contain;
    object-position: center center;
}
.blog-feed__post-notification {
    max-width: 500px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
}

/*
  Transition for Feed: slide-fade
*/
.blog-feed__post {
    transition: all 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}
.slide-fade-enter {
    transform: translateY(-100px);
}
.slide-fade-leave-to {
    transform: translateX(-100px);
}
.slide-fade-enter-active {
    transition: all 1s ease-in-out;
}
.slide-fade-leave-active {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transition: all 0.5s ease-in-out, opacity 0.25s ease-in-out;
}
.slide-fade-move {
  transition: transform 1s ease-in-out;
}
</style>
