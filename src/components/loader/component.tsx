import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { loaderStyle } from './style'
import { useLoaderStore } from '../../store/loaderStore'

const Loader = () => {

    const { isLoading } = useLoaderStore()
    return isLoading ? (
        <View style={loaderStyle.container}>
            <ActivityIndicator size={'large'} />
        </View>
    ) : null
}

export default Loader