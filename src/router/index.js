import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/ProjectList'
import ProjectPage from '@/components/ProjectPage'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default function(projects) {
  const pages = projects.map(project => {
    project.thumbnail = 'images/thumbnails/' + project.baseUrl + '.png';
    project.route = '/projects/' + project.baseUrl;
    project.articleUrl = process.env.BASE_URL + 'articles/' + project.baseUrl + '.yaml';
    return {
      path: project.route,
      name: 'projects/' + project.baseUrl,
      component: ProjectPage,
      props: {
        project: project
      }
    }
  });
  return new Router({
    routes: [
      {
        path: '/',
        name: "ProjectList",
        component: ProjectList,
        props: {
          projects: projects
        }
      },
      {
        path: '/404',
        component: NotFound,
      },
      {
        path: '*',
        redirect: '/404'
      }
    ].concat(pages)
  })
}