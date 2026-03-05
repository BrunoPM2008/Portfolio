import  './chip.css';

const Chip = ({language, icon}) => {
  return (
      <div className="StackChip">
        {icon}
        <span className="text">{language}</span>
    </div>
  );
};

export default Chip;