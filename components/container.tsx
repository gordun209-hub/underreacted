import { FunctionComponent, ReactNode } from 'react'

type Props = {
	children?: ReactNode
}

const Container: FunctionComponent<Props> = ({ children }) => {
	return <div className='container mx-auto px-5'>{children}</div>
}

export default Container
