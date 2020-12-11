import React from 'react';
import { connect } from 'react-redux';

import { getQuote } from './../actions';

import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.getQuote();
    }

    render() {


        return(<div>
            {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      smurfs: state.smurfs,
      err: state.err
    };
  };

export default connect(mapStateToProps, {getQuote})(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.