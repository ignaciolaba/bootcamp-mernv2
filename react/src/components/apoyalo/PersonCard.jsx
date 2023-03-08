import React from 'react'

class PersonalCard extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                aumentarAge: this.props.age
            } 
        }

        render() {
            const {firstName, lastName, age, hairColor} = this.props;

            return <div className=''>
                <h1>{lastName}, {firstName}</h1>
                <p>{age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => {
                    this.setState({aumentarAge: this.state.aumentarAge + 1})
                    }}
                    >
                    Birthday Button for {firstName} {lastName}
                    </button>
            </div>
        }
}

export default PersonalCard;