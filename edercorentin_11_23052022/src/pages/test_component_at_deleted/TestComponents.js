import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import './TestComponents.css';
import Tag from '../../components/tag/Tag';
import DropdownInfo from '../../components/inputs/dropdown_info/DropdownInfo';
import SelectorEquipment from '../../components/inputs/selector/Selector';



function TestComponents() {
  return (
    <div className="">
        <Header />
        <Card/>
        <Tag/>
        <DropdownInfo/>
        <SelectorEquipment/>
    </div>
  );
}

export default TestComponents;
