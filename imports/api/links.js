import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';

const PlayerSchema = new SimpleSchema( { 
    name: {
        type: String,
    },
    age: {
        type: SimpleSchema.Integer,
    },

});

export const PlayerCollection = createCollection({ 
    name: 'players',
    schema: PlayerSchema,
});