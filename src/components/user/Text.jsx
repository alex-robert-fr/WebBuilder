import ContentEditable from "react-contenteditable";
import React, {useEffect, useState} from 'react'
import { useNode } from "@craftjs/core";

export default Text = ({text, fontSize, textAlign /* valeurs modifiables */}) => {

	// useNode est un Hook fournissant des méthodes et des informations d'état liées au Node qui gère le composant actuel
	const {
		connectors: { connect, drag }, selected,
		actions: { setProp },
	} = useNode((state) => ({
		selected: state.events.selected,
		dragged: state.events.dragged
	}))

	const [editable, setEditable] = useState(false)

	useEffect(() => {
		if (selected) {
			return
		}

		setEditable(false)
	}, [selected])

    return(
		<div
			// Composant dragable et dropable
			ref={(ref) => connect(drag(ref))}

			// Au clic, l'élément est séléctionné et deviens éditable
			onClick={() => selected && setEditable(true)}
			>
			<ContentEditable
				// Élement éditable
				html={text}
				disabled={!editable}
				onChange={(e) => setProp((props) => {
					props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')
				})}
				tagName="h1"
				style={{ fontSize: `${fontSize}px`, textAlign }}
			/>
		</div>
	)
}
