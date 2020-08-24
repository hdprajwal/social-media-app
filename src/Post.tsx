import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import { Button, Text, Layout, Icon, EvaProp } from '@ui-kitten/components';

interface Prop {
  data: {
    postLink: string,
    subreddit: string,
    title: string,
    url: string,
    nsfw: boolean,
    spoiler: boolean
  }
}


const Post: React.FunctionComponent<Prop> = ({ data }) => (
  <>
    <View style={styles.card} >
      <Layout style={{ flexDirection: "row",paddingHorizontal:10,paddingVertical:5}}>
      <Image source={{uri:data.url}} style={{width:50,height:50,borderRadius:25,marginRight:5}}></Image>
        <Text> Section</Text>
        <Text> UserName</Text>
        <Text> 2h</Text>
      </Layout>
      <Layout style={{ flexDirection: "row" }}>
        <Text>UserName</Text>
      </Layout>
      <Layout>
      <Image source={{ uri: data.url }} style={{ width: '100%', height: 400 }} ></Image>
      </Layout>
      <Layout style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Icon name='arrow-up-outline' style={{width:32,height:32}} fill='#8F9BB3'/>
        <Icon name='arrow-down-outline' style={{width:32,height:32}} fill='#8F9BB3'/>
        <Icon name='message-square-outline' style={{width:32,height:32}} fill='#8F9BB3'/>
        <Icon name='share-outline' style={{width:32,height:32}} fill='#8F9BB3'/>
        <Icon name='bookmark-outline' style={{width:32,height:32}} fill='#8F9BB3'/>
      </Layout>
    </View>

  </>
);


const styles = StyleSheet.create({
  card: {
    // marginHorizontal: 5,
    // marginVertical: 5,
    // elevation:5,
    padding:2,
    width: '100%',
    borderColor: 'rgba(0,0,0,0)'
  }
});

export default Post;