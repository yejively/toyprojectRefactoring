const UnitTableHeader = ({ info }) => {
    const { name, unit } = info;

    return (
        <div>
            <div>{name}</div>
            <div>{unit}</div>
        </div>
    );
};

export default UnitTableHeader;
