import React, {Component} from "react";
import { ButtonToolbar, Table, Button } from 'react-bootstrap';

class LoginJob extends Component {
    state = {
      blatnik: 15,
        blatnikname:'Levý blatník',
        orderblatnik: '',
      svetlo: 10,
        svetloname: 'Světlo',
        ordersvetlo: '',
    };

    handleChangeBlatnik = () => {
        this.setState({
            blatnik:this.state.blatnik - 1,
        });
        this.checkStorage();
    };

    checkStorage = () => {
        if (this.state.blatnik < 5) {
            this.setState({
                orderblatnik: 15,
            })
        }
        if (this.state.svetlo < 5) {
            this.setState({
                ordersvetlo: 15,
            })
        }
    };
    handleChangeSvetlo = () => {
        this.setState({
            svetlo:this.state.svetlo - 1,
        });
        this.checkStorage();
    };


    render() {
        return (
            <div>
                <h1>Autoservis</h1>
                <br/>
                <h2>Oprava Levý blatník</h2>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Název</th>
                        <th>Počet</th>
                        <th>Status</th>
                        <th>Barva</th>
                        <th>Vybrat</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.blatnikname}</td>
                        <td>{this.state.blatnik}</td>
                        <td>Nové</td>
                        <td>Stříbrná</td>
                        <td><a href="#" onClick={this.handleChangeBlatnik}>Vybrat</a></td>
                    </tr>
                    <tr>
                        <td>{this.state.svetloname}</td>
                        <td>{this.state.svetlo}</td>
                        <td>Nové</td>
                        <td>-</td>
                        <td><a href="#" onClick={this.handleChangeSvetlo}>Vybrat</a></td>
                    </tr>
                    </tbody>
                </Table>
                <h2>Díly</h2>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Název</th>
                        <th>Počet</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.blatnikname}</td>
                        <td>{this.state.orderblatnik}</td>
                    </tr>
                    <tr>
                        <td>{this.state.svetloname}</td>
                        <td>{this.state.ordersvetlo}</td>
                    </tr>
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button bsStyle="primary"><a className="odkaz" href="#" >Objednat</a></Button>
                </ButtonToolbar>

            </div>
        );
    }
}

export default LoginJob;