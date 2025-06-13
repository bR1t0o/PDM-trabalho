import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

import { router } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title='Ir pras tabs'
                onPress={() => { router.push('/tela0') }}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
