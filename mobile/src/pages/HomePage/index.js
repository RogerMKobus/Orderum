import React, { useEffect } from 'react';
import { ScrollView, LogBox } from 'react-native'
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Header from '../../components/Header'
import Board from '../../components/Board'

const HomePage = ({ navigation }) => {

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    return (
        <ScrollView>
            <Header />
            <Board />
            <FAB
                style={styles.fab}
                medium
                icon="plus"
                onPress={() => navigation.navigate('New')}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#073596',
        position: 'absolute',
        margin: 16,
        right: 5,
        bottom: 5,
    },
})


export default HomePage;