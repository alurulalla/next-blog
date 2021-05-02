import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/alurumuralikrishna.png' width={300} height={300} alt='An image showing Lalla' />
            </div>

            <h1>Hi, I am Aluru Murali Krishna</h1>
            <p>I blog about web-development - especially frontend frameworks like Next and React</p>
        </section>
    )
}

export default Hero;