import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';


export const UsersCollection = createCollection({ 
    name: 'users',
    schema: new SimpleSchema({
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        email: {
            type: String,
        },
        //has to be unique
        pseudo: {
            type: String    
        },
    }),
});