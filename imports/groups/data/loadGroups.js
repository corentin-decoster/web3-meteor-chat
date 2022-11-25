import { GroupsCollection } from "./GroupsCollection"

export const LoadGroups = () => {
    if(GroupsCollection.find().count()){
        return;
    }
    GroupsCollection.insert({group_name: 'Groupe Test 1', created_by_user: '1', nb_messages: 0});
    GroupsCollection.insert({group_name: 'Groupe Test 2', created_by_user: '1', nb_messages: 0});
    GroupsCollection.insert({group_name: 'Groupe Test 3', created_by_user: '2', nb_messages: 0});
    GroupsCollection.insert({group_name: 'Groupe Test 4', created_by_user: '3', nb_messages: 0});

}