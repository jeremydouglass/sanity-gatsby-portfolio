export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f3ad19f972b8a0163d54615',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ej81pox1',
                  apiId: '01acd7fa-6633-466c-b01e-1bb4bbf5bef1'
                },
                {
                  buildHookId: '5f3ad19f818927a5e70b257c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cs3ojnia',
                  apiId: '3c7b67ec-72c8-4d8c-8bc8-0264a9015f68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeremydouglass/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cs3ojnia.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
