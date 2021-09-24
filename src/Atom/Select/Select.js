import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '18px',
    width: '300px',
  }),
};

const ReactSelect = (props) => <Select styles={customStyles} {...props} />

export default ReactSelect;
