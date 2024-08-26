import SearchBar from "../components/Searchbar";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import Popular from "../components/Popular"; // Added this import to match the HEAD version

function Home() {
  return (
    <div>
      <SearchBar />
      <CategoryList />
      <Popular /> {/* Included this component to match the HEAD version */}
      <Footer />
    </div>
  );
}

export default Home;
