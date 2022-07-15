import ReactDOM from 'react-dom';
import Topo from './Topo';
import Corpo from './Corpo';
import Fundo from './Fundo';

function App(){
    return(
        <div>
            <Topo />
            <Corpo />
            <Fundo />
        </div>
    )
}
const app = App()
ReactDOM.render(app, document.querySelector(".root"));
