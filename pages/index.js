import { useRef, useState} from 'react'
import Typist from 'react-typist';
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
    const contactRef = useRef(null);
    const [show, setShow] = useState(false);

    const scrollTo = () => {
        window.scrollTo({
            top: contactRef.current.offsetTop,
            behavior: "smooth"
        });
        closeMenu();
    };

    const closeMenu = () => {
        if(show) {
            setShow(false);
        }
    };

    return (
        <div className="main">
            <Head>
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8"/>
                <meta charSet="utf-8"/>
                <title>Luiz Bueno - Full Stack Developer</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="description"
                    content="Online portifolio of Luiz Bueno and his experience with web development, user experience and user interfaces and agile frameworks."/>
                <meta name="author" content="Luiz Bueno - contact@luizbueno.com"/>
            </Head>

            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container">
                        <button
                            onClick={()=>setShow(!show)}
                            type="button"
                            className="btn btn-navbar"
                            data-toggle="collapse"
                            data-target=".nav-collapse"
                            aria-label="Hamburguer Mobile Menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="brand" href="#">
                            <div className="logo-wrapper blink">
                                <div className="logo">
                                  <Image src="/images/pc.png" alt="Vintage Computer Logo" className="header-icon" width={60} height={53} />
                                </div>
                                <div className="logo-text">
                                    <div className="logo-text__name">Luiz Bueno`s</div>
                                    <div className="logo-text__subtext">Web Development</div>
                                    <div className="logo-text__subtext">Website</div>
                                </div>
                            </div>
                        </a>
                        <div className="nav-collapse collapse" style={show?{overflow:"visible"}:{overflow:"hidden"}}>
                            <ul className="nav">
                                <li>
                                    <a href="#portifolio" onClick={closeMenu}>#Portifolio</a>
                                </li>
                                <li>
                                    <a href="#contact" onClick={scrollTo}>@Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="jumbotron">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>
                                <Typist cursor={{show: false}}>
                                    Hi!
                                </Typist>
                                </h1>
                            </div>
                            <div className="col-lg-12 second-title">
                                <Typist cursor={{show: false}}>
                                    <Typist.Delay ms={2000} />
                                    My name is Luiz Bueno.
                                </Typist>
                            </div>
                            <div className="col-lg-12 second-title">
                            <Typist cursor={{show: false}}>
                                <Typist.Delay ms={5000} />
                                And I`m a Web Developer!
                            </Typist>
                            </div>
                        </div>
                        <video poster="images/poster.webp" autoPlay="autoplay" loop="loop" tabIndex="0">
                            <source src="images/coding.webm" type="video/webm;" codecs="vp8, vorbis"/>
                        </video>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="hero-unit mx-auto about-wrapper">
                            <p>
                                I`ve been working since 2009 develop systems both in the Frontend and Backend
                                part, with web-based applications. And I like to create good experiences, so
                                people feel the applications I developed are useful, effective and friendly.
                            </p>
                            <p>
                                I`m Web developer who have a Bachelor degree in Information Systems by
                                Pontifícia Universidade Católica de Minas Gerais (PUC - Minas). I have a
                                postgraduate course in Web Development Systems, by Pontifícia Universidade
                                Católica de Minas Gerais (PUC - Minas). And by now, i`m coursing UX Desing and
                                Agile Frameworks postgraduate course at Pontifícia Universidade Católica de
                                Minas Gerais (PUC - Minas) too, trying to increase my knowledge in this topics.
                            </p>
                            <p>
                                I`m also have experience with leadership of development teams, acting as
                                <a href="https://www.scrum.org/user/293231" target="_blank" rel="noopener noreferrer">Scrum Master</a>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <hr/>
                    <div className="row">
                        <div className="mx-auto social">
                            <div className="social-title">You can find me at these links:</div>
                            <div className="social-links">
                                <a className="btn" href="https://www.linkedin.com/in/luizhenriquebueno/">LinkedIn</a>
                                <a className="btn" href="https://github.com/luizgringo">GitHub</a>
                                <a className="btn" href="https://resume.io/r/J3fOKEJPI">My Resume</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <hr/>
                    <div className="row">
                        <div className="mx-auto whatsapp">
                            <div className="whatsapp-title">...or you can send me a message through whatsapp:</div>
                            <div className="whatsapp-image">
                                <a className="whatsapp-image-link" href="https://wa.link/lomruy">
                                    <Image src="/images/qrcode.png" alt="Whatsapp QR Code" width={180} height={180} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="lead" ref={contactRef}>
                    <h2 className="blink">Do you want to get in touch?</h2>
                    <p className="talk-with-me">Send me an e-mail: contact[at]luizbueno.com</p>
                </footer>
            </div>
        </div>
    )
}

export default Home;
