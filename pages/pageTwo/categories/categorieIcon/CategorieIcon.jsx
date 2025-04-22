import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


export default CategorieIcon = ({data}) => {

    return (

        <TouchableOpacity style={styles.categoryContainer}>

            <View style={styles.iconContainer}>
                <Icon
                    size={32}
                    name={data.iconName}
                    type='font-awesome-5'
                    color={'white'}
                />
            </View>

            <Text>
                {data.label}
            </Text>

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    categoryContainer:{
        width:'calc(100%/4 - 16px)',
        aspectRatio:1,
        backgroundColor:'transparent',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    iconContainer:{
        backgroundColor:'#D84727',
        width:'100%',
        aspectRatio:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50%'
    }

});