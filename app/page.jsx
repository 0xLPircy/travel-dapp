import Nav from "./components/Nav";
import Features from "./containers/features";
import HowToUse from "./containers/howToUse";
import Showcase from "./containers/showcase";
import Testimonials from "./containers/testimonials";

export default function Home() {
  return (
    <>
      <Showcase />
      <Features />
      <HowToUse />
      <Testimonials />
    </>
  );
}
