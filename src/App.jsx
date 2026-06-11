import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Layout } from "./layout/Layout";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("ft-theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ft-theme", theme);
  }, [theme]);

  return (
    <>
      <ScrollManager />
      <Layout theme={theme} onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))} />
    </>
  );
}

export default App;
