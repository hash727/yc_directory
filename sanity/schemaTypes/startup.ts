
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: 'StartUps',
    type: 'document',
    fields: [
        defineField({
            name:'title',
            type: 'string',
        }),
        defineField({
            name:'slug',
            type: 'slug',
            options: {
                source: 'title' //for ex 'This is a great title' -> 'This-is-a-great-title'
            }
        }),
        defineField({
            name:'author',
            type: 'reference',
            to: {type: 'author'}
        }),
        defineField({
            name:'views',
            type: 'number',
        }),
        defineField({
            name:'description',
            type: 'text',
        }),
        defineField({
            name:'category',
            type: 'string',
            validation: (Rule) => Rule.min(1).max(20).required().error("Please enter a category"),
        }),
        defineField({
            name:'image',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'pitch',
            type: 'markdown',
        }),
    ],
   
})