import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SectionList, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HighliteSelect = ({ route }) => {
    const { hobbiesData, selectedItems } = route.params;
    const navigation = useNavigation();
    const [clickedImages, setClickedImages] = React.useState({});

    // Function to handle image click event
    const clickedEvent = (itemId) => {
        setClickedImages(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId] // Toggle the clicked state of the image
        }));
    };

    function removeItem(){
        
    }

    return (
        <View style={styles.container}>
    <LinearGradient colors={['#0DA8F5', '#0035E8']} >
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.backImage} onPress={() => navigation.goBack()}>
                <Image source={require('../assests/images/back.png')} />
            </TouchableOpacity>
            <Text style={styles.headerStyle}>Selected Items</Text>
        </View>
    </LinearGradient>
    <ScrollView>
        <View style={{ marginVertical: 10 }}>
            {hobbiesData.map(section => (
                <View key={section.title}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 26 }}>
                        {section.data.map(item => (
                            selectedItems[item.id] &&
                            <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
                                <TouchableOpacity
                                    style={[
                                        styles.hobbieImage,
                                        clickedImages[item.id] && styles.clickedItem // Apply the clickedItem style if the image is clicked
                                    ]}
                                    onPress={() => clickedEvent(item.id)}
                                >
                                    <Image source={item.hobbiesImage} />
                                </TouchableOpacity>
                                <Text key={item.id} style={styles.itemTextStyle}>{item.hobbiesName}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
        <View style={styles.storeClickedItem}>
            {Object.keys(clickedImages).map(itemId => (
                clickedImages[itemId] &&
                <View style={styles.imageUpdatedBackground}>
                    <TouchableOpacity onPress={removeItem}>
                <Image source={require('../assests/images/cross.png')} style={styles.crossImageStyle}/>
                </TouchableOpacity>
                <Image
                    key={itemId}
                    source={hobbiesData.flatMap(section => section.data).find(item => item.id === parseInt(itemId)).hobbiesImage}
                    style={styles.clickedItemImage}
                />
                
                </View>
            ))}
        </View>
    </ScrollView>
</View>

    );
};

export default HighliteSelect;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        flexDirection: 'row',
        marginVertical: 16
    },
    backImage: {
        flex: 0.5,
        marginLeft: 20
    },
    headerStyle: {
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    itemTextStyle: {
        maxWidth: 100,
        fontWeight: '400',
        color: '#14152B99',
        alignSelf: 'center'
    },
    hobbieImage: {
        borderWidth: 1,
        borderColor: '#14152B61',
        borderRadius: 8,
        height: 57,
        width: 57,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clickedItem: {
        backgroundColor: '#00000014' // Change the background color when clicked
    },
    storeClickedItem:{
        flex: 1,
        flexDirection:'row',
        paddingHorizontal:10,
        
        // marginHorizontal:10
    },
    clickedItemImage:{
        marginHorizontal:10,
        // backgroundColor:'#00000014',
    },
    imageUpdatedBackground:{
        backgroundColor:'#00000014',
        margin:10,
        // paddingVertical:10,
        paddingBottom:10,
        borderRadius:6
    },
    crossImageStyle:{
        alignSelf:'flex-end'
    }
});
