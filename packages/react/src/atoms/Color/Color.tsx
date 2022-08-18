import React from "react"
import {Spacing} from "@ds.e/foundation";

type ColorProps = {
	hexCode: string
	width?: keyof typeof Spacing
	height?: keyof typeof Spacing
}

const Color: React.FunctionComponent<ColorProps> = ({hexCode, width = Spacing.sm, height = Spacing.sm}) => {
	const className = `dse-width-${width} dse-height-${height}`
	return (
		<div style={{
			backgroundColor: hexCode,
		}} className={className}>
		
		</div>
	)
}

export default Color
