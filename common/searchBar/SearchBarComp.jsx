import React from 'react';
import { SearchBar } from 'react-native-elements';

export default function SearchBarComp() {
    return (
        <SearchBar
            placeholder="Type Here..."
            containerStyle={{
                backgroundColor:'transparent', 
                padding:0, 
                borderRadius:32,
                marginLeft:12,
                marginTop:8,
                width:'95%'
            }}
            inputContainerStyle={{backgroundColor:'whitesmoke', borderRadius:32}}
            inputStyle={{backgroundColor:'whitesmoke', borderRadius:32}}
        />
    );
}