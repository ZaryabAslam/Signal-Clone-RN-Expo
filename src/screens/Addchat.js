import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon, Input, Button } from "react-native-elements";
import {Input, Button } from "react-native-elements";
import {db} from '../Firebase'

export default function Addchat({navigation}) {
    
    const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
      await db.collection('chats').add({
          chatName: input,
      }).then(() => {
          navigation.goBack();
      }).catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a name for the chat"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black"/>
        }
      />
      <Button onPress={createChat} title="Create chat"/>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    }
  });