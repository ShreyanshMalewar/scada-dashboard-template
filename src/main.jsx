import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Css/index.css";
import { Provider } from "react-redux";
import store from "./constant/store/store";

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState("light");
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    // <ColorModeContext.Provider value={colorMode}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    // </ColorModeContext.Provider>
  );

