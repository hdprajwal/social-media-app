import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Divider, Drawer, DrawerItem, Icon } from '@ui-kitten/components';

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='bell-outline'/>
);

const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-forward'/>
);

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('./assets/icon.jpg')}
    />
    <Divider/>
  </React.Fragment>
);

const DrawerAccessoriesShowcase: React.FunctionComponent = () => {

  const [selectedIndexi, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndexi}
      onSelect={(index) => setSelectedIndex(index)}>
      <DrawerItem
        title='Users'
        accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title='Orders'
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerAccessoriesShowcase