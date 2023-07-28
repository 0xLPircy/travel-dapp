import Nav from "./components/Nav";
import Features from "./containers/features";
import HowToUse from "./containers/howToUse";
import Showcase from "./containers/showcase";

export default function Home() {
  return (
    <>
      <Showcase />
      <Features />
      <HowToUse />
    </>
  );
}
