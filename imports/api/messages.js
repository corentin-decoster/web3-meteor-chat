import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';


export const MessagesCollection = createCollection({ 
    name: 'messages',
    schema: new SimpleSchema({
        content: {
            type: String,
        },
        user_ID: {
            type: String,
        },
        group_discution: {
            type: String,
        }
    }),
});