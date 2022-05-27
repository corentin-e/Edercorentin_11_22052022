import Header from '../../components/header/Header';
import HousingCard from '../../components/card/housing_card/HousingCard';
import './TestComponents.css';
import Tag from '../../components/tag/Tag';
import DropdownInfo from '../../components/inputs/dropdown_info/DropdownInfo';
import SelectorEquipment from '../../components/inputs/selector/Selector';
import WelcomeCard from '../../components/card/welcome_card/WelcomeCard';



function TestComponents() {
  return (
    <div className="">
        <Header />
        <HousingCard/>
        <Tag/>
        <DropdownInfo/>
        <SelectorEquipment/>
        <WelcomeCard/>
    </div>
  );
}

export default TestComponents;
