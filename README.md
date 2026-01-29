# React Native Expo Boilerplate 🚀

Este es un boilerplate moderno y "opinionated" para iniciar proyectos en React Native con Expo, diseñado para ser **Plug and Play**. Incluye las mejores prácticas, herramientas de última generación y una arquitectura escalable para aplicaciones de alto rendimiento.

## 🛠 Tech Stack

Este proyecto integra un conjunto robusto de tecnologías para cubrir todas las necesidades de una app moderna: UI, Navegación, Estado, Backend, Pagos y Calidad de código.

| Categoría | Tecnología | Descripción |
|-----------|------------|-------------|
| **Core** | [React Native](https://reactnative.dev/) | Framework base. |
| **Framework** | [Expo](https://expo.dev/) | SDK 54+ con gestión de workflow. |
| **Navegación** | [Expo Router](https://expo.github.io/router) | Navegación basada en archivos (File-system routing) |
| **Tabs** | [expo-native-tabs](https://docs.expo.dev/router/advanced/native-tabs/) | Navegación basada en archivos (File-system routing) |
| **Estilos** | [NativeWind v4](https://www.nativewind.dev/) | Tailwind CSS para React Native. |
| **Estado Server** | [TanStack Query](https://tanstack.com/query) | Gestión de estado asíncrono y caching. |
| **Estado Local** | [Zustand](https://zustand-demo.pmnd.rs/) | (Opcional) Gestión de estado global ligero si es necesario. |
| **Backend / Auth** | [Supabase](https://supabase.com/) | Base de datos, Autenticación y Realtime. |
| **Almacenamiento** | [MMKV](https://github.com/mamous/react-native-mmkv) | Key-Value storage ultra rápido (reemplazo de AsyncStorage). |
| **Formularios** | [React Hook Form](https://react-hook-form.com/) | Gestión eficiente de formularios. |
| **Validación** | [Zod](https://zod.dev/) | Validación de esquemas (integrado con RHF). |
| **Pagos** | [Stripe](https://stripe.com/) | Pasarela de pagos (expo-stripe-checkout / @stripe/stripe-react-native). |
| **Internacionalización**| [i18next](https://www.i18next.com/) | Soporte multi-idioma (i18n). |
| **Listas** | [FlashList](https://shopify.github.io/flash-list/) | Renderizado de listas de alto rendimiento (Shopify). |
| **Imágenes** | [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/) | Componente de imagen optimizado. |
| **Testing** | [Jest](https://jestjs.io/) + [RNTL](https://github.com/callstack/react-native-testing-library) + [TestSprite](https://www.testsprite.com/) | Unit y Integration Testing. |
| **Linting** | [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Calidad y formato de código. |
| **Git Hooks** | [Husky](https://typicode.github.io/husky/) | Pre-commit hooks para asegurar calidad. |
| **CI/CD** | [EAS](https://expo.dev/eas) | Expo Application Services para Build y Updates. |
| **Monitoring** | [Sentry](https://sentry.io/) | Tracking de errores y performance. |
| **Plataformas** | iOS, Android, Web (PWA) | Soporte cross-platform completo. |

---

## 📂 Estructura del Proyecto (Sugerida)

Esta estructura está diseñada para escalar. Mantén la lógica de negocio separada de la UI.

```
/
├── app/                      # 📁 Expo Router (File-system routing)
│   ├── (tabs)/               # Grupo de rutas para Tabs
│   ├── (auth)/               # Grupo de rutas para Auth (Login, Register)
│   ├── +html.tsx             # Entry point para Web (PWA)
│   ├── +not-found.tsx        # Pantalla 404 global
│   ├── _layout.tsx           # Root Layout (Providers, Fonts, Theme)
│   └── index.tsx             # Root Screen
│
├── assets/                   # 📁 Assets estáticos
│   ├── fonts/                # Fuentes personalizadas
│   └── images/               # Imágenes optimizadas
│
├── components/               # 📁 Componentes de UI
│   ├── ui/                   # Componentes base (Button, Input, Card)
│   ├── forms/                # Componentes de formulario controlados
│   └── __tests__/            # Tests de componentes
│
├── constants/                # 📁 Constantes globales
│   ├── Colors.ts             # Paleta de colores (Tokens)
│   └── Styles.ts             # Estilos compartidos
│
├── hooks/                    # 📁 Custom React Hooks
│   ├── useAuth.ts            # Hook de autenticación
│   └── useTheme.ts           # Hook de tema
│
├── lib/                      # 📁 Configuraciones de librerías externas
│   ├── supabase.ts           # Cliente de Supabase
│   ├── stripe.ts             # Cliente de Stripe
│   ├── i18n.ts               # Configuración de i18next
│
├── locales/                  # 📁 Archivos de traducción (i18n)
│   ├── en.json               # Inglés
│   └── es.json               # Español
│
├── services/                 # 📁 Lógica de API (fetchers)
│   └── api.ts                # Axios/Fetch instances
│
├── stores/                   # 📁 Estado Global (Zustand)
│   └── authStore.ts          # Store de autenticación
│
├── types/                    # 📁 Definiciones de TypeScript (.d.ts)
│   ├── database.types.ts     # 🆕 Tipos generados por Supabase CLI
│   └── env.d.ts              # Tipado de variables de entorno
│
├── utils/                    # 📁 Funciones de utilidad pura
│   └── format.ts             # Formateadores de fecha/moneda
│
├── __tests__/                # 📁 Tests de integración/e2e
│   └── App.test.tsx          # Tests principales
│
├── .eslintrc.js              # Configuración de Linter
├── .prettierrc               # Configuración de Formatter
├── babel.config.js           # Configuración de Babel
├── tailwind.config.js        # Configuración de NativeWind
├── tsconfig.json             # Configuración de TypeScript
└── app.json                  # Configuración de Expo
```

---

## 🚀 Front-end

### React Native & Expo
Utilizamos el último SDK de Expo con **New Architecture** habilitado cuando es posible para mayor rendimiento.

### Navegación (Expo Router)
La navegación se maneja a través de la estructura de carpetas en `app/`.
- Soporte para Deep Linking automático.
- `Tabs` nativas o JS-based configuradas en `app/(tabs)/_layout.tsx`.
- `Stack` navigation para flujos lineales.

---

## 🎨 Styles (NativeWind v4)

Usamos **Tailwind CSS** para estilizar la aplicación.
- **Configuración**: `tailwind.config.js` pre-configurado con tokens de diseño.
- **Dark Mode**: Soporte nativo para modo oscuro.
- **Componentes**: Se fomenta el uso de clases utilitarias (`className="flex-1 bg-white dark:bg-black"`).

Ejemplo:
```tsx
<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-xl font-bold text-slate-800">Hola Mundo</Text>
</View>
```

---

## 💾 Data & Backend

### Supabase
Configuración lista en `lib/supabase.ts`.
- Cliente instanciado.
- Manejo de Auth (Login, Register, Session).
- Tipos de base de datos generados automáticamente para TypeScript.

### TanStack Query
Para data fetching, caching y sincronización con el servidor.
- `useQuery` para obtener datos.
- `useMutation` para modificar datos.
- Invalidación automática de queries tras mutaciones.

### MMKV
Almacenamiento local síncrono y encriptado.
- Usado para persistir preferencias de usuario, tokens (si no se usa SecureStore) y caché local.

---

## 📝 Forms & Validation

Integración perfecta entre **React Hook Form** y **Zod**.
- **Control**: Componentes controlados reutilizables (`ControlledInput`).
- **Validación**: Esquemas Zod definidos en `schemas/`.
- **Performance**: Renderizados minimizados al teclear.

---

## 🌍 Internationalization (i18n)

Soporte multi-idioma configurado.
- Archivos de traducción en `locales/es.json`, `locales/en.json`.
- Detección automática del idioma del dispositivo.

---

## ✅ Testing

Configuración de **Jest** para unit testing.
- Mocks pre-configurados para librerías nativas (Expo, Navigation).
- **React Native Testing Library** para pruebas de componentes.

Comando:
```bash
npm run test
```

---

## 🧹 Lint & Quality

Mantén el código limpio y consistente.
- **ESLint**: Reglas estrictas para React y React Native.
- **Prettier**: Formateo automático.
- **Path Aliases**: Importaciones limpias usando `@/components/...` configurado en `tsconfig.json`.

**Husky & Lint-staged**:
Al hacer commit, se ejecutan automáticamente los linters y tests para asegurar que no se sube código roto.

---

## 📦 Deployment (EAS)

Configurado para **Expo Application Services**.
- `eas.json` con perfiles para `development`, `preview` y `production`.
- Soporte para **Development Builds** (para probar librerías nativas sin ejectar).

---

## 🛠 Instalación y Uso

1.  **Clonar repositorio:**
    ```bash
    git clone <repo-url>
    cd react-native-expo-boilerplate
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configurar Variables de Entorno:**
    Crea los archivos necesarios basados en `.env.example`:
    ```bash
    cp .env.example .env.development
    # Rellena tus claves para desarrollo
    ```

4.  **Correr en desarrollo:**
    ```bash
    npm run start:dev
    ```

---

## 📄 Licencia

MIT
