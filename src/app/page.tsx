import AddBtn from "./components/AddBtn";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-[120vh] relative flex flex-col justify-between">
      <Header />
      <AddBtn />
      <div className="relative min-h-[100vh] flex items-center flex-col p-[20px] ">
        <Card />
      </div>
      <Footer />
    </div>
  );
}
