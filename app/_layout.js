import { Stack, Slot } from 'expo-router';
import { CardProvider } from '../context/CardContext';


export default function RootLayout() {

    return (
        <CardProvider>
           <Stack>
                <Stack.Screen 
                    name="index" 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="tela4" 
                    options={{ title: 'Tela 4' }} 
                />
                <Stack.Screen 
                    name="(tabs)" 
                    options={{ headerShown: false }} 
                />
            </Stack>
        </CardProvider>);
}
