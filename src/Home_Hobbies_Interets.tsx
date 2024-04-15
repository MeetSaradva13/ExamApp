import * as React from 'react';
import { Text, View, StyleSheet, SectionList, Image, Dimensions, TouchableOpacity, ScrollView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface HomePageHobbiesInterestsProps {
  renderItem : []
 }
const screenWidth = Dimensions.get('window').width;
const HobbiesInterets = [
  {
    title: 'Sport/Exercise/Fitness',
    data: [
      {
        id: 1,
        hobbiesName: 'Surfing',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 2,
        hobbiesName: 'Hiking and Mountain',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 3,
        hobbiesName: 'Biking',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 4,
        hobbiesName: 'Swimming',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 5,
        hobbiesName: 'Dancing',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 6,
        hobbiesName: 'Reading',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 7,
        hobbiesName: 'Cooking',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: true,
      },
      {
        id: 8,
        hobbiesName: 'Gardening',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      }
    ]
  },
  {
    title: 'Travelling/Adventure',
    data: [
      {
        id: 9,
        hobbiesName: 'Vacations',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: true,
      }
    ]
  },
  {
    title: 'Foodies and Cheers',
    data: [
      {
        id: 10,
        hobbiesName: 'Cooking',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 11,
        hobbiesName: 'Culinary',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 12,
        hobbiesName: 'Restaurants',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 13,
        hobbiesName: 'Dining out',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      }
    ]
  },
  {
    title: 'Music/Entertainment ',
    data: [
      {
        id: 14,
        hobbiesName: 'Festivals',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 15,
        hobbiesName: 'Concerts',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 16,
        hobbiesName: 'Bands/DJs',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 17,
        hobbiesName: 'Musical Instruments',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      }
    ]
  },
  {
    title: 'Gathering',
    data: [
      {
        id: 18,
        hobbiesName: 'Bonfire',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 19,
        hobbiesName: 'Picnics',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 20,
        hobbiesName: 'BBQ/Grilling',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 21,
        hobbiesName: 'Camping',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      }
    ]
  },
  {
    title: 'Spiritual/Motivation',
    data: [
      {
        id: 22,
        hobbiesName: 'Meditation',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: true,
      },
      {
        id: 23,
        hobbiesName: 'Mindfulness',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      },
      {
        id: 24,
        hobbiesName: 'Public Speaking',
        hobbiesImage: require('../assests/images/h1.png'),
        isSelected: false,
      }

    ]
  }
]


const HomePageHobbiesInterests = (props: HomePageHobbiesInterestsProps) => {

  // const [showHobbies, setShowHobbies] = React.useState(false);
  // const [selectedHobbies, setSelectedHobbies] = React.useState([]);
  const [visibleSections, setVisibleSections] = React.useState([]);
  const [clickedItems, setClickedItems] = React.useState({});


  // const toggleSectionVisibility = (title) => {
  //   if (visibleSections.includes(title)) {
  //     setVisibleSections(visibleSections.filter((sectionTitle) => sectionTitle !== title));
  //   } else {
  //     setVisibleSections([...visibleSections, title]);
  //   }
  // };
  const toggleSectionVisibility = (title) => {
    if (visibleSections === title) {
      setVisibleSections("null");  
    } else {
      setVisibleSections(title); // Otherwise, show the selected section
    }
  };
  

  // const toggleHobbiesVisibility = (title: string) => {
  //   const hobby: any = HobbiesInterets.filter(hobby => hobby.title === title);
  //   // console.log("vgyvghbu"+hobbies);

  //   setSelectedHobbies(hobby);
  //   console.log(!showHobbies, selectedHobbies );
  //   //only show selectedHobbies

  //   setShowHobbies(!showHobbies );
  //   // console.log(showHobbies);
  //   // return selectedHobbies

  // };

  const renderSectionHeader = ({ section }) => (
    <TouchableOpacity onPress={() => toggleSectionVisibility(section.title)} activeOpacity={0.9}>
      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
        <View style={styles.circle}>
          <Image source={require('../assests/images/Vector.png')} resizeMode='contain' />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemStyle}>
      <TouchableOpacity
        style={[styles.hobbieImage, clickedItems[item.id] && styles.clickedItem]} // Apply the clickedItem style if the item is clicked
        onPress={() => handleItemClick(item.id)} // Pass the item id to the handleItemClick function
      >
        <Image source={item.hobbiesImage} />
      </TouchableOpacity>
      <Text style={styles.itemTextStyle}>{item.hobbiesName}</Text>
    </View>
  );
  const handleItemClick = (itemId) => {
    const selectedCount = Object.values(clickedItems).filter(Boolean).length;

   
    // if (selectedCount === 6 && !clickedItems[itemId]) {
        
    //     console.warn("Maximum limit of 5 selections reached");
    //     return; 
    // }else

    // if (selectedCount === 2 && clickedItems[itemId]) {
  
    //     console.warn("Minimum limit of 2 selections reached");
    //     return; 
    // }
   
    setClickedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0DA8F5', '#0035E8']} >
        <View style={styles.topBar}>
          <View style={styles.backImage}>
            <Image source={require('../assests/images/back.png')} />
          </View>

          <Text style={styles.headerStyle}>Select Category</Text>

        </View>
      </LinearGradient>
      <ScrollView>

        <View style={styles.sectionListView}>

          {/* <SectionList
            sections={[...HobbiesInterets]}
            renderSectionHeader={({ section }) => (
              <TouchableOpacity onPress={() => toggleHobbiesVisibility(section.title)} activeOpacity={0.9}>
                <View style={styles.sectionHeaderView}>
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                  <View style={styles.circle}>
                    <Image source={require('../assests/images/Vector.png')} resizeMode='contain' />
                  </View>
                </View>
              </TouchableOpacity>
            )}
            
            renderItem={({ item }) => (
              showHobbies ? (
                <View style={styles.itemStyle}>
                  <View style={styles.hobbieImage}>
                    <Image source={item.hobbiesImage} />
                  </View>
                  <Text style={styles.itemTextStyle}>{item.hobbiesName}</Text>
                </View>
              ) : null
            )}

            contentContainerStyle={
              {
                flexDirection: 'row',
                flexWrap: 'wrap'
              }
            }
          /> */}
          <SectionList
            sections={HobbiesInterets.map((section) => ({
              ...section,
              data: visibleSections.includes(section.title) ? section.data : []
            }))}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          />
        </View>
        {/* <TouchableOpacity 
        onPress={() => props.navigation.push('HighliteSelect')}>
          */}
         <TouchableOpacity 
    onPress={() => props.navigation.navigate('HighliteSelect', { hobbiesData: HobbiesInterets, selectedItems: clickedItems })}
>
    <LinearGradient colors={['#0DA8F5','#2255FF']} style={styles.buttonView}> 
        <Text style={styles.buttonTextStyle}>Next</Text>
    </LinearGradient>
</TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default HomePageHobbiesInterests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // borderTopRightRadius:25  
  },

  sectionHeaderView: {
    flex: 1,
    width: screenWidth,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    marginTop: 5,
    // borderRadius:0, 0, 100, 100
  },
  sectionHeaderText: {
    // backgroundColor:'yellow',
    color: '#14152B',
    fontSize: 16,
    fontWeight: '600',
    // marginLeft:20
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
    // marginRight:20
  },
  itemStyle: {
    flex: 1,
    // flexWrap: 'wrap',
    // alignContent:'flex-start',
    // backgroundColor:'pink',
    // alignSelf:'flex-start',
    // justifyContent:'center',
    marginLeft: 12,
    marginBottom: 12,
    marginTop: 15

  },
  sectionListView: {
    flexDirection: 'row',
    // paddingTop:5

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
    backgroundColor: '#00000014' 
  },
  itemTextStyle: {
    // flex:1,
    maxWidth: 57,
    fontSize: 12,
    fontWeight: '400',
    // fontSize:12,
    color: '#14152B99',
    // ,backgroundColor:'pink',
    alignSelf: 'center'

  },
  headerStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent:'center',
    alignContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    // justifyContent: "space-evenly",
    // marginLeft:20,
    marginVertical: 16
  },
  backImage: {
    flex: 0.5,
    // backgroundColor:"pink",
    marginLeft: 20


  },
  buttonView:{
    marginTop:20,
    marginBottom:27,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100,
    backgroundColor:'red'
    
  },
  buttonTextStyle:{
    marginVertical:16,
    marginHorizontal:120,
    fontSize:18,
    fontWeight:'600',
    color:'#FFFFFF',
  }
});
