import { IconButton, Typography } from '@mui/material'
import vkIcon from '../../../../../public/assets/vk.png'
import instagramIcon from '../../../../../public/assets/instagram-black.png'
import tgIcon from '../../../../../public/assets/telegram.png'
import { Element } from 'react-scroll'
import Image from 'next/image'

const ContactMe = () => {
	return (
		<section className="pt-[40px]">
			<Element name="contactMeBottom">
				<h3 className="title flex-1 px-[20px] ">Как со мной связаться?</h3>
				<p className="text-slate-900 font-bold pt-[40px] pb-[50px] px-[20px] text-[18px]">
					Эта книга адресована всем, кто изучает русский язык. Но состоит она не
					из правил, упражнений и учебных текстов.
				</p>

				<div className="flex justify-center pb-[50px]">
					<IconButton size="large">
						<a href="https://vk.com/lyovina_tatt">
							<Image width={35} height={35} src={vkIcon} alt="vk" />
						</a>
					</IconButton>
					<IconButton size="large">
						<a href="https://instagram.com/lyovina_tattoo?igshid=OGQ2MjdiOTE=">
							<Image
								width={35}
								height={35}
								src={instagramIcon}
								alt="instagram"
							/>
						</a>
					</IconButton>
					<IconButton size="large">
						<a href="https://t.me/lyovina_tatt">
							<Image width={35} height={35} src={tgIcon} alt="instagram" />
						</a>
					</IconButton>
				</div>
			</Element>
		</section>
	)
}

export default ContactMe
