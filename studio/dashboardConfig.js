export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '622e40ffa3e4764ae57380b2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7dsn142o',
                  apiId: 'cd5935ba-2716-4916-b6bb-b3a889fa1375'
                },
                {
                  buildHookId: '622e4100a59bc92a2be3df87',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6gz62amm',
                  apiId: '4c33445b-8333-4b07-a250-f8a31a0a5c5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/allinallin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6gz62amm.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
