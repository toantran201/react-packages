import React, {ReactNode} from 'react'
import { FontSize } from '@ds.e/foundation'

export interface TextProps {
	size?: keyof typeof FontSize,
	children: ReactNode
}

const Text: React.FC<TextProps> = (props ) => {
	const {size} = props
	const className = `dse-text dse-text-${size || 'sm'}`
	
	return <p className={className}>{props.children}</p>
}


export default Text
