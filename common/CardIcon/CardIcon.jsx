import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function CategorieIcon({ data }) {
    return (
        <TouchableOpacity
            style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex:'1 1 calc(100%/3 - 8px)',
                aspectRatio:'1/1',
                backgroundColor: data.background,
                borderRadius: 8,
                boxShadow: data.boxShadow 
                            ?'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
                            : '0 0 0 transparent'
            }}
        >
            <Icon
                name={data.icon}
                type='font-awesome-5'
                size={32}   
                color={data.color}
            />
            <Text style={{marginTop:4, color:data.color}}>
                {data.name}
            </Text>

        </TouchableOpacity>

    );
}