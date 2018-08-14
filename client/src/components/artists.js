import React from 'react';


export default class Artist extends React.Component {

    componentWillMount() {
        fetch('http://localhost:3000/reviews/1')
        .then(response => {
        return response.json();
        }).then(data => {
        console.log(data);
        });
    }


    render() {
        return (
        <div> </div>
        )
    }

}
