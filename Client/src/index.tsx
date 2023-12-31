import React from "react";
// import * as Localization from "expo-localization";
// import { i18n, Language } from "@/Localization";
import { NativeBaseProvider } from "native-base";
import { store, persistor } from "@/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationNavigator } from "./Navigation";
import { IngredientTagProvider } from "./Components/Context/Context";
import { UserContextProvider } from "./Components/Context/UserContext";

// i18n.locale = Localization.locale;
// i18n.enableFallback = true;
// i18n.defaultLocale = Language.ENGLISH;

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <UserContextProvider>
            <IngredientTagProvider>
              <ApplicationNavigator />
            </IngredientTagProvider>
          </UserContextProvider>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
