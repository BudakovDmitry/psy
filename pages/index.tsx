import styles from '../styles/index.module.scss'
import Image from 'next/image'
import { ysabeau, kiwiMaru } from '../app/fonts'
import bg1 from '../public/bg_1.svg'
import bg2 from '../public/bg_2.svg'
import bg4 from '../public/bg_4.svg'
import startBg from '../public/start_bg.svg'
import photo from '../public/photo.png'
import icon1 from '../public/icons/bi_briefcase.svg'
import icon2 from '../public/icons/bi_journal-code.svg'
import icon3 from '../public/icons/carbon_user-multiple.svg'
import icon4 from '../public/icons/clarity_devices-line.svg'
import icon5 from '../public/icons/fluent_design-ideas-20-regular.svg'
import icon6 from '../public/icons/grommet-icons_technology.svg'
import icon7 from '../public/icons/iconoir_bank.svg'
import icon8 from '../public/icons/iconoir_google-docs.svg'
import postImage from '../public/post.jpg'
import subscribeBg from '../public/subscribe_bg.svg'
import subscribeBgDots from '../public/subscribe_bg_dots.svg'
import SliderFeedback from '../components/SliderFeedback/SliderFeedback'

const Index = () => {
    return ( 
        <>
            <header className={`${styles.header} ${ysabeau.className} container`}>
                <h3 className={`${styles.header__logo} ${ysabeau.className}`}>Bu<span className={styles.header__logo_letter}>d</span>akova</h3>
                {/* <h3 className={`${styles.header__logo_name} ${ysabeau.className}`}><span className={styles.header__logo_letter}>d</span>arya</h3> */}
                <nav className={styles.header__nav}>
                    <a className={styles.header__nav_link} href="#">Home</a>
                    <a className={styles.header__nav_link} href="#">Categories</a>
                    <a className={styles.header__nav_link} href="#">Service</a>
                    <a className={styles.header__nav_link} href="#">Jobs</a>
                </nav>
                <button className={`${styles.button_main} ${styles.header__button}`}>Post a Vacancy</button>
            </header>
            <main className={styles.main}>
                <Image className={styles.main__background_first} src={bg1} alt='background-1' />
                <div className={styles.main__background_second_container}>
                    <Image className={styles.main__background_second} src={bg2} alt='background-2' />
                    <Image className={styles.main__photo} src={photo} alt='photo' />
                </div>
                <div className="container">
                    <h1 className={`${styles.main__title} ${ysabeau.className}`}>Find & Apply For Your Dream Job</h1>
                    <p className={styles.main__description}>The website is chockablock with useful features, allowing you to efficiently search and apply for roles across all sectors, experience levels and locations.</p>
                </div>
            </main>
            <section className={styles.popular}>
                <div className={`${styles.popular__content} container`}>
                    <h2 className={`${styles.section_title} ${styles.section_title_white} ${ysabeau.className} ${styles.popular__title}`}>Popular Job Posts</h2>
                    <div className={styles.popular__cards}>
                        <div className={styles.popular__card}>
                            
                        </div>
                        <div className={styles.popular__card}>

                        </div>
                        <div className={styles.popular__card}>

                        </div>
                    </div>
                    <a className={styles.popular__link} href="#">View All</a>
                </div>
            </section>
            <section className={styles.categories}>
                <div className={`${styles.categories__content} container`}>
                    <h2 className={`${styles.section_title} ${styles.categories__title} ${ysabeau.className}`}>Job Categories</h2>
                    <div className={styles.categories__grid}>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                {/* <Image className={styles.categories__card_icon_image} src={icon1} alt='icon-1' /> */}
                                <svg className={styles.categories__card_icon_image} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="bi:briefcase" clip-path="url(#clip0_1_398)">
                                <g id="Group">
                                <path id="Vector" d="M24.375 3.75C22.8832 3.75 21.4524 4.34263 20.3975 5.39752C19.3426 6.45242 18.75 7.88316 18.75 9.375V11.25H5.625C4.13316 11.25 2.70242 11.8426 1.64752 12.8975C0.592632 13.9524 0 15.3832 0 16.875L0 46.875C0 48.3668 0.592632 49.7976 1.64752 50.8525C2.70242 51.9074 4.13316 52.5 5.625 52.5H54.375C55.8668 52.5 57.2976 51.9074 58.3525 50.8525C59.4074 49.7976 60 48.3668 60 46.875V16.875C60 15.3832 59.4074 13.9524 58.3525 12.8975C57.2976 11.8426 55.8668 11.25 54.375 11.25H41.25V9.375C41.25 7.88316 40.6574 6.45242 39.6025 5.39752C38.5476 4.34263 37.1168 3.75 35.625 3.75H24.375ZM24.375 7.5H35.625C36.1223 7.5 36.5992 7.69754 36.9508 8.04918C37.3025 8.40081 37.5 8.87772 37.5 9.375V11.25H22.5V9.375C22.5 8.87772 22.6975 8.40081 23.0492 8.04918C23.4008 7.69754 23.8777 7.5 24.375 7.5ZM31.4475 33.4275L56.25 26.8162V46.875C56.25 47.3723 56.0525 47.8492 55.7008 48.2008C55.3492 48.5525 54.8723 48.75 54.375 48.75H5.625C5.12772 48.75 4.65081 48.5525 4.29917 48.2008C3.94754 47.8492 3.75 47.3723 3.75 46.875V26.8125L28.5525 33.4275C29.501 33.6801 30.499 33.6801 31.4475 33.4275ZM5.625 15H54.375C54.8723 15 55.3492 15.1975 55.7008 15.5492C56.0525 15.9008 56.25 16.3777 56.25 16.875V22.935L30.4837 29.805C30.1668 29.8896 29.8332 29.8896 29.5162 29.805L3.75 22.935V16.875C3.75 16.3777 3.94754 15.9008 4.29917 15.5492C4.65081 15.1975 5.12772 15 5.625 15Z" fill="#EE4F3C"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_398">
                                <rect width="60" height="60" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>

                            </div>
                            <h4 className={styles.categories__card_title}>Accouting & Finance</h4>
                            <p className={styles.categories__card_description}>125 Job Vacancy</p>
                        </div>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                <Image className={styles.categories__card_icon_image} src={icon2} alt='icon-2' />
                            </div>
                            <h4 className={styles.categories__card_title}>UI/UX Design</h4>
                            <p className={styles.categories__card_description}>52 Job Vacancy</p>
                        </div>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                <Image className={styles.categories__card_icon_image} src={icon3} alt='icon-3' />
                            </div>
                            <h4 className={styles.categories__card_title}>Content Writing</h4>
                            <p className={styles.categories__card_description}>150 Job Vacancy</p>
                        </div>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                <Image className={styles.categories__card_icon_image} src={icon4} alt='icon-4' />
                            </div>
                            <h4 className={styles.categories__card_title}>Accouting & Finance</h4>
                            <p className={styles.categories__card_description}>125 Job Vacancy</p>
                        </div>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                <Image className={styles.categories__card_icon_image} src={icon5} alt='icon-5' />
                            </div>
                            <h4 className={styles.categories__card_title}>Digital Marketing</h4>
                            <p className={styles.categories__card_description}>150 Job Vacancy</p>
                        </div>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                <Image className={styles.categories__card_icon_image} src={icon6} alt='icon-6' />
                            </div>
                            <h4 className={styles.categories__card_title}>Technical Support</h4>
                            <p className={styles.categories__card_description}>350 Job Vacancy</p>
                        </div>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                <Image className={styles.categories__card_icon_image} src={icon7} alt='icon-7' />
                            </div>
                            <h4 className={styles.categories__card_title}>Human Resource</h4>
                            <p className={styles.categories__card_description}>35 Job Vacancy</p>
                        </div>
                        <div className={styles.categories__card}>
                            <div className={styles.categories__card_icon_container}>
                                <Image className={styles.categories__card_icon_image} src={icon8} alt='icon-8' />
                            </div>
                            <h4 className={styles.categories__card_title}>Art & Illustration</h4>
                            <p className={styles.categories__card_description}>52 Job Vacancy</p>
                        </div>
                    </div>
                </div>
                <Image className={styles.categories__background_element} src={bg4} alt="bg_4" />
            </section>
            <section className={styles.start}>
                <div className={`${styles.start__content} container`}>
                    <div className={styles.start__text}>
                        <h2 className={`${styles.section_title} ${styles.start__title} ${ysabeau.className}`}>Get Start New Job</h2>
                        <p className={styles.start__description}>Create an account so you can get job information that suits you, and you can apply the salary your demand.</p>
                        <button className={styles.button_main}>Create an Account</button>
                    </div>
                    <Image className={styles.start__background} src={startBg} alt="background" />
                </div>
                <Image className={styles.start__background_element} src={bg4} alt="bg_4" />
            </section>
            <section className={styles.post}>
                <div className={`${styles.post__content} container`}>
                <Image className={styles.post__image} src={postImage} alt="Post image" />
                <div className={styles.post__text}>
                        <h2 className={`${styles.section_title} ${styles.post__title} ${ysabeau.className}`}>Post a Job for UX Designer</h2>
                        <p className={styles.post__description}>Create an account so you can get job information that suits you, and you can apply the salary your demand.</p>
                        <button className={styles.button_main}>Post a Job</button>
                    </div>
                </div>
            </section>
            <section className={`${styles.feedback} container`}>
                <h2 className={`${styles.section_title} ${styles.feedback__title} ${ysabeau.className}`}>Great Feedback From Candidates</h2>
                <SliderFeedback />
            </section>
            <section className={styles.subscribe}>
                <div className={`${styles.subscribe__content} container`}>
                    <h2 className={`${styles.section_title} ${styles.section_title_white} ${ysabeau.className} ${styles.subscribe__title}`}>Subscribe to get update vacancy post</h2>
                    <div className={styles.subscribe__input_container}>
                        <input className={styles.subscribe__input} type="text" name="email" id="subscribe" placeholder='Email' />
                        <button className={`${styles.button_main} ${styles.subscribe__input_button}`}>Subscribe</button>
                    </div>
                    <Image className={styles.subscribe__content_bg} src={subscribeBg} alt="Subscribe background" /> 
                    <Image className={styles.subscribe__content_bg_dots} src={subscribeBgDots} alt="Subscribe background dots" /> 
                </div>
            </section>
        </> 
    );
}
 
export default Index;