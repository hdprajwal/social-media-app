< Button
buttonStyle = {
    { backgroundColor: '#252B37' } }
icon = { <
    Icon
    name = 'notifications'
    type = 'material'
    color = '#517fa4' /
    >
}
/>













<View style={{ flex: 1, width: '100%', paddingTop: 5, alignItems: 'center' }}>
<View style={{ backgroundColor: '#252B37', width: '100%', height: 500, borderRadius: 5 }}>
  <View style={{ flexDirection: "row", padding: 10 }}>
    <View>
      <Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    </View>
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <Text style={{ color: 'white', paddingLeft: 10 }}>
          Funny
      </Text>
        <Text style={{ color: '#D6D9DB', paddingLeft: 10 }}>
          @UserName
      </Text>
        <Text style={{ color: '#ADB2B6', paddingLeft: 10, fontSize: 12 }}>
          2h
      </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white', paddingLeft: 10, paddingRight: 10, fontSize: 14, flexWrap: 'wrap' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
      </View>
    </View>
  </View>
  <View style={{ flex: 1, backgroundColor:'#000', justifyContent:"center"}}>
    <Image source={{ uri: 'https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme.jpg' }}
      style={{width:'100%', height:300 }}
    />
  </View>
  <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
    <Icon
      name='thumb-up'
      type='material'
      color='#C8C8C8'
      size={24}
    />
    <Icon
      name='thumb-down'
      type='material'
      color='#C8C8C8'
      size={24}
    />
    <Icon
      name='chat'
      type='material'
      color='#C8C8C8'
      size={24}
    />
    <Icon
      name='bookmark-border'
      type='material'
      color='#C8C8C8'
      size={24}
    />
  </View>
</View>
</View>




<Card
>
    <Image
        source={require('./assets/img.jpg')}
        style={{ width: DeviceWidth, height: 'auto', aspectRatio:1/1 }}
    />
    <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure than actual design.
</Text>
    <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='VIEW NOW' />
</Card>