var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },    

    componentWillMount: function () {
        console.log('Component will mount!' );
    },


    componentDidMount: function () {
        console.log( 'Component mounted!');
    },

    componentWillReceiveProps: function() {
        console.log('Component will receive props!');
    },

    /*shouldComponentUpdate: function () {
        console.log('Should component be updated?');
        return false;
    }, */
        
    componentWillUpdate: function() {
            console.log('Updating component')
    },

    componentDidUpdate: function() {
        console.log('updated!');
    },

    componentWillUnmount: function(){
        console.log('Component will unmount!');
    },


    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
        );
    }


});


var app = React.createElement(Counter);

ReactDOM.render(app, document.getElementById('app'));
