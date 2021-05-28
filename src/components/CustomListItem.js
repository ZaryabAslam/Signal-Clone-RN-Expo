import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
export default function CustomListItem({id, chatName, enterChat}) {
    return (
        <ListItem onPress={()=> enterChat()} key={id} bottomDivider>
            <Avatar
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            containerStyle={{ backgroundColor: 'black'}}
            // source={{
            //     uri: 'https://cencup.com/wp-content/uploads/2019/07avatar-placeholder.png'
            // }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: '800'}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    Abc
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

const styles = StyleSheet.create({})
