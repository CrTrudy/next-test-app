import { footerLinks } from '@/constant';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}: ColumnProps) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map((link) => 
            <Link href="/" key={link}>{link}</Link>)}
        </ul>

    </div>
)

const Footer = () => {
  return (
    <footer className='flexStart footer'>
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex items-start flex-col'>
                <Image
                    src="/logo-purple.svg"
                    width={115}
                    height={38}
                    alt='Flexible'
                />

                <p className='text-start text-sm font-normal mt-5 max-w-xs'>Flexible is world leading...</p>
                <div className='flex flex-wrap gap-12'>
                    <div>
                        <br />
                        <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
                        <br />
                        <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                    </div>
                    <div>
                        <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                        <br />
                        <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
                    </div>
                    <div>
                        <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                        <br />
                        <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                    </div>
                    <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>@ 2023 Flexible all right!</p>
                <p className="text-grey">
                    <span className="text-black font-semibold">
                        10,214
                    </span>
                    prijects submitted!
                </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer