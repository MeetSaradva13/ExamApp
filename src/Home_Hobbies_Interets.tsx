import * as React from 'react';
import { Text, View, StyleSheet, SectionList, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface HomePageHobbiesInterestsProps {}
const screenWidth = Dimensions.get('window').width;
const HobbiesInterets1 =[
    {
        title:'Sport/Exercise/Fitness',
        data:[
            {
                id:1,
                hobbiesName:'Surfing',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            },
            {
                id:2,
                hobbiesName:'Hiking and Mountain',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            },
            {
                id:3,
                hobbiesName:'Biking',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            },
            {
                id:4,
                hobbiesName:'Swimming',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            },
            {
                id:5,
                hobbiesName:'Dancing',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            },
            {
                id:6,
                hobbiesName:'Reading',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            },
            {
                id:7,
                hobbiesName:'Cooking',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            },
            {
                id:8,
                hobbiesName:'Gardening',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            }
        ]
    }
]

const HobbiesInterets2=[
    {
        title:'Travelling/Adventure',
        data:[
            {
                id:2,
                hobbiesName:'Vacations',
                hobbiesImage: require('../assests/images/h1.png'),
                isSelected:false,
            }
        ]
    }
]

const HomePageHobbiesInterests = (props: HomePageHobbiesInterestsProps) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#0DA8F5','#0035E8']} style={styles.linearGradientStyle}>
            <View style={styles.sectionListView}>
            <SectionList
            sections={[...HobbiesInterets1,...HobbiesInterets2]}
            renderSectionHeader={({section})=>(
                <View style={styles.sectionHeaderView}>
                    <Text style={styles.sectionHeaderText}>{section.title}</Text>
                    <View style={styles.circle}>
                        <Image source={require('../assests/images/Vector.png')} resizeMode='contain'/>
                    </View>
                </View>
                
              )}
            renderItem={({item})=>(
                <View style={styles.itemStyle}> 
                    <Image source={item.hobbiesImage}/>
                    <Text style={styles.itemTextStyle}>{item.hobbiesName}</Text>
                </View>
              )}
              contentContainerStyle={
                {
                    flexDirection:'row',
                    flexWrap:'wrap'
                }
              }
              
            />
            </View>
        </LinearGradient>
    </View>
  );
};

export default HomePageHobbiesInterests;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  linearGradientStyle:{
    flex:1,
  },
  sectionHeaderView:{
    flex:1,
    width: screenWidth, 
    backgroundColor:'#F5F5F5',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:"5%",
    paddingHorizontal:"5%"
  },
  sectionHeaderText:{
    backgroundColor:'yellow',
    color:'#14152B',
    fontSize:16,
    fontWeight:'600',
    // marginLeft:20
  },
  circle:{
    height:20,
    width:20,
    backgroundColor:'red',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
    // marginRight:20
  },
  itemStyle:{
    flex:1,
    flexWrap:'wrap',
    alignContent:'flex-start',
    backgroundColor:'pink',
    alignSelf:'flex-start'
  },
  sectionListView:{
    flexDirection:'row'
  }
});
