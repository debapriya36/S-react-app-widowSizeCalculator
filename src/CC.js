import React , {Component} from 'react';

class CC extends Component{
    constructor()
    {
        super();
        this.state={
            val : 0
        }
    }
    // componentWillMount()
    // {
    //     alert('componentWillMount');
    //     this.setState({val : 1});
    // }
    // componentDidMount()
    // {
    //     alert('componentDidMount');
    //     this.setState({val : -1});
    // }
    
    render()
    {
       return <div>
           this is class component {this.state.val}
       </div>
    } 
}

export default CC;