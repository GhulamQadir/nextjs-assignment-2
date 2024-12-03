import MainComponent from "../components/MainComponent";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-800 h-full pb-3">
      <Navbar />
      <MainComponent />
    </div>
  );
}
