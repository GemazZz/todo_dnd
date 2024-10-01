import AddBtn from "./components/AddBtn";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-[120vh] relative flex flex-col justify-between">
      <Header />
      <AddBtn />
      <CardContainer />
      <Footer />
    </div>
  );
}
