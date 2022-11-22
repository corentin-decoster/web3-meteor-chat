import { Meteor } from 'meteor/meteor';
import { GroupsDiscutionCollection } from '../imports/api/groupDiscution';
import { MessagesCollection } from '../imports/api/messages';
import { UsersCollection } from '../imports/api/users';






Meteor.startup(async () => {

  const userID = UsersCollection.insert({first_name:'jhon',last_name:'foo',email:'jhon@foo.com',pseudo:'jhonf'});

  const group_discution = GroupsDiscutionCollection.insert({group_name: 'Groupe test 1', created_by_user: userID,nb_message: 0});

  MessagesCollection.insert({content: 'Ceci est un message test',userID,group_discution});
  
});

