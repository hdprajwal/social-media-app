import React from 'react'
import { ThemeProvider } from 'react-native-elements';
import Search from './Search'
import { Icon } from 'react-native-elements'
import { View, StyleSheet } from 'react-native';

import Card from './Card'
import { ScrollView } from 'react-native-gesture-handler';

const memes=[
  {
  postLink: "https://redd.it/iebsek",
  subreddit: "memes",
  title: "Big brain time",
  url: "https://i.redd.it/o4v8fr2d9hi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieem2f",
  subreddit: "memes",
  title: "J is for Jenius dumbass",
  url: "https://i.redd.it/bpb2jzpyfii51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ie4bvx",
  subreddit: "memes",
  title: "Billy better run",
  url: "https://i.redd.it/tp7phhs4yei51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieapl6",
  subreddit: "memes",
  title: "Batman is the only one paying.he said😐",
  url: "https://i.redd.it/a0as7ltdvgi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iebq94",
  subreddit: "memes",
  title: "Ice &lt; Water &lt; boiling water",
  url: "https://i.redd.it/544hauqk8hi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iecxnn",
  subreddit: "memes",
  title: "What’s that? Sorry couldn’t hear you...",
  url: "https://i.redd.it/8omuqky6phi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieczyn",
  subreddit: "memes",
  title: "2 hurricanes, when the virus isn't killing enough people",
  url: "https://i.redd.it/5ap6v5l6qhi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iebbci",
  subreddit: "memes",
  title: "Happy 2 years on reddit to me",
  url: "https://i.redd.it/snb43mc63hi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iedkj8",
  subreddit: "memes",
  title: "stolen from someone else",
  url: "https://i.redd.it/a7e3yqd2zhi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iee6tp",
  subreddit: "memes",
  title: "Call the cops",
  url: "https://i.redd.it/0a3g6bad9ii51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iebvji",
  subreddit: "memes",
  title: "You will be missed",
  url: "https://i.redd.it/uvtf044iahi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieddab",
  subreddit: "memes",
  title: "A true freak of nature",
  url: "https://i.redd.it/x3lboqpwvhi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iee9kb",
  subreddit: "memes",
  title: "Hehe pp joke",
  url: "https://i.redd.it/y0vut9tgaii51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ied9n2",
  subreddit: "memes",
  title: "I hate it when they dont park like this.",
  url: "https://i.redd.it/glbp6wvauhi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ied4ps",
  subreddit: "memes",
  title: "Frick pedos, all my homies hate pedos",
  url: "https://i.redd.it/fiv098x6shi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iedzq8",
  subreddit: "memes",
  title: "I mean, he's not wrong.",
  url: "https://i.redd.it/hzbk1u236ii51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieem8i",
  subreddit: "memes",
  title: "Delicious, finally some good fucking gum",
  url: "https://i.redd.it/xbudfo41gii51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ied4b1",
  subreddit: "memes",
  title: "I can't be the only one",
  url: "https://i.redd.it/pozk1zu0shi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieciuq",
  subreddit: "memes",
  title: "Just watch the dude face",
  url: "https://i.redd.it/t02njg2djhi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieaq0h",
  subreddit: "memes",
  title: "watching ralph in anguish fuels me",
  url: "https://i.redd.it/zbn4zeejvgi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iecbfb",
  subreddit: "memes",
  title: "Suspension initiated.",
  url: "https://i.redd.it/dfd9cchfghi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ie4spk",
  subreddit: "memes",
  title: "Always in your nearest pokemon center",
  url: "https://i.redd.it/4s44j3uj2fi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ieb01b",
  subreddit: "memes",
  title: "This got me thinking",
  url: "https://i.redd.it/fk1xddd5zgi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ie7w85",
  subreddit: "memes",
  title: "Mom, dad wtf?!?!",
  url: "https://i.redd.it/l765xl35yfi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iee0hi",
  subreddit: "memes",
  title: "Very true",
  url: "https://i.redd.it/93ztbebf6ii51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ie9p7x",
  subreddit: "memes",
  title: "I have nothing to say.",
  url: "https://i.redd.it/jfdtdk90jgi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ie986n",
  subreddit: "memes",
  title: "Best lego set fight me",
  url: "https://i.redd.it/ima8fg69dgi51.png",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/iedxo0",
  subreddit: "memes",
  title: "Garfield is daddy",
  url: "https://i.redd.it/2iiv5yv35ii51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ie8xpl",
  subreddit: "memes",
  title: "Nerf or Nothing",
  url: "https://i.redd.it/0fiigczq9gi51.jpg",
  nsfw: false,
  spoiler: false
  },
  {
  postLink: "https://redd.it/ie7dll",
  subreddit: "memes",
  title: "Wholesome kill",
  url: "https://i.redd.it/c0aj3koesfi51.png",
  nsfw: false,
  spoiler: false
  }
  ]


const App = () => {
  return (
    <ThemeProvider >
      <View style={Styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', backgroundColor: '#252B37', width: '100%', height: 50 }}>
          <Icon
            name='person'
            type='material'
            color='#C8C8C8'
            size={28}
            onPress={() => console.log('Hello world')}
          />
          <Search />
          <Icon
            name='notifications'
            type='material'
            color='#C8C8C8'
            size={28}
            onPress={() => console.log('Hello world')}
          />
        </View>
        <ScrollView style={{width:'100%'}}>
         {memes.map((meme,index)=>{
          return <Card key={index} data={meme} />
         })}
        </ScrollView>
      </View>
    </ThemeProvider>
  );
};

const Styles = StyleSheet.create({
  container: { backgroundColor: '#1A202C', height: '100%', width: '100%', alignItems: "center" }
})


export default App;