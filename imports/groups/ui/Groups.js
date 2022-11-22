import { useEffect, useState } from "react";
import { methodCall } from "../../infra/methodCall";
import { loggerClient } from 'meteor/quave:logs/loggerClient';

export const Groups = () => {
    const [groups, setGroups] = useState( []);
    useEffect( () => {
        methodCall('groups')
        .then(data => {
            console.log('groups',groups);
            setGroups(data);
        })
        .catch(e => loggerClient.error({message: 'Error getting groups', error})
        );
    }, []);

    if(!groups){
        return 'loading ...';
    }

    if (!groups.length){
        return 'no groups yet';
    }

    return (
        <ul>
            {groups.map(group => (
                <li key={group._id}>{group.group_name}</li>
            ))}
        </ul>
    );
};