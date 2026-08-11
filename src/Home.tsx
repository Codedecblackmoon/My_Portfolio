import image from './assets/me_2.png'
import image1 from './assets/me_3.png'
import './App.css'
import './home.css'

function Home(){
    return (
        <>
            <section className="hero" id="home">
                {/* Mobile image — normal flow, centered, at the top, everything else stacks under it */}
                <img
                    className=" absolute z-1 md:hidden block mx-auto mt-0 h-[280px] w-auto object-contain select-none animate-slide-fade-in-right"
                    src={image1}
                    alt="Gideon Lenge"
                />

                <h1 className="hero-title">
                    <span className="script animate-slide-fade-in-left">My</span>
                    <span className="outline animate-slide-fade-in-right">PORTFOLIO</span>
                    <span className="signature animate-slide-fade-in-left">Gideon Lenye</span>
                </h1>

                <a href="#contact"
                 className="z-60 mt-50 sm:mt-16 md:mt-80 inline-block cursor-pointer bg-white text-black px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full text-xs sm:text-sm font-medium no-underline transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 animate-bounce">Let's Connect</a>
                {/* <img className="absolute z-50 bottom-0 right-[4%] sm:right-[6%] md:right-[8%] h-[55%] sm:h-[40%] md:h-[85%] w-auto object-contain pointer-events-none select-none object-contain animate-slide-fade-in-right" src={image} />
                 */}

                 {/* Desktop image — stays absolute, unaffected by this change */}
                <img
                    className="hidden md:block absolute z-50 bottom-0 md:right-[8%] h-[40%] md:h-[85%] w-auto object-contain pointer-events-none select-none animate-slide-fade-in-right"
                    src={image}
                    alt="Gideon Lenye"
                />
            </section>
        </>
    )
    
}

export default Home

