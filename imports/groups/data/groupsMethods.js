import { Meteor } from 'meteor/meteor';
import { GroupsCollection } from "./GroupsCollection";

Meteor.methods({
    groups(){
        return GroupsCollection.find().fetch();
    },
});