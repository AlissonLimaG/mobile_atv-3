import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import CategorieIcon from './categorieIcon/CategorieIcon';


export default Categories = () => {

    const categories = [
        {iconName:'hotel', label:'Hotel'},
        {iconName:'utensils', label:'Menu'},
        {iconName:'swimming-pool', label:'Pool'},
        {iconName:'swimmer', label:'Swimmer'},
        {iconName:'umbrella-beach', label:'Beach'},
        {iconName:'spa', label:'Spa'},
        {iconName:'key', label:'bedroom'},
        {iconName:'car', label:'Car Rent'},
    ]

    return (
        <View style={styles.container}>

            <View style={styles.categoriesTitleContainer}>
                <Text>
                    Categories
                </Text>
                <Icon
                    name='bars'
                    size={32}
                    type='font-awesome-5'
                />
            </View>

            <View style={styles.categoriesIconsContainer}>
                {categories.map( (categorie, index) => (
                    <CategorieIcon key={index} data={categorie}/>
                ))}
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'white',
        paddingHorizontal:16,
        paddingVertical:8
    },
    categoriesTitleContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    categoriesIconsContainer:{
        marginTop:16,
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        columnGap:8,
        rowGap:32
    }

});