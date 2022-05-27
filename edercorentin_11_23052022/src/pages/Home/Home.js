import Header from '../../components/header/Header';
import './home.css';
import Tag from '../../components/tag/Tag';
import DropdownInfo from '../../components/inputs/dropdown_info/DropdownInfo';
import SelectorEquipment from '../../components/inputs/selector/Selector';
import { Banner, Card } from '../../components'



function Home() {
  return (
    <div className="">
        <Header />
        <Card/>
        <Tag/>
        <DropdownInfo/>
        <SelectorEquipment/>
        <Banner/>
    </div>
  );
}

export default Home;
