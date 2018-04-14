import React, { Component } from 'react'

import {
    View,
    Text, 
    ActivityIndicator
} from 'react-native'

import { connect } from 'react-redux'

import {
    increment, 
    decrement, 
    asyncDecrement, 
    asyncIncrement
} from './../../Store/CounterReducer'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {
            count,
            loading, 
            dispatch
        } = this.props

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    loading && 
                    <ActivityIndicator size="large" color="purple" /> 
                }
                <Text
                    onPress={() => { dispatch(asyncIncrement(1000)) }}
                >asycnIncrement</Text> 
                <Text
                    onPress={() => { dispatch(increment()) }}
                >Increment</Text> 
                <Text>{count}</Text> 
                <Text
                    onPress={() => { dispatch(decrement()) }}
                >Decrement</Text> 
                <Text
                    onPress={() => { dispatch(asyncDecrement(2000)) }}
                >asyncDecrement</Text> 

            </View> 
        )
    }
}

export default connect(({CounterReducer}) => {
    return CounterReducer
})(Home)