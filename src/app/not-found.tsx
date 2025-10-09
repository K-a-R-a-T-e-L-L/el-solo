import Image from 'next/image';
import './globals.scss';
import Link from 'next/link';

const NotFound = async () => {
    return (
        <section className='w-screen h-screen max-w-[1344px] bg-[#0a0a0a] flex items-center justify-start max-xl:justify-center relative pl-[3%] pr-[3%]' >
            <div className='absolute w-[60px] aspect-square top-[50px] left-[50px]'>
                <Image src={'/images/logo.png'} alt='Logo El Solo' fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <article className='w-[50%] h-full flex flex-col items-center justify-center max-sm:w-[100%] z-[1]'>
                <h1 className='text-[200px] text-cyan-200 max-xl:text-[130px] max-sm:text-[100px]' style={{ fontFamily: 'RubikWetPaint', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 5px rgba(0, 0, 0, 0.7)' }}>404</h1>
                <p className='text-[24px] text-center text-cyan-100 max-xl:text-[18px] max-sm:text-[14px] text_not_found'>Unfortunately, such a page has not been found, if you are sure of its existence, please contact me:
                    <a href="https://t.me/K_a_R_a_T_e_L_L" target='_blank' className='text-violet-600 hover:text-violet-400 active:opacity-70'> @K_a_R_a_T_e_L_L</a>
                </p>
                <Link href={'/'} className='cursor-pointer pt-[10px] pb-[10px] pl-[30px] pr-[20px] bg-cyan-950 hover:bg-cyan-900 active:opacity-60 rounded-[100px] mt-[40px] max-sm:mt-[20px] max-xl:text-[14px] max-sm:text-[12px]'>
                    Back to home 🏡
                </Link>
            </article>
            <article className='w-[100%] h-[100%] absolute z-[0] max-xl:h-[80%] grid place-items-center'>
                <img src={'/images/broken_monitor.webp'} alt='Изображение разбитого монитора' style={{ objectFit: 'contain' }} loading="eager" decoding="async" />
            </article>
        </section>
    );
};

export default NotFound;