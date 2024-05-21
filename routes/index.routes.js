import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Banco from '../screens/appBnco/Banco'
import Atividades from '../screens/atividades'
import atividade1 from '../screens/atividade1'
import atividade3 from '../screens/atividade3'
import atividade4 from '../screens/atividade4'
import atividade5 from '../screens/atividade5'
import atividade6 from '../screens/atividade6'
import atividade7 from '../screens/atividade7'
import HomeStack from '../screens/atividadeStack/home'
import Detalhes from '../screens/atividadeStack/detalhes'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="atividades" screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="atividades"
          component={Atividades}
          options={{ headerTitle: 'Atividades - P1 Mobile', }}
        />
        <Stack.Screen
          name="appbanco"
          component={Banco}
          options={{ headerTitle: 'App Banco', headerShown: false }}
        />
        <Stack.Screen
          name="atividade1"
          component={atividade1}
          options={{ headerTitle: 'Atividade 1' }}
        />
        <Stack.Screen
          name="atividade3"
          component={atividade3}
          options={{ title: 'Atividade 3' }}
        />
        <Stack.Screen
          name="atividade4"
          component={atividade4}
          options={{ title: 'Atividade 4' }}
        />
        <Stack.Screen
          name="atividade5"
          component={atividade5}
          options={{ title: 'Atividade 5' }}
        />
        <Stack.Screen
          name="atividade6"
          component={atividade6}
          options={{ title: 'Atividade 6' }}
        />
        <Stack.Screen
          name="atividade7"
          component={atividade7}
          options={{ title: 'Atividade 7' }}
        />
        <Stack.Screen
          name="stack"
          component={HomeStack}
          options={{ title: 'Atividade Stack' }}
        />

        <Stack.Screen
          name="detalhes"
          component={Detalhes}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
