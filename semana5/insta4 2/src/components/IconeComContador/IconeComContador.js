import React from 'react'

import styled from 'styled-components';

const IconContainer = styled.section`
	display: flex;
`
const IconContainerImg = styled.img`
	margin-right: 5px;
`
export function IconeComContador(props) {
	return <IconContainer>
		<IconContainerImg alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
