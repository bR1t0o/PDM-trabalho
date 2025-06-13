import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="tela0"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tela1"
        options={{
          title: 'Algo',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tela2"
        options={{
          title: 'Algo2',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tela3"
        options={{
          title: 'REGISTROS',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
