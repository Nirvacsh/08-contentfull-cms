import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentfull cms</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minus, beatae explicabo odio consequuntur non dolore suscipit vel
            est velit accusantium amet consectetur. Fugiat cumque voluptatibus
            possimus quam delectus fugit.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and browser' />
        </div>
      </div>
    </section>
  )
}
export default Hero
