import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { ChevronDown } from 'react-native-iconly'

const StockDown = (props: any) => {
    return (

        <View style={styles.container}>
            <ChevronDown set="bold" primaryColor="red" />
            <Text style={styles.txtStock}>
                193
            </Text>
        </View>
    )
}

export default StockDown

const styles  =  StyleSheet.create({
    container:{
        display: 'flex', flexDirection: 'row', alignItems: 'center'
    },
    txtStock:{
        fontSize: 14, color: 'red', fontFamily: 'PoppinSemiBold' 
    }
})