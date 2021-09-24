import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
  }),
};

const ReactSelect = (props) => <Select styles={customStyles} {...props} />

export default ReactSelect;
