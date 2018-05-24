import React, {Component} from "react";
import { ButtonToolbar, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/main.css';


class CarServiceDetail extends Component {
    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Hotovo</th>
                        <th>#</th>
                        <th>Projekt</th>
                        <th>Předmět</th>
                        <th>Přiřazeno</th>
                        <th>Pracuje se</th>
                        <th>Dokončit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ne</td>
                        <td>1</td>
                        <td>Karoserie</td>
                        <td>Levý blatník</td>
                        <td>Petr Novák</td>
                        <td>
                            {/* <a href='/loginJob'>Prihlasit se</a> */}
                            <ButtonToolbar>
                                
                                    <Link className="buttonWhite" to='/loginJob' >
                                        <Button  bsStyle="primary">Přihlásit se</Button>
                                    </Link>
                                
                            </ButtonToolbar>
                        </td>
                        <td><a href='#'>Odeslat</a></td>
                    </tr>
                    <tr>
                        <td>Ano</td>
                        <td>2</td>
                        <td>Převodovka</td>
                        <td>Ložiska</td>
                        <td>Luděk Veselý</td>
                        <td className="white">
                            <ButtonToolbar>
                                <Button bsStyle="success">
                                    <Link className="buttonWhite" to='/loginJob' >Pracuje se</Link>
                                </Button>
                            </ButtonToolbar>
                        </td>
                        <td><a href='#'>Odeslat</a></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CarServiceDetail;