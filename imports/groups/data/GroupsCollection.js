import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';


export const GroupsCollection = createCollection({ 
    name: 'groups',
    schema: new SimpleSchema({
        group_name: {
            type: String,
        },
        created_by_user: {
            type: String,
        },
        //type integer ??
        nb_messages: {
            type: SimpleSchema.Integer,
        },
    }),
});