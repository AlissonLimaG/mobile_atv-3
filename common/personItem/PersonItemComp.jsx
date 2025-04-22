import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';

export default function PersonItemComp({ data }) {
    return (
        <ListItem
            containerStyle={{ backgroundColor: 'transparent', margin:0, padding:0 }}
        >
            <Avatar
                size={data.avatarSize}
                rounded
                icon={{ name: 'person' }}
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />
            <ListItem.Content>

                <ListItem.Title style={{ color: 'whitesmoke', fontSize:18, fontWeight:'600' }}>
                    {data.title}
                </ListItem.Title>

                <ListItem.Subtitle style={{ color: 'whitesmoke', fontSize:14 }}>
                    {data.name}
                </ListItem.Subtitle>

            </ListItem.Content>

        </ListItem>
    );
}