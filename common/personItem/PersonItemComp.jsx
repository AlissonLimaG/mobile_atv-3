import React, { useEffect, useInsertionEffect, useState } from 'react';
import { Avatar, ListItem } from 'react-native-elements';

export default function PersonItemComp({ data }) {

    return (
        <ListItem
            containerStyle={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
        >
            <Avatar
                size={48}
                rounded
                icon={{ name: 'person' }}
                source={{
                    uri: data.image ? data.image : "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                }}
            />
            <ListItem.Content>

                <ListItem.Title style={{ color: 'whitesmoke', fontSize: 18, fontWeight: '600' }}>
                    Bem vindo(a)!
                </ListItem.Title>

                <ListItem.Subtitle style={{ color: 'whitesmoke', fontSize: 14 }}>
                    {data.name}
                </ListItem.Subtitle>

            </ListItem.Content>

        </ListItem>
    );
}