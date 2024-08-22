import { ThemeProvider } from "@/components/providers/darkmode-providers.tsx";
import MainLayout from "@/components/layout/main-layout";

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
