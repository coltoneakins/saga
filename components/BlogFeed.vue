<template>
  <article class="blog-feed">

    <div class="level">
      <div class="level-left">

        <article class="blog-feed__tags">
          <h2 class="subtitle is-5">Select a category below:</h2>
          <ul class="tags">
            <nuxt-link to="/blog">
              <li class="tag">all</li>
            </nuxt-link>
            <nuxt-link
              v-for="(tag, index) in categories"
              :key="'category_' + index"
              :to="'/blog/category/' + tag">
              <li
                class="tag">{{ tag }}</li>
            </nuxt-link>
          </ul>
        </article>
      </div>
      <div class="level-right">
        <a href="/rss.xml">
          <div class="blog-feed__rss-icon has-text-centered">
            <svg
              role="img"
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:ev="http://www.w3.org/2001/xml-events"
              viewBox="0 0 150 150">
              <path d="m38.609 130.68a19.286 19.286 0 0 1-19.286 19.286 19.286 19.286 0 0 1-19.286-19.286 19.286 19.286 0 0 1 19.286-19.286 19.286 19.286 0 0 1 19.286 19.286zm82.637 16.946c0-5.9224-0.98296-14.794-2.418-21.824-3.3792-16.554-10.043-31.937-19.879-45.887-6.6164-9.3842-15.582-18.705-25.114-26.106-1.6288-1.2649-3.1923-2.4212-3.4744-2.5697-0.28213-0.14845-0.56687-0.34032-0.63277-0.42638-0.11239-0.14679-0.60276-0.48377-4.5527-3.1286-6.1798-4.1379-17.439-9.6078-25.399-12.34-12.071-4.1427-25.395-6.5737-36.092-6.5853-1.2026-1e-3 -2.5235-0.0698-2.9353-0.15213l-0.7488-0.14976v-28.529l4.1334 0.16255c16.241 0.63869 29.711 3.0745 44.269 8.0055 6.2624 2.1211 13.419 5.1573 19.768 8.3873 8.2311 4.187 16.709 9.626 24.235 15.548 0.80906 0.63666 1.8873 1.4749 2.3962 1.8627 0.50883 0.38784 1.033 0.82185 1.1648 0.96445 0.13179 0.14261 1.3718 1.2225 2.7556 2.3997 3.2464 2.7618 11.562 11.09 14.002 14.022 1.0416 1.252 2.0132 2.3842 2.1591 2.516s1.299 1.5336 2.5624 3.115c2.0057 2.5106 2.8369 3.6198 5.1188 6.831 1.611 2.267 5.2233 7.8183 6.2747 9.6426 0.4367 0.75779 1.1816 2.0517 1.6554 2.8754 2.7485 4.7784 6.7144 12.967 8.3845 17.312 0.4559 1.1861 1.0028 2.5339 1.2153 2.9952 0.21253 0.46126 0.97184 2.5639 1.6874 4.6725 4.9695 14.645 7.4988 28.542 8.1336 44.687l0.16018 4.0746h-28.829zm-51.038 0.61096c0-2.1765-0.61583-8.2692-1.0809-10.694-2.4482-12.764-7.2773-23.047-15.359-32.708-8.4229-10.068-19.443-17.56-31.842-21.65-6.8285-2.2524-12.639-3.224-21.625-3.6162-0.23612-0.0103-0.29952-3.0379-0.29952-14.304v-14.291l3.8938 0.16396c14.308 0.60248 28.239 4.2295 40.795 10.621 19.065 9.705 34.904 25.802 44.181 44.9 4.6722 9.6192 7.4087 18.481 8.9984 29.14 0.55492 3.721 1.0864 10.08 1.0921 13.065l2e-3 1.1382h-28.754z"/>
            </svg>
            <p>RSS Feed</p>
          </div>
        </a>
      </div>
    </div>



    <article class="blog-feed__posts">
      <transition-group
        name="slide-fade"
        tag="div">
        <div
          v-for="(post, index) in feed"
          :key="'post_' + index"
          class="box blog-feed__post">
          <nuxt-link :to="'/blog/post/' + post.slug">
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
      <transition
        name="slide-fade">
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
            posts: posts.posts,
            feed: []
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
            return require('~/static/images/uploads/' + filename);
        },
        sortFeed() {
            if(this.filter) {
                if(this.filter.type === 'tag') {
                    return this.feed = this.posts.filter(post => Boolean(post.tags.find(tag => tag === this.filter.slug)));
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
    font-weight: bold;
    font-size: 1em;
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
.blog-feed__rss-icon svg {
    width: 25px;
    height: 25px;
    fill: #363636;
}
.blog-feed__rss-icon p {
    color: #363636;
}
.blog-feed__rss-icon:hover {
    opacity: 0.5;
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
    transform: translateY(-100px);
}
.slide-fade-enter-active {
    transition: all 1s ease-in-out;
}
.slide-fade-leave-active {
    transition: all 0.5s ease-in-out, opacity 0.25s ease-in-out;
}
.slide-fade-move {
  transition: transform 1s ease-in-out;
}
</style>
