import React, { Component } from 'react'
import { View, Text } from 'react-native'


 export default class ResultView extends Component {
    render() {
        return (
            <View>
                <Text>
                    Result: {this.props.result.disclaimer}
                </Text>
            </View>
        )
    }
}

