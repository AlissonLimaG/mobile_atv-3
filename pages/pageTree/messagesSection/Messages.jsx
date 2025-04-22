import { Text, View, StyleSheet } from 'react-native';
import Message from './message/Message';
import messagesData from './messageData';


export default Messages = () => {

    return (

        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text>Mark All Read</Text>
                <Text>Sort by time</Text>
            </View>

            <View style={styles.messagesContainer}>
                {messagesData.map((message, index) => (
                    <Message key={index} data={message}/>
                ))}
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        paddingTop: 8,
        paddingHorizontal: 16,
        backgroundColor: 'whitesmoke',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    titleContainer: {
        paddingTop:8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messagesContainer:{
        paddingTop:16,
        paddingBottom:8,
        rowGap:8
    }

});