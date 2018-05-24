import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


class MyPage extends Component {
    render() {
        return (
            <div>
                <h1>Moje stránka</h1>
                <br></br>
                <h2>Strávený čas</h2>
                <hr></hr>
                <h2>Celkem: 23 hodin</h2>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Aktivita</th>
                    <th>Projekt</th>
                    <th>Komentář</th>
                    <th>Hodin</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Aktivní</td>
                    <td>Motor</td>
                    <td>Nutno opravit</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Neaktivní</td>
                    <td>Převodovka</td>
                    <td>Nutno opravit ASAP</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Aktivní</td>
                    <td>Řazení</td>
                    <td>Je tohle ten problém?</td>
                    <td>10</td>
                </tr>
                </tbody>
            </Table>
            </div>
        );
    }
}

export default MyPage;