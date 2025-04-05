import ProseSection from "../components/prose-section";

export default function Now() {
    return (
        <section className="prose">
            <h1 className="mt-6 mb-8 text-4xl font-semibold tracking-tighter">
                Now
            </h1>
            <p className="mb-8">This is a <a href="https://nownownow.com/about" target="_blank">now</a> page.</p>
            <ProseSection title="Career">
                <ul>
                    <li>
                        After being let go as part of a mass layoff at my previous employer
                        <a href="https://frogslayer.com" target="_blank"> Frogslayer</a>, I have been spending some
                        time exploring my entrepreneurial passions and have started a small business to do some
                        freelance software consulting work for clients. So far I completely redesigned the storefront
                        for a local retailer <a href="https://blackflagoutfitters.com" target="_blank">
                        Black Flag Outfitters</a> and am in talks with <a href="https://ussteel.com" target="_blank">
                        US Steel</a> to develop a new mobile application to assist with their equipment inspection
                        processes.
                    </li>
                    <li>
                        I have been striving to round out my skills as a software developer and have been working on
                        strengthening my weak areas to become a more senior developer. Some areas I am endeavoring to
                        grow further in are database design and management, software architecture, and DevOps.
                    </li>
                </ul>
            </ProseSection>
            <ProseSection title="Personal">
                <ul>
                    <li>
                        In my free time I have been trying to gain a deeper understanding of modern AI/ML
                        and have been slowly making my way though the <a href="https://nnfs.io" target="_blank">
                        Neural Networks from Scratch in Python</a> book and plan to start on the
                        <a href="https://www.fast.ai" target="_blank"> fast.ai</a> course afterwards.
                    </li>
                    <li>
                        Every so often I take a few minutes to chip away at a few pages from
                        <a href="https://www.amazon.com/dp/0465026567?tag=bravesoftwa04-20&linkCode=osi&th=1&psc=1&language=en_US">
                            Godel, Escher, Bach</a>. I'll finish it some day but for now I'm simply enjoying the ride.
                    </li>
                    <li>
                        I am also doing my best to keep up with my Japanese studies. I need to immerse more to take my
                        skills to the next level but I just can't justify giving it the time right now with work being
                        as infrequent as it is lately. I hope to finally take and pass the JLPT N2 before too long.
                    </li>
                </ul>
            </ProseSection>
        </section>
    )
}