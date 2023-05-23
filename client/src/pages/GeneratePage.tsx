import Hero from "../components/GeneratePage/Hero";
import { HistoryGallery } from "../components/GeneratePage/History";
import { Generator } from "../components/GeneratePage/generator/Generator";
import { useAppSelector } from "../hooks/useRedux";

const GeneratePage = () => {
  const { status } = useAppSelector(state => state.auth);
  return (
    <main className="pt-16">
      <Hero />
      <Generator />
      {status === "authenticated" && <HistoryGallery />}
    </main>
  );
};

export default GeneratePage;
