import React from 'react'
import { View, Text, Image , StyleSheet, TouchableOpacity } from 'react-native'
import { ChevronDown, ChevronRight, ChevronUp } from 'react-native-iconly'
import StockDown from '../StockDown/StockDown'
import StockUp from '../StockUp/StockUp'

const ProductItem = (props: any) => {
    console.log(props);
    
    let { data , onPress } = props

    return (
        <TouchableOpacity onPress={onPress} style={styles(data).container}>
            <View style={styles(data).itemLeftContainer}>
                <View>
                    <View style={styles(data).imageWrapper}>
                        <Image style={styles(data).imgItem} source={{ uri: 'https://www.pngitem.com/pimgs/m/18-187487_french-fries-icon-fries-emoji-hd-png-download.png' }} />
                    </View>
                </View>
                <View style={styles(data).itemContentContainer}>
                    <Text style={styles(data).txtItemHeading} >
                        {data.item.title}
                    </Text>
                    <View  style={styles(data).itemSotckWrapper}>
                        <StockUp />

                        <View style={styles(data).spacer}>

                        </View>

                        <StockDown />
                    </View>

                </View>
            </View>

            <View>
                <ChevronRight set="light" stroke='bold' primaryColor="grey" />
            </View>



        </TouchableOpacity>
    )
}

export default ProductItem


const styles  = (props:any) => StyleSheet.create({
    

    container:{
        marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    itemLeftContainer:{
        height: 60, flexDirection: 'row', alignItems: 'center'
    },
    imageWrapper:{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, width: 50, borderRadius: 90, backgroundColor: props.item.color 
    },
    imgItem:{
        width: 20, height: 20 
    },
    itemContentContainer:{
        paddingLeft: 20 
    },
    txtItemHeading:{
        fontSize: 18, fontWeight: '600', paddingBottom: 10, fontFamily: 'PoppinSemiBold'
    },
    itemSotckWrapper:{
        flexDirection: 'row'
    },
    spacer:{
        width: 20
    }
})