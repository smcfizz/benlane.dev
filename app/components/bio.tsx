import Link from "next/link";
import Image from "next/image";
import SocialArray from "./social-array";

export default function Bio() {
    return (
        <section className="prose">
            <h1>
                Benjamin Lane
            </h1>
            <div className="flex md:flex-row sm:flex-col gap-8">
                <div className="pt-4 w-1/3 flex flex-col items-center mt-auto mb-auto">
                    <Image src="/images/headshot.png" className="rounded-full" width={512} height={512} alt="avatar"/>
                    <SocialArray github email linkedin/>
                </div>
                <div className="w-2/3">
                    <p>
                        {`Ben is a Software Engineer who is constantly excited by novel solutions to 
                challenging and important real-world problems. He first learned to code over
                10 years ago by hacking together Minecraft mods after school with his friends.`}
                    </p>
                    <p>
                        {`With nearly 5 years of consulting experience in the software development industry, 
                Ben has worked extensively with a wide range of popular technologies and frameworks. 
                Some of his favorite technologies include Flutter, React, Java Spring, ASP.NET Core, 
                and Python.`}
                    </p>
                    <p>
                        {`Take a look at the `} <Link href="/now">now</Link> {` page to see what he is currently 
                working on.`}
                    </p>
                    <p>
                        {`The main goal of this site is to provide a place for Ben to share his thoughts and 
                help drive efforts to be more intentional about pursuing his interests and documenting his 
                projects as he explores solutions to problems he encounters in day-to-day life to build a portfolio
                that showcases his skills and expertise over time.`}
                    </p>
                    <p>
                        {`A few of Ben's other personal interests include studying Japanese, skiing, bowling, 
                Dungeons & Dragons, 3D printing, and `} <a href="https://rocketleague.com">Rocket League</a>{`.`}
                    </p>
                </div>
            </div>
        </section>
    )
}