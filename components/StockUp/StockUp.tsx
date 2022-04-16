import React from 'react'
import { View , Text , StyleSheet} from 'react-native'
import { ChevronUp } from 'react-native-iconly'

const StockUp = (props: any) => {
    return (
        <View style={styles.container}>
            <ChevronUp set="bold" primaryColor="green" />
            <Text style={styles.txtStock}>
                193
            </Text>
        </View>
    )
}

export default StockUp

const styles  =  StyleSheet.create({
    container:{
        display: 'flex', flexDirection: 'row', alignItems: 'center'
    },
    txtStock:{ 
        fontSize: 14, color: 'green', fontFamily: 'PoppinSemiBold'
    }
})