import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import AsyncSelect from 'react-select/async';

function App() {
  const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ];
  const loadOptions = (inputValue, callback) => {
    // perform a request
    console.log(inputValue);
    const requestResults = aquaticCreatures.filter(
      (aquaticCreature) =>
        aquaticCreature.label.toLowerCase().indexOf(inputValue.toLowerCase()) >
        -1
    );

    callback(requestResults);
  };
  return (
    <div className='App'>
      {/* <Select
        options={aquaticCreatures}
        isMulti
        onChange={(opt) => console.log('opt', opt)}
        defaultValue={aquaticCreatures.lastIndex}
      /> */}
      {/* <Creatable
        options={aquaticCreatures}
        onChange={(opt, meta) => console.log(opt, meta)}
      /> */}
      <AsyncSelect
        loadOptions={loadOptions}
        isMulti
        // options={aquaticCreatures}
        // defaultOptions={aquaticCreatures.lastItem}
      />
    </div>
  );
}

export default App;
