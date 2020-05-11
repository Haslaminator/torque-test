import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import CardList from './components/CardList/CardList.component';
import Searchbox from './components/Searchbox/Searchbox.component';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            filterBy: 'site',
            filterText: '',
        };
    }

    render() {
        const handleRadioChange = e => {
            const targetValue = e.target.id;
            this.setState({ filterBy: targetValue });
        };
        const handleInputChange = e => {
            const targetValue = e.target.value;
            this.setState({ filterText: targetValue });
        };
        const { filterBy, filterText } = this.state;

        return (
            <div className='App'>
                <Navbar />
                <Searchbox
                    filterBy={filterBy}
                    handleRadioChange={handleRadioChange}
                    handleInputChange={handleInputChange}
                />
                <CardList filterBy={filterBy} filterText={filterText} />
            </div>
        );
    }
}

export default App;
