import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen" >
                <div className="screen-text" >
                    {this.props.value}
                </div>
            </div>
        )
    }
}

class Number extends React.Component {
    render() {
        return (
            <div>
                <button className="number-box" onClick={this.props.onClick} >
                    {this.props.value}
                </button>
            </div>
        )
    }
}

class Symbols extends React.Component {
    render() {
        return (
            <div>
                <button className="symbols-box" onClick={this.props.onClick}>
                    {this.props.value}
                </button>
            </div>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberState: 0,
            previousNumber: null,

            plusClicked: false,
            minusClicked: false,
            equalsClicked: false,
            timesClicked: false,
            dividedClicked: false,
        }

        this.num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        this.onNumberClick = this.onNumberClick.bind(this);

        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
        this.onEqualsClick = this.onEqualsClick.bind(this);
        this.onTimesClick = this.onTimesClick.bind(this);
        this.onDividedClick = this.onDividedClick.bind(this);
        this.onCClick = this.onCClick.bind(this);
    }

    onNumberClick(num) {

        this.setState({
            numberState: (this.state.numberState * 10) + num,

        });
    }

    onPlusClick() {
        this.setState({
            previousNumber: this.state.numberState,
            numberState: null,
            plusClicked: true,
            minusClicked: false,
            timesClicked: false,
            dividedClicked: false
        });
    }

    onMinusClick() {
        this.setState({
            previousNumber: this.state.numberState,
            numberState: null,
            minusClicked: true,
            plusClicked: false,
            timesClicked: false,
            dividedClicked: false
        })
    }

    onTimesClick() {
        this.setState({
            previousNumber: this.state.numberState,
            numberState: null,
            timesClicked: true,
            plusClicked: false,
            minusClicked: false,
            dividedClicked: false
        })
    }

    onDividedClick() {
        this.setState({
            previousNumber: this.state.numberState,
            numberState: null,
            dividedClicked: true,
            plusClicked: false,
            minusClicked: false,
            timesClicked: false,
        })
    }

    onEqualsClick() {
        if (this.state.plusClicked === true) {
            this.setState({
                numberState: this.state.previousNumber + this.state.numberState,
                plusClicked: false
            })
        } else if (this.state.minusClicked === true) {
            this.setState({
                numberState: this.state.previousNumber - this.state.numberState,
                minusClicked: false,
            })
        } else if (this.state.timesClicked === true) {
            this.setState({
                numberState: this.state.previousNumber * this.state.numberState,
                timesClicked: false,
            })
        } else if (this.state.dividedClicked === true) {
            this.setState({
                numberState: this.state.previousNumber / this.state.numberState,
                dividedClicked: false,
            })
        }
    }

    onCClick() {
        this.setState({
            numberState: 0,
            previousNumber: 0,
            plusClicked: false,
            minusClicked: false,
            timesClicked: false,
            dividedClicked: false
        })
    }

    render() {
        return (
            <div className="container" >
                <div className="wrapper">
                    <Screen
                        value={this.state.numberState}
                    />
                    <div className="row-1">
                        <Number value={this.num[7]} onClick={() => this.onNumberClick(this.num[7])} />
                        <Number value={this.num[4]} onClick={() => this.onNumberClick(this.num[4])} />
                        <Number value={this.num[1]} onClick={() => this.onNumberClick(this.num[1])} />
                        <Number value={this.num[0]} onClick={() => this.onNumberClick(this.num[0])} />
                    </div>
                    <div className="row-2">
                        <Number value={this.num[8]} onClick={() => this.onNumberClick(this.num[8])} />
                        <Number value={this.num[5]} onClick={() => this.onNumberClick(this.num[5])} />
                        <Number value={this.num[2]} onClick={() => this.onNumberClick(this.num[2])} />
                        <div classname="c-box">
                            <Symbols
                                value={'C'}
                                onClick={() => this.onCClick()}
                            />
                        </div>
                    </div>
                    <div className="row-3">
                        <Number value={this.num[9]} onClick={() => this.onNumberClick(this.num[9])} />
                        <Number value={this.num[6]} onClick={() => this.onNumberClick(this.num[6])} />
                        <Number value={this.num[3]} onClick={() => this.onNumberClick(this.num[3])} />
                        <Symbols value={'='} onClick={() => this.onEqualsClick()} />
                    </div>
                    <div className="row-4">
                        <Symbols value={'/'} onClick={() => this.onDividedClick()} />
                        <Symbols value={'*'} onClick={() => this.onTimesClick()} />
                        <Symbols value={'-'} onClick={() => this.onMinusClick()} />
                        <Symbols value={'+'} onClick={() => this.onPlusClick()} />
                    </div>
                </div>
            </div >

        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)