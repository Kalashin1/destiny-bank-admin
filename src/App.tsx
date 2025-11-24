import { RouterProvider } from "react-router-dom";
import router from "./navigation";
import { useState } from "react";
import { LayoutContext } from "./pages/layout-context";

function App() {
  const [showSidePanel, setShowSidePanel] = useState(false);
  return (
    <LayoutContext.Provider value={{
      setShowSidePanel,
      showSidePanel
    }}>
      <RouterProvider router={router} />
    </LayoutContext.Provider>
  );
}

export default App;
