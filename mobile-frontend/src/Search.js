import React from 'react'
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search }, () => {
            console.log(this.state.search)
        });
    };

    Submit = () => {
        console.log("this is the entered text:", this.state.search)
    }

    render() {
        const { search } = this.state;
        return ( <
            SearchBar containerStyle = {
                { backgroundColor: '#252B37', width: '75%', height: 40, padding: 0, justifyContent: 'center', borderRadius: 5 }
            }
            inputContainerStyle = {
                { backgroundColor: '#1A202C', height: 40, alignSelf: 'center', borderRadius: 5 }
            }
            placeholder = "Search"
            onChangeText = { this.updateSearch }
            value = { search }
            returnKeyType = 'search'
            onSubmitEditing = { this.Submit }
            />
        );
    }
}