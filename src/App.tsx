import SectionCards from "./layouts/SectionCards";
import SectionForms from "./layouts/SectionForms";

function App() {
  return (
    <>
      <main className="flex flex-col sm:flex-row justify-between items-center h-screen w-screen">
        <SectionCards />
        <SectionForms />
      </main>
    </>
  );
}

export default App;
