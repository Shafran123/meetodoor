import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ArrowLeft, ChevronLeft, Heart } from 'react-native-iconly'
import { SafeAreaView } from 'react-native-safe-area-context'

function ScreenTwo() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderColor: 'lightgrey', borderWidth: 2, borderRadius: 10 }}>
                    <ChevronLeft set="light" stroke='bold' primaryColor="black" />
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, backgroundColor: 'white', borderRadius: 10 }}>
                    <Heart set="bold" primaryColor="#F3662A" />
                </View>
            </View>

            <View style={{ backgroundColor: 'red', height: 260 }}>
                {/* <Text style={{position: 'absolute',top: 100, left: 120, zIndex: 1000, fontSize : 100}}>
                    AIR
                </Text> */}
                <Image style={{ resizeMode: 'cover', height: '100%', width: '100%' }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png' }} />
            </View>


            <View style={{ justifyContent: 'center', flexDirection: 'row' , marginTop: 20}}>
                <View style={{ width: '85%', justifyContent: 'space-evenly', display: 'flex' , flexDirection: 'row' }}>

                    <View style={{ height: 70, width: 70, borderWidth: 2, borderColor: '#F3662A', borderRadius: 10 }}>
                        <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png' }} />
                    </View>


                    <View style={{ height: 70, width: 70, borderWidth: 2, borderColor: '#F3662A', borderRadius: 10 }}>
                        <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d72512e5-7c88-4473-9263-1cabb53a6411/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png' }} />
                    </View>

                    <View style={{ height: 70, width: 70, borderWidth: 2, borderColor: '#F3662A', borderRadius: 10 }}>
                        <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/03cb3532-40b7-4bc3-ae40-2325098dcef5/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png' }} />
                    </View>


                    <View style={{ height: 70, width: 70, borderWidth: 2, borderColor: '#F3662A', borderRadius: 10 }}>
                        <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d6781257-4ced-47d2-a2e7-4749b294f33f/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png' }} />
                    </View>



                </View>

            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#F8F8F8'
    },
})

export default ScreenTwo