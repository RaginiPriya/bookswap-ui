import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends Component {
state = { liked: false };
toggle = () => {
	let localLiked = this.state.liked;

	// Toggle the state variable liked
	localLiked = !localLiked;
	this.setState({ liked: localLiked });
};
render() {
	return (
	<div className="container">
		<center>
		<div
			className="container"
			style={{ border: "1px solid black", width: "15%" }}
			onClick={() => this.toggle()}
		>
			{this.state.liked === false ? (
			<FontAwesomeIcon icon={faHeartBroken} />
			) : (
			<FontAwesomeIcon icon={faHeart} />
			)}
		</div>
		</center>
	</div>
	);
}
}

export default Like;