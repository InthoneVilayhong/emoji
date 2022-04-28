const Line = (props) => {
    return (
        <div>
            <span>
                {props.data.title} {props.data.symbol}
            </span>
        </div>
    );
};

export default Line;
