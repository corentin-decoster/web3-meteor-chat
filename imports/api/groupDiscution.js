import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';


export const GroupsDiscutionCollection = createCollection({ 
    name: 'groupsDiscution',
    schema: new SimpleSchema({
        group_name: {
            type: String,
        },
        created_by_user: {
            type: String,
        },
        //type integer ??
        nb_messages: {
            type: Int32Array
        },
    }),
});