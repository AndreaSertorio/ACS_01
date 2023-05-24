import React from 'react';
import ReactDOM from 'react-dom';

// Componente Button
function Button(props) {
    return <button onClick={props.onClick}>{props.label}</button>;
}

// Componente SearchBar
function SearchBar(props) {
    return (
        <div>
            <input onChange={props.onChange} />
            <Button onClick={props.onButtonClick} label="Search" />
        </div>
    );
}

// Questo è il tuo primo componente React
function App() {
    return (
        <div>
            <h1>Hello, React!</h1>
            <SearchBar
                onChange={(event) => debug(event.target.value)}
                onButtonClick={() => debug('Button clicked')}
            />
        </div>
    );
}

// Renderizza il tuo componente React nell'elemento con id 'clinical-indications-container'
ReactDOM.render(<App />, document.getElementById('clinical-indications-container'));
