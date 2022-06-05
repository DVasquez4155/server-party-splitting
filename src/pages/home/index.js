import React from "react";
import { Form, Row, Table } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import specs from '../../db/food.json';

const us = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: 1, check:1,
            tables: {
                1:  {
                    subTotal: 0,
                    tipTotal: 0,
                    barTotal: 0
                }
            },
            totals: {
                subTotal: 0,
                tipTotal: 0,
                barTotal: 0
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if (event.target.id === "checkNumber" && parseInt(event.target.value) >= 1) {
            this.setState({check: parseInt(event.target.value)})
        }
        else if (event.target.id === "tableNumber" && parseInt(event.target.value) >= 0) {
            this.setState({table: parseInt(event.target.value)})
        }
    }
    calc(e,checkNumber) {
        if (isNaN(parseFloat(e.target.value))) {
            e.target.value = 0.00
        }
        let total = parseFloat(e.target.value)
        const currentState = this.state.tables;
        if (currentState[checkNumber] === undefined) {
            currentState[checkNumber] = {
                subTotal: 0,
                tipTotal: 0,
                barTotal: 0
            }
        }
        if (e.target.id === "s") {
            currentState[checkNumber]["subTotal"] = total;
        }
        else if (e.target.id === "t") {
            currentState[checkNumber]["tipTotal"] = total;
        }
        else if (e.target.id === "b") {
            currentState[checkNumber]["barTotal"] = total;
        }
        const totals = {
            subTotal: 0,
            tipTotal: 0,
            barTotal: 0
        }
        Object.keys(currentState).forEach((check) => {
            totals["subTotal"] += currentState[check].subTotal
            totals["tipTotal"] += currentState[check].tipTotal
            totals["barTotal"] += currentState[check].barTotal
        })
        this.setState({tables: currentState})
        this.setState({totals: totals})
    }
    getforms(tableNumber, numberOfForms) {
        var forms = [];
        for (let checkNumber = 1; checkNumber < numberOfForms+1; checkNumber++) {
            const table = tableNumber+"/"+(checkNumber);
            forms.push(
                <>
                        <th>Tbl {table}</th>
                        <td>
                        {/* {this.calc(tableNumber,checkNumber, this)} */}
                            <Form.Group controlId={"s"} onChange={(e) => this.calc(e,checkNumber)}>
                                <Form.Control type="number" min={0} placeholder="$0.00"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group controlId={"t"} onChange={(e) => this.calc(e,checkNumber)}>
                                <Form.Control type="number" min={0} placeholder="$0.00"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group controlId={"b"} onChange={(e) => this.calc(e,checkNumber)}>
                                <Form.Control type="number" min={0} placeholder="$0.00"/>
                            </Form.Group>
                        </td>
                </>
            )
        }
        return forms;
    }
    render() {
        return (
            <main className="mx-auto col-lg-10 mx-auto p-2 py-md-5 align-content-center">
                <Form onChange={this.handleChange}>
                    <Row className="justify-content-md-center">
                        <Form.Group className="mb-3 col-3" controlId="tableNumber">
                                <Form.Label>Table Number</Form.Label>
                                <Form.Control min="1" defaultValue={1} type="number" placeholder="1" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-3" controlId="checkNumber">
                                <Form.Label>Number of Checks</Form.Label>
                                <Form.Control min="1" defaultValue={1} type="number" placeholder="1" />
                        </Form.Group>
                    </Row>
                </Form>
                <hr />
                <br />
                <Row className="justify-content-md-center">
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Table Number</th>
                            <th>Subtotal of table</th>
                            <th>Total tips for table</th>
                            <th>Total subtotal for bar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.getforms(this.state.table, this.state.check)?.map((data, key) => {
                            return (
                                <tr key={key} >
                                    {data}
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </Row>
                <div className="mx-auto p-2 py-md-5 align-content-center">
                    <hr />
                    <Row>
                        <h3>Totals:</h3>
                        <br /><br /><br />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Subtotal of all tables</th>
                                    <th>Total tips for all tables</th>
                                    <th>Total subtotal for bar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${this.state.totals.subTotal}</td>
                                    <td>${this.state.totals.tipTotal}</td>
                                    <td>${this.state.totals.barTotal}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="table-success">Halved Tip (+)</th>
                                    <th className="table-danger">Halved Tip (-)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-success">{us.format(this.state.totals.tipTotal/2)}</td>
                                    <td className="table-danger">{us.format(this.state.totals.tipTotal/2)}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Total Indirect</th>
                                    <th className="table-success">Halved Indirect (+)</th>
                                    <th className="table-danger">Halved Indirect (-)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Bar (5%)</th>
                                    <td>{us.format(this.state.totals.barTotal*0.05)}</td>
                                    <td className="table-success">{us.format(this.state.totals.barTotal*0.05/2)}</td>
                                    <td className="table-danger">({us.format(this.state.totals.barTotal*0.05/2)})</td>
                                </tr>
                                <tr>
                                    <th>Busser (2.1%)</th>
                                    <td>{us.format(this.state.totals.subTotal*0.021)}</td>
                                    <td className="table-success">{us.format(this.state.totals.subTotal*0.021/2)}</td>
                                    <td className="table-danger">({us.format(this.state.totals.subTotal*0.021/2)})</td>
                                </tr>
                                <tr>
                                    <th>HOH (.6%)</th>
                                    <td>${this.state.totals.subTotal*0.006}</td>
                                    <td className="table-success">{us.format(this.state.totals.subTotal*0.006/2)}</td>
                                    <td className="table-danger">({us.format(this.state.totals.subTotal*0.006/2)})</td>
                                </tr>
                                <tr>
                                    <th>Host (.3%)</th>
                                    <td>${this.state.totals.subTotal*0.03}</td>
                                    <td className="table-success">{us.format(this.state.totals.subTotal*0.003/2)}</td>
                                    <td className="table-danger">({us.format(this.state.totals.subTotal*0.003/2)})</td>
                                </tr>
                                <tr>
                                    <th>Total Indirect</th>
                                    <td>{us.format(
                                        (this.state.totals.barTotal*0.05) +
                                        (this.state.totals.subTotal*0.021) +
                                        (this.state.totals.subTotal*0.006) + 
                                        (this.state.totals.subTotal*0.003)
                                    )}</td>
                                    <td className="table-success">{us.format(
                                        ((this.state.totals.barTotal*0.05) +
                                        (this.state.totals.subTotal*0.021) +
                                        (this.state.totals.subTotal*0.006) + 
                                        (this.state.totals.subTotal*0.003))/1
                                    )}</td>
                                    <td className="table-danger">{us.format(
                                        ((this.state.totals.barTotal*0.05) +
                                        (this.state.totals.subTotal*0.021) +
                                        (this.state.totals.subTotal*0.006) + 
                                        (this.state.totals.subTotal*0.003))/2
                                    )}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </div>
            </main>
        )
    }
}

export default index;