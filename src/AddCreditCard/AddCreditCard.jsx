import React from "react";
import Card from "react-credit-cards";

import SupportedCards from "./Cards";

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from "./utils";

import './styles-compiled.css'
import "./AddCreditCard.css";

export default class AddCreditCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            name: "",
            expiry: "",
            cvc: "",
            issuer: "",
            focused: "",
            formData: null
        };
        this.handleCallback = this.handleCallback.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCallback({ issuer }, isValid) {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus({ target }) {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange({ target }) {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        const { issuer } = this.state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({ formData });
        this.form.reset();
    };

    render() {
        const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

        return (
            <div key="Payment">
                <div className="App-payment">
                    <h1 className="text-center">Add Credit Cards</h1>

                    <Card
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}
                    />
                    <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="number"
                                className="form-control"
                                placeholder="Card Number"
                                pattern="[\d| ]{16,22}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <small>E.g.: 49..., 51..., 36..., 37...</small>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="tel"
                                    name="expiry"
                                    className="form-control"
                                    placeholder="Valid Thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    type="tel"
                                    name="cvc"
                                    className="form-control"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                        </div>
                        <input type="hidden" name="issuer" value={issuer} />
                        <div className="form-actions">
                            <button className="btn btn-primary btn-block pay-button">PAY</button>
                        </div>
                    </form>
                    {formData && (
                        <div className="App-highlight">
                            <h3 className="text-center cardDetails">Card Details</h3>
                            {formatFormData(formData).map((d, i) => (
                                <div key={i}>
                                    {d}
                                </div>
                            ))}
                        </div>
                    )}

                    <hr style={{ margin: "30px 0" }} />
                    <SupportedCards />
                </div>


            </div>
        );
    }
}
