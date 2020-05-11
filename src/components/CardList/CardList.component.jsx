import React from 'react';
import './CardList.styles.scss';
import Card from '../Card/Card.component';
import clients from '../../data/clients';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientInfo: [],
        };
    }

    componentDidMount() {
        this.setState({ clientInfo: clients });
    }

    render() {
        const { clientInfo } = this.state;
        const { filterBy, filterText } = this.props;

        const filteredArray = clientInfo.filter(client => {
            switch (filterBy) {
                case 'site':
                    return client.PhysicalSite.toLowerCase().includes(
                        filterText
                    );
                case 'client':
                    return client.ClientName.toLowerCase().includes(
                        filterText
                    );
                case 'orders':
                    return client.Orders > Number(filterText);
                default:
                    return client;
            }
        });

        return (
            <div className='card-list'>
                {filteredArray.map(({ ClientId, ...otherProps }) => {
                    return (
                        <Card
                            key={ClientId}
                            ClientId={ClientId}
                            {...otherProps}
                        />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
