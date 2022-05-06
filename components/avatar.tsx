/* eslint-disable @next/next/no-img-element */
type Props = {
	name: string
	picture: string
}

const Avatar = ({ name, picture }: Props) => {
	return (
		<div className='flex pt-12   text-[#222]'>
			<img src={picture} className='mr-4 h-16 w-16 rounded-full ' alt={name} />
			<div className='font-sans text-xl font-light'>
				personal blog by <a className='text-[#d23669] underline'>{name}.</a>
				<div>I explain with words and code.</div>
			</div>
		</div>
	)
}

export default Avatar
