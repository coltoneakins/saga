<template>
  <article class="portfolio-feed">

    <div class="level">
      <article class="portfolio-feed__tags">
        <h2 class="subtitle is-5">Select a category below:</h2>
        <ul class="tags">
          <nuxt-link to="/portfolio">
            <li class="tag">all</li>
          </nuxt-link>
          <nuxt-link
            v-for="(tag, index) in categories"
            :key="'category_' + index"
            :to="'/portfolio/category/' + tag">
            <li
              class="tag">{{ tag }}</li>
          </nuxt-link>
        </ul>
      </article>
    </div>



    <article class="portfolio-feed__projects">
      <transition-group
        name="slide-fade"
        tag="div"
        class="tiles">
        <article
          v-for="(project, index) in feed"
          :key="'project_' + index"
          class="tile is-4 portfolio-feed__project box">
          <nuxt-link :to="'/portfolio/project/' + project.slug">
            <img
              v-if="project.thumbnail"
              :alt="project.altText"
              :src="portfolioImageToStaticPath(project.thumbnail)">
            <div class="portfolio-feed__project-content">
              <div class="title is-5">{{ project.title }}</div>
              <div class="subtitle is-6">{{ project.description }}</div>
              <div class="subtitle is-6">Published {{ project.date }}</div>
            </div>
            <div class="portfolio-feed__project-tags">
              <ul class="tags">
                <li
                  v-for="(tag, index) in project.tags"
                  :key="'tag_' + index"
                  class="tag">{{ tag }}</li>
              </ul>
            </div>
          </nuxt-link>
        </article>
      </transition-group>
    </article>


    <transition name="slide-fade">
      <div
        v-if="feed.length === 0"
        class="portfolio-feed__project-notification notification is-warning has-text-centered">
        <p>No projects found.</p>
      </div>
    </transition>

  </article>
</template>

<script>
import projects from '~/static/projects/all/all-projects-short.json'

export default {
    props: {
        filter: {
            default: () => ({}),
            type: Object
        }
    },
    data: function() {
        return {
            categories: ['css', 'js', 'python', 'emacs', 'web-scraping', 'scrapy'],
            projects: projects.projects,
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
        portfolioImageToStaticPath(thumbnail) {
            // https://github.com/vuejs-templates/webpack/issues/126
            let filename = thumbnail.split('/').slice(-1)[0];
            return require('~/static/images/uploads/' + filename);
        },
        sortFeed() {
            if(this.filter) {
                if(this.filter.type === 'tag') {
                    return this.feed = this.projects.filter(project => Boolean(project.tags.find(tag => tag === this.filter.slug)));
                } else if(this.filter.type === 'project') {
                    return this.feed = this.projects.filter(project => project.slug === this.filter.slug);
                } else {
                    return this.feed = this.projects;
                }
            } else {
                return this.feed = this.projects;
        }
      }
    }
}
</script>

<style>
.portfolio-feed__tags {
    margin-top: 15px;
    margin-bottom: 15px;
}
.portfolio-feed__tags .tags > a {
    margin-right: 10px;
}
.portfolio-feed__tags a:first-child .tag {
    background-color: #CCCB80;
    color: #363636;
}
.portfolio-feed__tags .tag {
    font-weight: bold;
    font-size: 1em;
    background-color: #363636;
    color: #fff;
}
.portfolio-feed__tags .nuxt-link-exact-active .tag {
    background-color: #23D160;
}
.portfolio-feed__project-tags .tags {
    text-align: right;
}
.portfolio-feed__project-tags {
    margin-top: 15px;
}
.portfolio-feed__project-thumbnail img {
    width: 300px;
    height: 150px;
    object-fit: contain;
    object-position: center center;
}
.portfolio-feed__project-notification {
    max-width: 500px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
}


/*
  Transition for Feed: slide-fade
*/
.portfolio-feed__project {
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
