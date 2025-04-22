import React from 'react';
import { SearchBar } from 'react-native-elements';

export default function SearchBarComp({data}) {
    return (
        <SearchBar
            placeholder="Type Here..."
            containerStyle={{
                backgroundColor:'transparent', 
                padding:0, 
                borderRadius:data.borderR,
                width: data.width,
                borderTopWidth:0,
                borderBottomWidth:0,
                height:38
            }}
            inputContainerStyle={{backgroundColor:'whitesmoke', borderRadius:data.borderR, height:38, borderWidth:0}}
            inputStyle={{backgroundColor:'whitesmoke', borderRadius:data.borderR, borderWidth:0
            }}
        />
    );
}