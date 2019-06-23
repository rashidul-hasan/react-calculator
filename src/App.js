import React from 'react';
import './App.css';

function App() {
  return (
        <div className="container container-light" style={{marginTop: 150}}>
            <h1>Calculator App</h1>

            <form>
                <input readOnly id="display1" type="text" className="form-control-lg text-right  form-input-light" />
                    <input readOnly id="display2" type="text" className="form-control-lg text-right  form-input-light" />
            </form>

            <div className="d-flex justify-content-between button-row">
                <button id="left-parenthesis" type="button" className="operator-group operator-group-light">&#40;</button>
                <button id="right-parenthesis" type="button" className="operator-group operator-group-light">&#41;</button>
                <button id="square-root" type="button" className="operator-group operator-group-light">&#8730;</button>
                <button id="square" type="button" className="operator-group operator-group-light">&#120;&#178;</button>
            </div>

            <div className="d-flex justify-content-between button-row">
                <button id="clear" className="clear-light" type="button">&#67;</button>
                <button id="backspace" className="backspace-light" type="button">&#9003;</button>
                <button id="ans" type="button" className="operand-group ans-light">&#65;&#110;&#115;</button>
                <button id="divide" type="button" className="operator-group operator-group-light">&#247;</button>
            </div>


            <div className="d-flex justify-content-between button-row">
                <button id="seven" type="button" className="operand-group operand-group-light">&#55;</button>
                <button id="eight" type="button" className="operand-group operand-group-light">&#56;</button>
                <button id="nine" type="button" className="operand-group operand-group-light">&#57;</button>
                <button id="multiply" type="button" className="operator-group operator-group-light operand-group-light">&#215;</button>
            </div>


            <div className="d-flex justify-content-between button-row">
                <button id="four" type="button" className="operand-group operand-group-light">&#52;</button>
                <button id="five" type="button" className="operand-group operand-group-light">&#53;</button>
                <button id="six" type="button" className="operand-group operand-group-light">&#54;</button>
                <button id="subtract" type="button" className="operator-group operator-group-light">&#8722;</button>
            </div>


            <div className="d-flex justify-content-between button-row">
                <button id="one" type="button" className="operand-group operand-group-light">&#49;</button>
                <button id="two" type="button" className="operand-group operand-group-light">&#50;</button>
                <button id="three" type="button" className="operand-group operand-group-light">&#51;</button>
                <button id="add" type="button" className="operator-group operator-group-light">&#43;</button>
            </div>

            <div className="d-flex justify-content-between button-row">
                <button id="percentage" type="button" className="operand-group operand-group-light">&#37;</button>
                <button id="zero" type="button" className="operand-group operand-group-light">&#48;</button>
                <button id="decimal" type="button" className="operand-group operand-group-light">&#46;</button>
                <button id="equal" className="equal-light" type="button">&#61;</button>
            </div>

        </div>
  );
}

export default App;
