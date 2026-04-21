import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'showAuthor',
      title: 'Show Author Name',
      type: 'boolean',
      description: 'Toggle to show or hide the author’s name in the post.',
      initialValue: true, // Default: Show author name
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Arabic', value: 'ar'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'مقتطف قصير يعرض في قائمة المقالات وفي SEO',
      validation: (Rule) => Rule.max(250).warning('يفضل أن يكون المقتطف أقل من 250 حرفًا.'),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    // قسم SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description:
            'العنوان المستخدم لتحسين محركات البحث. إذا لم يُدخل، سيتم استخدام عنوان المقال.',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'وصف قصير يُستخدم لتحسين محركات البحث ومعاينات مواقع التواصل الاجتماعي.',
        }),
        defineField({
          name: 'metaKeywords',
          title: 'Meta Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'الكلمات المفتاحية لتحسين محركات البحث. يُفضل فصل كل كلمة بفاصلة.',
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'الرابط الأساسي (Canonical) لهذا المقال لتجنب مشاكل المحتوى المكرر.',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
