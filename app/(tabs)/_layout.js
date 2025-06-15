import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CardProvider } from '../../context/CardContext';

export default function TabLayout() {
  return (
    <CardProvider>
      <Tabs>
        <Tabs.Screen
          name="tela0"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="checkmark-circle" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tela1"
          options={{
            title: 'Adicionar Assinatura',
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="add-circle-outline" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="tela3"
          options={{
            title: 'Registros',
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="checkmark-circle" color={color} />
            ),
          }}
        />
      </Tabs>
    </CardProvider>
  );
}
