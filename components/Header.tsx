import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Image from 'next/image';
import close from '../images/close-outline.svg';
import menu from '../images/menu-outline.svg';

const Header = () => {

    const resMenu = useRef(null);
    const resMenuHeader = useRef(null);
    const resMenuItem1 = useRef(null);
    const resMenuItem2 = useRef(null);
    const resMenuItem3 = useRef(null);
    const resMenuItem4 = useRef(null);

    const menu_open = gsap.timeline({ paused: true, reversed: true });

    useEffect(() => {

        menu_open.to(resMenu.current, {
            y: 0,
            zIndex: 100,
            duration: 0.2
        });

        menu_open.from(
            [
                resMenuHeader.current,
                resMenuItem1.current,
                resMenuItem2.current,
                resMenuItem3.current,
                resMenuItem4.current,
            ],
            {
                duration: 0.5,
                y: -50,
                stagger: {
                    amount: 0.4
                }
            }
        )
    }, []);

    const menuOpen = () => {
        menu_open.reversed() ? menu_open.play() : menu_open.reverse()
    }

    return (
        <div>
            <div ref={resMenu} className='fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]'>
                <div className='flex justify-between items-center w-[100%] h-fit py-[5px]' ref={resMenuHeader}>
                    <div className='mx-[5px] mix-blend-difference font-semibold text-[20px] leading-none'>
                        AGENCY <br />
                        WEBSITE
                    </div>
                    <div onClick={menuOpen} className="block md:hidden cursor-pointer mx-[5px]">
                        <Image src={close} alt="close-img" className='w-9 object-contain invert' />
                    </div>
                </div>
                <div className='mx-2 my-10 space-y-1'>
                    <span className="overflow-hidden block">
                        <div ref={resMenuItem1} className="font-bold text-[30px]">WORK</div>
                        <div ref={resMenuItem2} className="font-bold text-[30px]">ABOUT</div>
                        <div ref={resMenuItem3} className="font-bold text-[30px]">OFFICE</div>
                        <div ref={resMenuItem4} className="font-bold text-[30px]">CONTACT</div>
                    </span>
                </div>
            </div>
            <div className="absolute bg-black top-0 py-[5px] font-normal h-[20vh] flex justify-between flex-col w-[100%]">
                <div id="header" className='flex items-start justify-between w-[100%] h-fit'>
                    <div className="mx-[5px] mix-blend-difference font-semibold text-[20px] leading-none">
                        AGENCY <br /> WEBSITE
                    </div>
                    <div className='mx-1 hidden mix-blend-difference font-bold text-[30px] md:block'>WORK</div>
                    <div className='mx-1 hidden mix-blend-difference font-bold text-[30px] md:block'>ABOUT</div>
                    <div className='mx-1 hidden mix-blend-difference font-bold text-[30px] md:block'>OFFICE</div>
                    <div className='mx-1 hidden mix-blend-difference font-bold text-[30px] md:block'>CONTACT</div>
                    <div onClick={menuOpen} className='block md:hidden cursor-pointer mx-[5px]'>
                        <Image alt="" src={menu} className="w-9 object-contain invert" />
                    </div>
                </div>
                <div className='flex items-start text-sm justify-between px-5 w-[100%] h-fit sm:justify-evenly'>
                    <div>An independent <br /> music agency</div>
                    <div>Amsterdam</div>
                </div>
            </div>
        </div>
    )
}

export default Header;