import { LoadGroups } from "../groups/data/loadGroups";

//Meteor.startup allows Meteor to use those methods when we launch it
Meteor.startup( () => {
    LoadGroups();
});