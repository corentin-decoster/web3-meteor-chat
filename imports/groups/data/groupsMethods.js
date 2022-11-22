import { Meteor } from 'meteor/meteor';
import { GroupsCollection } from "./GroupsCollection";

Meteor.methods({
    groupsDiscution(){
        return GroupsCollection.find().fetch();
    },
});