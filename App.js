import { Text, SafeAreaView, StyleSheet, View, Pressable, ScrollView } from 'react-native';
//import libraries needed
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Make landing screen

function IntroductionScreen({navigation}){
  return(
    <View style ={{flex: 1, backgroundColor: 'black'}}>

      {/*header */}
      <View style ={{flex: 2}}>
        <Text style ={{color: 'mediumpurple', textAlign: 'center', fontSize: '50'}}>
        {'\n\n'}ANImeme
        </Text>
        </View>

        {/*body, descripton of app */}
        <View style ={{flex: 7}}>
        <Text style ={{color: 'white'}}>
        Welcome to ANImeme, your ultimate destination for all things anime and manga! Immerse yourself in a world of captivating stories, vibrant characters, and breathtaking adventures, all at your fingertips. From timeless classics to the latest releases, ANImeme offers a diverse collection of anime and manga, tailored to your unique preferences.
        </Text>
        <Text style ={{color: 'white'}}>
        {'\n'}
        Discover new favorites, read reviews and pick out new, never been watched anime and never read manga. Join a community of fellow enthusiasts, share your thoughts, and stay updated on the latest trends and releases. Whether your're a seasoned otaku or new to the world of anime and manga, ANImeme has something for everyone!
        </Text>
        <Pressable onPress= {() => navigation.navigate('Main Page')}>
        <Text style = {{color: 'lightseagreen', textAlign: 'center', fontSize: '20'}}>
        {'\n\n'}Click here to see our app's top Anime reconmmendation
        </Text>
        </Pressable>
        </View>

        {/*Footer */}
        <View style ={{flex: 1}}>
        <Text style ={{color: 'white', textAlign: 'center'}}>
        {'\n\n'}Created by Law Meh
        </Text>
        </View>

    </View>
  );
}

{/*Main screen*/}
function MainScreen({navigation}){
  return(
    <View style ={{flex: 1, backgroundColor: 'black'}}>
    {/*Make screen scrollable */}
    <ScrollView style={styles.scrollView}>
      <View style ={{flex: 1}}>
      {/*header, page title name */}
        <Text style ={{color: 'white', textAlign: 'center', fontSize: '30'}}>
        {'\n'}Anime Reconmmendation
        </Text>
        </View>
        <View style ={{flex: 7}}>
        {/*First reconmmendation */}
          <Text
            style={{
              fontSize: 16,
              color: 'lightseagreen',
              fontWeight: 'bold',
            }}>
            {'\n'}
            1. Action/Adventure - "Attack on Titan"
          </Text>
          {/*Content for 1st reconmend, changed text color to white for contrast */}
          <Text style={{ color: 'white' }}>
            Embark on an epic journey with "Attack on Titan," a series that
            seamlessly blends intense action, intricate plot twists, and a
            richly developed world. Follow Eren Yeager and his friends as they
            confront colossal threats and unravel the mysteries of their walled
            civilization.
          </Text>

          {/*Second reconmmendation */}
          <Text
            style={{
              fontSize: 16,
              color: 'lightseagreen',
              fontWeight: 'bold',
            }}>
            {'\n'}
            2. Fantasy - "Fullmetal Alchemist: Brotherhood"
          </Text>
          {/*Content for 2nd reconmend, changed text color to white for contrast */}
          <Text style={{ color: 'white' }}>
            Dive into the magical realm of alchemy with "Fullmetal Alchemist:
            Brotherhood." This anime masterpiece combines compelling
            storytelling, well-crafted characters, and a breathtaking fantasy
            world. Join brothers Edward and Alphonse Elric on their quest for
            the Philosopher's Stone.
          </Text>

          {/*Third reconmmendation */}
          <Text
            style={{
              fontSize: 16,
              color: 'lightseagreen',
              fontWeight: 'bold',
            }}>
            {'\n'}
            3. Romance/Drama - "Your Lie in April"
          </Text>
          {/*Content for 3rd reconmend, changed text color to white for contrast */}
          <Text style={{ color: 'white' }}>
            Experience a heartwarming and emotional journey with "Your Lie in
            April." This anime beautifully weaves music, romance, and personal
            growth. Follow the story of Kosei Arima and Kaori Miyazono as they
            navigate the complexities of love and passion.
          </Text>

          {/*Fourth reconmmendation */}
          <Text
            style={{
              fontSize: 16,
              color: 'lightseagreen',
              fontWeight: 'bold',
            }}>
            {'\n'}
            4. Sci-Fi/Thriller - "Steins;Gate"
          </Text>
          {/*Content for 4th reconmend, changed text color to white for contrast */}
          <Text style={{ color: 'white' }}>
            Delve into the intricacies of time travel and alternate realities in
            "Steins;Gate." This gripping sci-fi thriller explores the
            consequences of meddling with time and the impact it has on the
            lives of the characters. Prepare for a mind-bending adventure.
          </Text>

          {/*Fifth reconmmendation */}
          <Text
            style={{
              fontSize: 16,
              color: 'lightseagreen',
              fontWeight: 'bold',
            }}>
            {'\n'}
            5. Comedy/Slice of Life - "My Youth Romantic Comedy Is Wrong, As I
            Expected"
          </Text>
          {/*Content for 5th reconmend, changed text color to white for contrast */}
          <Text style={{ color: 'white' }}>
            Explore the unconventional world of Hachiman Hikigaya in "My Youth
            Romantic Comedy Is Wrong, As I Expected." This anime combines humor
            and introspection as it follows Hachiman's unique perspective on
            high school life, relationships, and personal growth.
          </Text>

          {/*Sixth reconmmendation */}
          <Text
            style={{
              fontSize: 16,
              color: 'lightseagreen',
              fontWeight: 'bold',
            }}>
            {'\n'}
            6. Mystery/Psychological - "Death Note"
          </Text>
          {/*Content for 6th reconmend, changed text color to white for contrast */}
          <Text style={{ color: 'white' }}>
            Unleash the power of the Death Note in this psychological thriller.
            "Death Note" follows the story of Light Yagami as he grapples with
            the moral implications of possessing a notebook that can bring about
            death with a simple written entry. The battle of wits between Light
            and the enigmatic detective L will keep you on the edge of your
            seat.
          </Text>
        </View>
        
        {/*Footer */}
        <View style ={{flex: 1}}>
        <Text style ={{color: 'white'}}>
        {'\n\n'}For Manga, click here.
        {'\n\n'}
        </Text>
        </View>
        </ScrollView>
    </View>
  );
}

//create navigator
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
  },
});
//create router
function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "First Look">

    <Stack.Screen name= "First Look" component={IntroductionScreen}/>
    <Stack.Screen name= "Main Page" component={MainScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;


