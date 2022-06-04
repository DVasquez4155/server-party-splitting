import React from "react";
import { Form, Row, Table } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import specs from '../../db/food.json';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {table: 1, check:1};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if (event.target.id === "checkNumber" && parseInt(event.target.value) >= 1) {
            this.setState({check: parseInt(event.target.value)})
        }
        else if (event.target.id === "tableNumber" && parseInt(event.target.value) >= 0) {
            this.setState({table: parseInt(event.target.value)})
        }
        console.log(this.state)
    }
    getforms(tableNumber, numberOfForms) {
        var forms = [];
        for (let i = 0; i < numberOfForms; i++) {
            const table = tableNumber+"/"+i;
            forms.push(
                <>
                    <Form.Group controlId={"s"+table} className="mb-3 col-3">
                        <Form.Label>Enter Subtotal for Tbl {table}</Form.Label>
                        {/* <Form.Control type="number" id={table + "subtotal"} placeholder="" /> */}
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>
                    <Form.Group controlId={"t"+table} className="mb-3 col-3">
                        <Form.Label>Enter Tip Total for Tbl {table}</Form.Label>
                        {/* <Form.Control type="number" id={table + "tiptotal"} placeholder="" /> */}
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>
                    <Form.Group controlId={"b"+table} className="mb-3 col-3" >
                        <Form.Label>Enter Drinks for Tbl {table}</Form.Label>
                        {/* <Form.Control type="number" id={table + "barTotal"} placeholder="" /> */}
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>
                </>
            )
        }
        return forms;
    }
    render() {
        return (
            <main className="mx-auto">
                <Form onChange={this.handleChange}>
                    <Row className="justify-content-md-center">
                        <Form.Group className="mb-3 col-3" controlId="tableNumber">
                                <Form.Label>Table Number</Form.Label>
                                <Form.Control type="number" placeholder="1" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-3" controlId="checkNumber">
                                <Form.Label>Number of Checks</Form.Label>
                                <Form.Control type="number" placeholder="1" />
                        </Form.Group>
                    </Row>
                    <hr />
                    <br />
                    {this.getforms(this.state.table, this.state.check)?.map((data, key) => {
                        return (
                            <div key={key} className="App col-lg-12 mx-auto p-2 py-md-5">
                                <Row className="justify-content-md-center">
                                    {data}
                                </Row>
                            </div>
                        );
                    })}
                    <br />
                    <div className="App col-lg-10 mx-auto p-2 py-md-5 align-content-center">
                        <hr />
                        <Row>
                            <h3>Totals:</h3>
                            <br /><br /><br />
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Subtotal of all tables</th>
                                    <th>Total tips for all tables</th>
                                    <th>Total total for Bar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
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
                                        <td>$0.00</td>
                                        <td className="table-success">$0.00</td>
                                        <td className="table-danger">$0.00</td>
                                    </tr>
                                    <tr>
                                        <th>Busser (2.1%)</th>
                                        <td>$0.00</td>
                                        <td className="table-success">$0.00</td>
                                        <td className="table-danger">$0.00</td>
                                    </tr>
                                    <tr>
                                        <th>HOH (.6%)</th>
                                        <td>$0.00</td>
                                        <td className="table-success">$0.00</td>
                                        <td className="table-danger">$0.00</td>
                                    </tr>
                                    <tr>
                                        <th>Host (.3%)</th>
                                        <td>$0.00</td>
                                        <td className="table-success">$0.00</td>
                                        <td className="table-danger">$0.00</td>
                                    </tr>
                                    <tr>
                                        <th>Total Indirect</th>
                                        <td>$0.00</td>
                                        <td className="table-success">$0.00</td>
                                        <td className="table-danger">$0.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </div>
                </Form>
            </main>
        )
    }
}

export default index;