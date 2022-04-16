import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Platform } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ArrowLeft, Buy, ChevronLeft, Heart, Star, TickSquare } from 'react-native-iconly'
import { Modalize } from 'react-native-modalize';
import { SafeAreaView } from 'react-native-safe-area-context'

import { TouchableOpacity as guesterTouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacity as reactTouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const TouchableOpacity = Platform.OS === 'ios' ? reactTouchableOpacity : guesterTouchableOpacity;

function ShowDetailScreen() {

    let data = {
        name: 'NIKE AIR MAX 200',
        price: '240',
        primaryImage: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png',
        description: "Running is your daily ritual, with every step taking you closer to your personal goal. Let the Nike Air Zoom Pegasus 39 help you ascend to new heights—whether you're training or jogging—with its intuitive design. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly",
        additionalImages: [
            {
                alt: 'Image 1',
                uri: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png'
            },
            {
                alt: 'Image 2',
                uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d72512e5-7c88-4473-9263-1cabb53a6411/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png'
            },
            {
                alt: 'Image 3',
                uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/36c0fec7-7a27-4b44-a441-35fd7e0236e9/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png'
            },
            {
                alt: 'Image 4',
                uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d6781257-4ced-47d2-a2e7-4749b294f33f/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png'
            }
        ],
        availableSizes: [
            {
                id: 1,
                size: 'US 6'
            },
            {
                id: 2,
                size: 'US 7'
            },
            {
                id: 3,
                size: 'US 8'
            },
            {
                id: 4,
                size: 'US 9'
            }
        ],
        availableColors: [
            {
                id: 100,
                outerColor: '#FCEDEF',
                color: 'red'
            },
            {
                id: 321,
                outerColor: '#EFECFB',
                color: '#6048FB'
            },
            {
                id: 2311,
                outerColor: '#FCEDEF',
                color: 'orange'
            },
        ]
    }

    const [primaryImage, setprimaryImage] = useState(data?.primaryImage)
    const [selectedImageIndex, setselectedImageIndex] = useState(0)
    const [selectedSizeIndex, setselectedSizeIndex] = useState(0)

    useEffect(() => {

    }, [])


    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onPressImage = (index: any) => {
        setselectedImageIndex(index)
    };


    const onPressSize = (index: any) => {
        setselectedSizeIndex(index)
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <View style={styles.backIcon}>
                    <ChevronLeft set="light" stroke='bold' primaryColor="black" />
                </View>
                <View style={styles.heartIcon}>
                    <Heart set="bold" primaryColor="#F3662A" />
                </View>
            </View>

            <View style={styles.imageContainer}>
                {/* <Text style={{position: 'absolute',top: 100, left: 120, zIndex: 1000, fontSize : 100}}>
                    AIR
                </Text> */}
                <Image style={styles.primaryImageStyles} source={{ uri: data.additionalImages[selectedImageIndex]?.uri }} />
            </View>


            <View style={styles.imagePickerContainer}>
                <View style={styles.imagePickerWrapper}>

                    {data?.additionalImages.map((e, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => onPressImage(index)} style={selectedImageIndex == index ? styles.imagePickerActive : styles.imagePickerInActive}>
                                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }} source={{ uri: e.uri }} />
                            </TouchableOpacity>
                        )

                    })}
                </View>

            </View>

            <Modalize ref={modalizeRef} alwaysOpen={430} handlePosition="inside">
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeading}>
                        <Text style={styles.txtModalHeading}>
                            {data.name}
                        </Text>
                        <View style={styles.itemPriceContainer}>
                            <Text style={styles.txtCurrency}>
                                $
                            </Text>
                            <Text style={styles.txtPrice}>
                                {data?.price}
                            </Text>
                        </View>

                    </View>

                    <View style={{display: 'flex' ,  justifyContent: 'flex-end' , width: '100%' , flexDirection: 'row'}}> 
                    <Star size={20} set="bold" primaryColor="#F3662A"/>
                    <Star size={20} set="bold" primaryColor="#F3662A"/>
                    <Star size={20} set="bold" primaryColor="#F3662A"/>
                    <Star size={20} set="bold" primaryColor="grey"/>
                    <Star size={20} set="bold" primaryColor="grey"/>
                    </View>


                    <View style={styles.modalHeadingContainer}>
                        <Text style={styles.txtModalSubHeading}>
                            Available Sizes
                        </Text>

                    </View>


                    <View style={styles.modalHeadingContainer}>

                        <FlatList
                            horizontal={true}
                            data={data?.availableSizes}

                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity key={item.id} onPress={() => onPressSize(index)} style={selectedSizeIndex == index ? styles.priceSelectorActive : styles.priceSelectorInactive}>
                                        <Text style={selectedSizeIndex == index ? styles.txtSizeActive : styles.txtSizeInactive}>
                                            {item?.size}
                                        </Text>

                                    </TouchableOpacity>
                                )

                            }}
                            keyExtractor={(item: any) => item.id}
                        />


                    </View>

                    <View style={styles.modalHeadingContainer}>
                        <Text style={styles.txtModalSubHeading}>
                            Color
                        </Text>

                    </View>

                    <View style={styles.modalHeadingContainer}>

                        <FlatList
                            horizontal={true}
                            data={data?.availableColors}

                            renderItem={({ item, index }) => {
                                return (
                                    <View style={colorStyles(item).colorsContainer}>
                                        <View key={item.id} style={colorStyles(item).colorOuterCircle}>
                                            <View style={colorStyles(item).colorInnerCircle}>



                                            </View>
                                        </View>

                                    </View>

                                )

                            }}
                            keyExtractor={(item: any) => item.id}
                        />



                    </View>

                    <View style={styles.modalHeadingContainer}>
                        <Text style={styles.txtModalSubHeading}>
                            Description
                        </Text>


                        <Text style={{ paddingTop: 10, fontSize: 16, fontFamily: 'Poppins', color: 'grey' }}>
                            {data.description}
                        </Text>

                    </View>

                </View>




            </Modalize>

            <View style={styles.floatingButtonContainer}>
                <Buy size={30} set="bulk" primaryColor="white" />
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
    headingContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    backIcon: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderColor: 'lightgrey', borderWidth: 2, borderRadius: 10
    },
    heartIcon: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, backgroundColor: 'white', borderRadius: 10
    },
    imageContainer: {
        backgroundColor: 'red', height: 260
    },
    primaryImageStyles: {
        resizeMode: 'cover', height: '100%', width: '100%'
    },
    imagePickerContainer: {
        justifyContent: 'center', flexDirection: 'row', marginTop: 20
    },
    imagePickerWrapper: {
        width: '85%', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row'
    },
    imagePickerActive: {
        height: 70, width: 70, borderWidth: 2, borderColor: '#F3662A', borderRadius: 10
    },
    imagePickerInActive: {
        height: 70, width: 70, borderWidth: 2, borderColor: 'lightgrey', borderRadius: 10
    },
    modalContainer: {
        padding: 20,
    },
    modalHeading: {
        paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    txtModalHeading: {
        fontSize: 30, fontFamily: 'PoppinSemiBold'
    },
    itemPriceContainer: {
        display: 'flex', flexDirection: 'row'
    },
    txtCurrency: {
        fontSize: 28, fontFamily: 'PoppinSemiBold', color: '#F3662A'
    },
    txtPrice: {
        fontSize: 36, fontFamily: 'PoppinSemiBold'
    },
    modalHeadingContainer: {
        paddingTop: 20
    },
    txtModalSubHeading: {
        fontSize: 18, fontFamily: 'PoppinSemiBold'
    },
    priceSelectorInactive: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 50, borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', marginRight: 10
    },
    priceSelectorActive: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 50, borderRadius: 10, marginRight: 10, backgroundColor: '#F3662A', color: 'white'
    },
    txtSizeInactive: {
        fontSize: 20, fontFamily: 'PoppinSemiBold'
    },
    txtSizeActive: {
        fontSize: 20, fontFamily: 'PoppinSemiBold', color: 'white'
    },
    floatingButtonContainer:{
        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 40, right: 30, zIndex: 10000, height: 80, width: 80, borderRadius: 40, backgroundColor: '#F3662A' ,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }

})

const colorStyles = (props: any) => StyleSheet.create({
    colorsContainer: {
        marginRight: 20
    },
    colorOuterCircle: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderRadius: 20, backgroundColor: props?.outerColor
    },
    colorInnerCircle: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: 25, height: 25, borderRadius: 15, backgroundColor: props?.color
    }
})


export default ShowDetailScreen