<template>
  <article class="blog-feed">

    <article class="blog-feed__tags">
      <h2 class="subtitle is-5">Select a category below:</h2>
      <ul class="tags">
        <nuxt-link to="/blog">
          <li class="tag">all</li>
        </nuxt-link>
        <nuxt-link
          v-for="(tag, index) in categories"
          :key="'category_' + index"
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
          v-for="(post, index) in posts"
          :key="'post_' + index"
          class="box blog-feed__post">
          <nuxt-link :to="'/blog/page/' + post.slug">
            <article>
              <div class="columns">
                <div class="column is-3 is-12-mobile">
                  <div class="blog-feed__post-thumbnail">

                    <img
                      v-if="post.thumbnail"
                      :alt="post.altText"
                      :src="blogImageToStaticPath(post.thumbnail)">
                  </div>
                </div>
                <div class="column is-9 is 12-mobile">
                  <div class="blog-feed__post-content">
                    <div class="title is-5">{{ post.title }}</div>
                    <div class="subtitle is-6">{{ post.description }}</div>
                    <div class="subtitle is-6">By Colton Eakins // Published {{ post.date }}</div>
                  </div>
                  <div class="blog-feed__post-tags">
                    <ul class="tags">
                      <li
                        v-for="(tag, index) in post.tags"
                        :key="'tag_' + index"
                        class="tag">{{ tag }}</li>
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
import posts from '~/static/posts/all/all-posts-short.json'

export default {
    props: {
        filter: {
            default: () => ({}),
            type: Object
        }
    },
    data: function() {
        return {
            categories: ['html', 'css', 'js', 'python', 'emacs', 'web-scraping', 'vue'],
            posts: posts.posts
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
        blogImageToStaticPath(thumbnail) {
            // https://github.com/vuejs-templates/webpack/issues/126
            let filename = thumbnail.split('/').slice(-1)[0];
            return require('~/static/images/thumbnails/' + filename);
        },
        sortFeed() {
            if(this.filter) {
                if(this.filter.type === 'tag') {
                    return this.posts = this.posts.filter(post => Boolean(post.tags.find(tag => tag === this.filter.slug)));
                } else if(this.filter.type === 'post') {
                    return this.posts = this.posts.filter(post => post.slug === this.filter.slug);
                } else {
                    return this.posts = this.posts;
                }
            } else {
                return this.posts = this.posts;
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
