import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
	render() {
		return (
			<div>
				<CommentBox />
				<CommentList />
			</div>
		);
	}
}

export default App;
