import { ThemeProvider } from "@/components/providers/darkmode-providers.tsx";
import { ModeToggle } from "@/components/ui/darkmode-toggle";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
      <main className=" border border-red-500 p-10 bg-black">
        <h1 className="p-2 text-white">tailwind CSS work</h1>
      </main>
    </ThemeProvider>
  );
}

export default App;
