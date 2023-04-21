import React, { Component } from 'react';

class Page1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            todoList: [],
            inputValue: '',
        };
    }

    handleChange = (event)=>{
        this.setState({inputValue: event.target.value});
    }
    handleClick = ()=>{
        const { todoList, inputValue } = this.state;
        if (inputValue) {
            this.setState({
                todoList: [...todoList, inputValue],
                inputValue: '',
            });
        }

    }
    handleClear = ()=>{
        const {todoList} = this.state;
        const newList = todoList.filter((item,index)=> !document.querySelector(`input[value="${index}"]`).checked);

        this.setState({
            todoList: newList,
        });
    }



    render() {
        const{todoList,inputValue} = this.state;
        return (
            <div className='page1'>
                <div className='border'>
                    <h1 className='header'>To-Do-List</h1>
                    <div className='heading'>
                        <textarea cols={30} rows={5} value={inputValue} onChange={this.handleChange}></textarea>
                        <button className='addBtn' id='addBtn' onClick={this.handleClick}>Add</button>
                        <button className='clrBtn' id='clrBtn' onClick={this.handleClear}>Clear</button>
                        <div className='list'>
                            {todoList.map((item, index) => (
                                <div key={index}>
                                    <input type="checkbox" value={index} /> {item}
                                </div>
                            ))}


                        </div>
                        <div className='footer'>Made with &#x2764; by RF</div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Page1;