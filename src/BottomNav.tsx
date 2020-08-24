import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon, EvaProp } from '@ui-kitten/components';

const HomeIcon = (props: EvaProp) => (
  <Icon {...props} name='home-outline' />
);

const PageIcon = (props: EvaProp) => (
  <Icon {...props} name='grid-outline' />
);

const PostIcon = (props: EvaProp) => (
  <Icon {...props} name='edit-2-outline' />
);

const SaveIcon = (props: EvaProp) => (
  <Icon {...props} name='bookmark-outline' />
);

const ChatIcon = (props: EvaProp) => (
  <Icon {...props} name='message-square-outline' />
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const BottomNavigationAccessoriesShowcase: React.FunctionComponent = () => {

  const bottomState = useBottomNavigationState();

  return (
    <>
      <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
        <BottomNavigationTab icon={HomeIcon} />
        <BottomNavigationTab icon={PageIcon} />
        <BottomNavigationTab icon={PostIcon} />
        <BottomNavigationTab icon={SaveIcon} />
        <BottomNavigationTab icon={ChatIcon} />
      </BottomNavigation>
    </>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginTop: 1,
  },
});

export default BottomNavigationAccessoriesShowcase