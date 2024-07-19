import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Benjamin Lane
        </h1>
        <p className="mb-4 italic">
          {`Thank you for visiting my little corner of the Internet! This site is a
          work in progress, so please be sure to check back regularly as I get things
          up and running. I'm very excited to share more about what I'm working on 
          with you. If you would like to get in touch, you can find my email in the
          footer below.`}
        </p>
        <p className="mb-4">
          {`I am a Software Engineer who is easily excited by the potential for novel
           solutions to challenging and important problems presented by the field
           of computer science. Ever since I hacked together my first program, I was 
           hooked on the endless possibilities computers represented.`}
        </p>
        <p className="mb-4">
          {`Since then I have dedicated my time to learning more about the world of modern
           software engineering and I strive to improve my versatility and capabilities as
           a Software Engineer so that I have the ability to execute on my imagination and
           turn my ideas into reality. One of my current role models is `}
          <a className="underline" href="https://develop.games/#nav-game">Jason Thor Hall</a>
          {` due to his encouraging demeanor, positive outlook on life, and mission to 
          inspire people to go out and make something cool.`}
        </p>
        <p className="mb-4">
          {`Some of my other personal interests include self-studying Japanese, skiing, 
          bowling, Dungeons & Dragons, 3D printing, and `}
          <a className="underline" href="https://rocketleague.com">Rocket League</a>
          {`, a silly car-soccer video game I've played an unreasonable amount of which 
          has resulted in the formation of some of my closets friendships.`}
        </p>
      </section>
  )
}
