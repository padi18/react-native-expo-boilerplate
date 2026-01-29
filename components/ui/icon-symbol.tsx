// Fallback for using MaterialIcons on Android and web.

import { Home, Send, Code, ChevronRight } from 'lucide-react-native';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, type StyleProp, type ViewStyle } from 'react-native';

type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Lucide Icons mappings here.
 * - see Lucide Icons in the [Lucide Directory](https://lucide.dev/icons).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': Home,
  'paperplane.fill': Send,
  'chevron.left.forwardslash.chevron.right': Code,
  'chevron.right': ChevronRight,
};

/**
 * An icon component that uses native SF Symbols on iOS, and Lucide Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Lucide Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const Icon = MAPPING[name];
  return <Icon color={color} size={size} style={style} />;
}
