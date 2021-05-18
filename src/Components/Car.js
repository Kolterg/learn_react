export default function Car(props) {

    let {producer, model, year, color, type, engine, volume, power} = props;

    return (
        <div>
            <h2>{'Producer - ' + producer}</h2>
            <div>{'model - ' + model}</div>
            <div>{'year - ' + year}</div>
            <div>{'color - ' + color}</div>
            <div>{'type - ' + type}</div>
            <div>{'engine - ' + engine}</div>
            <div>{'volume - ' + volume}</div>
            <div>{'power - ' + power}</div>
        </div>
    );
}