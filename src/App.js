import './App.css';
import User from "./Components/User";

function App() {
    return (
        <div>
            <User name={'Vasya'} age={31} isMarried={false} city={'Kyiv'}/>
            <User name={'Petya'} age={30} isMarried={true} city={'Rivne'}/>
            <User name={'Kolya'} age={29} isMarried={true} city={'Lviv'}/>
            <User name={'Olya'} age={28} isMarried={false} city={'Rivne'}/>
            <User name={'Max'} age={30} isMarried={true} city={'Lviv'}/>
            <User name={'Anya'} age={31} isMarried={false} city={'Lviv'}/>
            <User name={'Oleg'} age={28} isMarried={false} city={'Kyiv'}/>
            <User name={'Andrey'} age={29} isMarried={true} city={'Lviv'}/>
            <User name={'Masha'} age={30} isMarried={true} city={'Kyiv'}/>
            <User name={'Olya'} age={31} isMarried={false} city={'Lviv'}/>
            <User name={'Max'} age={31} isMarried={true} city={'Rivne'}/>
        </div>
    );
}

export default App;
