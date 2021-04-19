export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607cf789e2520278d4d09df0',
                  title: 'Sanity Studio',
                  name: 'nextjs-landing-pages-studio-rvwrm3zc',
                  apiId: 'd950db3b-25cc-490c-a9fe-fce16b38f003'
                },
                {
                  buildHookId: '607cf7893d1282da41f48cf6',
                  title: 'Landing pages Website',
                  name: 'nextjs-landing-pages-web-fbya6pmy',
                  apiId: 'f54fb422-e042-41f6-8b51-11886c8af299'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/h4rtomo/nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-landing-pages-web-fbya6pmy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
