import React, {Component} from 'react'

import styled from 'styled-components';

const CommentContainer = styled.section`
	display: flex;
    justify-content: center;
    padding: 5px;
`
const InputComment = styled.span`
    width: 100%;
	margin-right: 5px;
	`

export class SecaoComentario extends Component {
	state = {
		comentario: ""
	}

	onChangeComentario = (event) => {
		this.setState({comentario: event.target.value})
	}

	render() {
		console.log(this.state.comentario)
		return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
		)
	}
}
