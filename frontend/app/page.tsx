import Navbar from "./components/navigation/Navbar";
import Features from "./components/home/Features";
import JoinTeam from "./components/home/JoinTeamSection/JoinTeam";
import HeroCards from "./components/home/herocards";

export default function Home() {
  return (
    <>
      <HeroCards />
      <Features />
      <JoinTeam />
    </>
  );
}
