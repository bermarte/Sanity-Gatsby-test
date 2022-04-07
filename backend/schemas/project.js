export default {
    title: 'project',
    name: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
            options: {
                source: 'title',
                maxLength: 96,
              },
        },
        {
            name: 'image',
            title: 'Project screenshot',
            type: 'image',
            options: {
                 hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        }
    ],
    // TODO: Add preview
}