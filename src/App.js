import React from 'react';
import './App.css';
import {
    BUTTON_ADD, BUTTON_DIVIDE,
    BUTTON_EIGHT,
    BUTTON_FIVE,
    BUTTON_FOUR, BUTTON_MULTIPLY, BUTTON_NINE,
    BUTTON_ONE,
    BUTTON_SEVEN,
    BUTTON_SIX, BUTTON_SUBTRACT,
    BUTTON_THREE,
    BUTTON_TWO, BUTTON_ZERO
} from "./lib/buttons";
import {ButtonOperand} from "./components/ButtonOperand";
import {Display} from "./components/Display";
import {ButtonOperator} from "./components/ButtonOperator";
import {BUTTON_TYPE_OPERAND, BUTTON_TYPE_OPERATOR} from "./lib/constants";
import {Title} from "./components/Title";
import {evaluate} from "mathjs"

class App extends React.Component {

    state = {
        display: '',
        expression: '',
        result: 0,
        lastUsedOperator: null
    }

    onButtonPress = (buttonType, button) => {

        // update display
        const display = this.updateDisplay(buttonType, button);

        // update state if required
        let lastUsedOperator = null;
        if (buttonType === BUTTON_TYPE_OPERAND) {
            lastUsedOperator = null
        } else {
            lastUsedOperator = button.value
        }


        const expression = this.updateExpression(buttonType, button);

        const result = this.calculateResult(expression);
 
        this.setState({
            display,
            lastUsedOperator,
            expression,
            result
        });

    };

    calculateResult = (expression) => {
        let {result} = this.state;
        try{
            result = evaluate(expression);
        } catch (e) {
            console.log("Evaluation error");
        }

        return result;

    }

    updateExpression = (buttonType, button) => {
        let {expression} = this.state;

        console.log('last op', this.state.lastUsedOperator);
        if (this.state.lastUsedOperator && buttonType === BUTTON_TYPE_OPERATOR){
            return expression;
        }

        expression += button.value;
        return expression
    }

    updateDisplay = (buttonType, button) => {

        const {display} = this.state;

        // prevent adding multiple operator in a sequence
        if (this.state.lastUsedOperator && buttonType === BUTTON_TYPE_OPERATOR){
            return display;
        }

        let displayValue = button.value;

        if (buttonType === BUTTON_TYPE_OPERATOR) {
            displayValue = button.label;
        }

        return String(display) + String(displayValue);
    }

    onPressClear = () => {
        // reset all states
        this.setState({
            display: '',
            expression: '',
            result: 0,
            lastUsedOperator: null
        });
    }

    render () {

        const {display, result} = this.state;

        return (
            <React.Fragment>
                
                <Title text="React Calculator"/>   

                <div className="container container-light" style={{marginTop: 50}}>

                    <Display display={display} result={result}/>

                    <div className="d-flex justify-content-between button-row">
                        <button id="left-parenthesis" type="button" className="operator-group operator-group-light">&#40;</button>
                        <button id="right-parenthesis" type="button" className="operator-group operator-group-light">&#41;</button>
                        <button id="square-root" type="button" className="operator-group operator-group-light">&#8730;</button>
                        <button id="square" type="button" className="operator-group operator-group-light">&#120;&#178;</button>
                    </div>

                    <div className="d-flex justify-content-between button-row">
                        <button id="clear" className="clear-light" type="button" onClick={this.onPressClear} >&#67;</button>
                        <button id="backspace" className="backspace-light" type="button">&#9003;</button>
                        <button id="ans" type="button" className="operand-group ans-light">&#65;&#110;&#115;</button>
                        <ButtonOperator button={BUTTON_DIVIDE} onPress={this.onButtonPress}/>
                    </div>


                    <div className="d-flex justify-content-between button-row">
                        <ButtonOperand button={BUTTON_SEVEN} onPress={this.onButtonPress}/>
                        <ButtonOperand button={BUTTON_EIGHT} onPress={this.onButtonPress}/>
                        <ButtonOperand button={BUTTON_NINE} onPress={this.onButtonPress}/>
                        <ButtonOperator button={BUTTON_MULTIPLY} onPress={this.onButtonPress}/>
                    </div>


                    <div className="d-flex justify-content-between button-row">
                        <ButtonOperand button={BUTTON_FOUR} onPress={this.onButtonPress}/>
                        <ButtonOperand button={BUTTON_FIVE} onPress={this.onButtonPress}/>
                        <ButtonOperand button={BUTTON_SIX} onPress={this.onButtonPress}/>
                        <ButtonOperator button={BUTTON_SUBTRACT} onPress={this.onButtonPress}/>
                    </div>


                    <div className="d-flex justify-content-between button-row">
                        <ButtonOperand button={BUTTON_ONE} onPress={this.onButtonPress}/>
                        <ButtonOperand button={BUTTON_TWO} onPress={this.onButtonPress}/>
                        <ButtonOperand button={BUTTON_THREE} onPress={this.onButtonPress}/>
                        <ButtonOperator button={BUTTON_ADD} onPress={this.onButtonPress}/>
                        {/*<button id="add" type="button" className="operator-group operator-group-light">&#43;</button>*/}
                    </div>

                    <div className="d-flex justify-content-between button-row">
                        <button id="percentage" type="button" className="operand-group operand-group-light">&#37;</button>
                        <ButtonOperand button={BUTTON_ZERO} onPress={this.onButtonPress}/>
                        <button id="decimal" type="button" className="operand-group operand-group-light">&#46;</button>
                        <button id="equal" className="equal-light" type="button">&#61;</button>
                    </div>

                </div>
            </React.Fragment>
        );
    }

}

export default App;
