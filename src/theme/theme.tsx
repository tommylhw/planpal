/* 
  Use when you want to create a theme provider component that changes the color scheme based on the theme and the device's color scheme.
*/

import { vars, colorScheme, useColorScheme } from 'nativewind'
import { View } from 'react-native';

// Define possible theme names and color schemes
type ThemeName = 'brand' | 'christmas';
type ColorScheme = 'light' | 'dark';

// Define props interface for the Theme component
interface ThemeProps {
  theme: ThemeName;
  children: React.ReactNode;
}

const themes = {
  brand: {
    'light': vars({
      '--color-primary': 'black',
      '--color-secondary': 'white'
    }),
    'dark': vars({
      '--color-primary': 'white',
      '--color-secondary': 'dark'
    })
  },
  christmas: {
    'light': vars({
      '--color-primary': 'red',
      '--color-secondary': 'green'
    }),
    'dark': vars({
      '--color-primary': 'green',
      '--color-secondary': 'red'
    })
  }
}

const Theme = ({ theme, children }: ThemeProps) => {
  const { colorScheme } = useColorScheme();

  return (
    <View style={themes[theme][colorScheme as ColorScheme]}>
      {children}
    </View>
  )
}

export default Theme;