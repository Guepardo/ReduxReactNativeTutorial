import React, { Component } from 'react'

import {
    View, 
    Text
} from 'react-native'

import { Provider } from 'react-redux'

import store from './Store'

// CONTAINERS

import Home from './Container/Home'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}> 
                <View style={{flex: 1}}>
                    <Home />          
                </View> 
            </Provider> 
        )
    }
}

export default Main