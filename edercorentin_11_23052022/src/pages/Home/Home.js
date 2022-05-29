import "./home.css";
import { Banner, Card, DropdownList, DropdownInfo, Tag, Header } from "../../components";

function Home() {
  return (
    <div className="homePage_items_position">
      <Header />
      <Banner />
      <div className="homePage_housing_background">
        <Card/>
      </div>
    </div>
  );
}

export default Home;
