import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ArrowUpSquare } from 'react-native-iconly';
import ArrowUp from '../../assets/icons/ArrowUp';

const Stock = (props: any) => {

    let { color, backgroundColor , heading , value , percentage } = props

    return (
        <View style={styles(props).container}>
            <View>
                <Text style={styles(props).txtHeading}>
                    {heading}
                </Text>
            </View>

            <View style={styles(props).numberContainer}>
                <Text style={styles(props).txtNumber}>
                    {value}
                </Text>
            </View>

            <View style={styles(props).indicatorContainer} >
                <View style={styles(props).indicatorView}>
                    <ArrowUp color={color} />
                    <Text style={styles(props).txtPercentage}>
                       {percentage}
                    </Text>
                </View>
            </View>


        </View>
    )
}

const styles = (props: any) => StyleSheet.create({
    container: {
        width: '45%'
    },
    txtHeading: {
        fontSize: 18,
        color: 'grey',
        fontWeight: '600',
        fontFamily:'PoppinSemiBold'
    },
    numberContainer: {
        paddingTop: 10
    },
    txtNumber: {
        fontSize: 34,
        fontFamily:'PoppinSemiBold',
        fontWeight: '600'
    },
    indicatorContainer: {
        paddingTop: 10
    },
    indicatorView: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: '55%',
        padding: 3,
        borderRadius: 10,
        backgroundColor: props.backgroundColor
    },
    txtPercentage: {
        fontSize: 12,
        fontWeight: '600',
        fontFamily:'PoppinSemiBold',
        color: props.color
    }

});

export default Stock