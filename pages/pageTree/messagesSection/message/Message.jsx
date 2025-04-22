import { Text, View, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';


export default Message = ({ data }) => {

    return (

        <ListItem containerStyle={{ borderRadius: 8, padding: 10 }}>
            <Avatar
                rounded
                size={48}
                source={{ uri: data.image }}
            />
            <ListItem.Content style={styles.messageContentStyle}>

                <View>
                    <ListItem.Title>{data.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {
                            data.message.length > 18
                                ? data.message.slice(0, 18) + '...'
                                : data.message
                        }
                    </ListItem.Subtitle>
                </View>

                <View style={styles.messageStatusContainer}>
                    <View style={[
                        styles.quantMessagesContainer,
                        data.quantMessages == 0 ?{backgroundColor:'white'} :null
                    ]}>
                        <Text style={{ margin: 'auto', fontWeight: '600', color: 'white' }}>
                            {data.quantMessages}
                        </Text>
                    </View>
                    <ListItem.Subtitle>{data.time}</ListItem.Subtitle>
                </View>

            </ListItem.Content>
        </ListItem>

    );

}

const styles = StyleSheet.create({

    messageContentStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messageStatusContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    quantMessagesContainer: {
        width: 23,
        aspectRatio: 1,
        backgroundColor: '#8DAB7F',
        borderRadius: '50%',
        marginLeft: 'auto'
    }

});