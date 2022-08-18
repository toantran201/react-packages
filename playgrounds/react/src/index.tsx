import React from 'react'
import {createRoot} from "react-dom/client";
import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Select.css'
import '@ds.e/scss/lib/global.css'
import {Select} from "@ds.e/react";

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
	<div style={{padding: '40px'}}>
		<Select
			options={[
				{label:'Red', value: 'red'},
				{label:'Yellow', value: 'yellow'},
				{label:'Blue', value: 'blue'},
				{label:'Orange', value: 'orange'},
			]}
		/>
	</div>
)
