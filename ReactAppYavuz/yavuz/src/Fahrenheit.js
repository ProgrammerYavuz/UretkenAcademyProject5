import React, { Component } from 'react'

export default class Fahrenheit extends Component {
    render() {
        return (
            <div>
                <h2>Fahrenheit Değeri {this.props.tittle} °F</h2>
            </div>
        )
    }
}
