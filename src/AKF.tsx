import React from 'react';
import image from './assets/cup.png'
import image2 from './assets/suzan.png'
import image3 from './assets/GD.png'
import bl from './assets/blank.png'

function AKF() {
  return (
    <>
      <section id="akf">
        <div className="min-h-screen text-white grid-cols-1 md:grid-cols-2 items-center justify-center p-6 sm:p-10 border-t border-white/20">
            <div className="order-1 md:order-2">
              <h1
                className="text-center leading-none pb-20"
                style={{
                    fontFamily: '"Archivo Black", sans-serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: 200,
                    fontStyle: 'normal',
                    WebkitTextStroke: '0.5px white',
                    color: 'transparent',
                    fontSize: 'clamp(2.25rem, 5.5vw, 6.5rem)',
                    margin: '0px',
                    padding: '0',
                }}
              >
                ALSO KNOWN FOR
              </h1>
            </div>
            <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-center  px-4 py-4 sm:px-6 md:px-10 lg:px-12">
                <div className="group w-30% overflow-visible rounded-3xl border border-white p-4 sm:p-5">
                    <div className="relative flex w-full justify-center">

                        {/* First image - ABOVE */}
                        <img
                            className="
                            relative z-20
                            h-auto w-full max-w-[220px]
                            object-contain
                            transition-transform duration-300 ease-out
                            group-hover:-translate-y-2
                            group-hover:scale-125
                            group-hover:drop-shadow-[0_0_20px_rgba(80,140,255,0.6)]
                            animate-slide-fade-in-right
                            sm:max-w-[260px]
                            md:max-w-[280px]
                            "
                            src={image3}
                            alt="Graphic Designer"
                        />

                        {/* Second image - BELOW */}
                        <img
                            className="
                            absolute
                            z-10
                            h-auto w-full max-w-[120px]
                            object-contain
                            sm:max-w-[160px]
                            md:max-w-[160px]
                            "
                            src={bl}
                            alt=""
                        />

                        </div>

                    <a
                    href="#"
                    className="mt-3 block text-center text-base font-medium sm:text-lg"
                    >
                    Graphic Designer
                    </a>
                </div>
                <div className="group w-30% overflow-visible rounded-3xl border border-white p-4 sm:p-5">
                    <div className="relative flex w-full justify-center">

                        {/* First image - ABOVE */}
                        <img
                            className="
                            relative z-20
                            h-auto w-full max-w-[220px]
                            object-contain
                            transition-transform duration-300 ease-out
                            group-hover:-translate-y-2
                            group-hover:scale-125
                            group-hover:drop-shadow-[0_0_20px_rgba(80,140,255,0.6)]
                            animate-slide-fade-in-right
                            sm:max-w-[260px]
                            md:max-w-[280px]
                            "
                            src={image}
                            alt="Graphic Designer"
                        />

                        {/* Second image - BELOW */}
                        <img
                            className="
                            absolute
                            z-10
                            h-auto w-full max-w-[120px]
                            object-contain
                            sm:max-w-[160px]
                            md:max-w-[160px]
                            "
                            src={bl}
                            alt=""
                        />

                        </div>

                    <a
                    href="#"
                    className="mt-3 block text-center text-base font-medium sm:text-lg"
                    >
                    Product Design
                    </a>
                </div>
                <div className="group w-30% overflow-visible rounded-3xl border border-white p-4 sm:p-5">
                    <div className="relative flex w-full justify-center">

                        {/* First image - ABOVE */}
                        <img
                            className="
                            relative z-20
                            h-auto w-full max-w-[220px]
                            object-contain
                            transition-transform duration-300 ease-out
                            group-hover:-translate-y-2
                            group-hover:scale-125
                            group-hover:drop-shadow-[0_0_20px_rgba(80,140,255,0.6)]
                            animate-slide-fade-in-right
                            sm:max-w-[260px]
                            md:max-w-[280px]
                            "
                            src={image2}
                            alt="Graphic Designer"
                        />

                        {/* Second image - BELOW */}
                        <img
                            className="
                            absolute
                            z-10
                            h-auto w-full max-w-[120px]
                            object-contain
                            sm:max-w-[160px]
                            md:max-w-[160px]
                            "
                            src={bl}
                            alt=""
                        />

                        </div>

                    <a
                    href=""
                    className="mt-3 block text-center text-base font-medium sm:text-lg"
                    >
                    3D Modeling
                    </a>
                </div>
            </div>
          
        </div>
      </section>
    </>
  );
}

export default AKF;

// import image from './assets/python.png'
// import bl from './assets/blank.png'

// function AKF() {
//   return (
//     <section id="akf" className="w-full">
//         <div className="min-h-screen text-white flex md:flex-col-reverse gap-10 items-center justify-center p-6 sm:p-10 border-t border-white/20">
//              <div className="order-1 md:order-2">
//                <h1
//                 className="text-center leading-none pb-20"
//                 style={{
//                     fontFamily: '"Archivo Black", sans-serif',
//                     fontOpticalSizing: 'auto',
//                     fontWeight: 200,
//                     fontStyle: 'normal',
//                     WebkitTextStroke: '0.5px white',
//                     color: 'transparent',
//                     fontSize: 'clamp(2.25rem, 5.5vw, 6.5rem)',
//                     margin: '0px',
//                     padding: '0',
//                 }}
//               >
//                 ALSO KNOWN FOR
//               </h1>
//             </div>
//             <div className="min-h-screen w-full  grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 items-center border-t border-white/20 px-4 py-16 sm:px-6 md:px-10 lg:px-12">
//                 <div className="group w-30% overflow-visible rounded-3xl border border-white p-4 sm:p-5">
//                     <div className="relative flex w-full justify-center">

//                         {/* First image - ABOVE */}
//                         <img
//                             className="
//                             relative z-20
//                             h-auto w-full max-w-[220px]
//                             object-contain
//                             transition-transform duration-300 ease-out
//                             group-hover:-translate-y-2
//                             group-hover:scale-125
//                             group-hover:drop-shadow-[0_0_20px_rgba(80,140,255,0.6)]
//                             animate-slide-fade-in-right
//                             sm:max-w-[260px]
//                             md:max-w-[280px]
//                             "
//                             src={image}
//                             alt="Graphic Designer"
//                         />

//                         {/* Second image - BELOW */}
//                         <img
//                             className="
//                             absolute
//                             z-10
//                             h-auto w-full max-w-[120px]
//                             object-contain
//                             sm:max-w-[160px]
//                             md:max-w-[160px]
//                             "
//                             src={bl}
//                             alt=""
//                         />

//                         </div>

//                     <a
//                     href="#"
//                     className="mt-3 block text-center text-base font-medium sm:text-lg"
//                     >
//                     Graphic Designer
//                     </a>
//                 </div>
//                 <div className="group w-30% overflow-visible rounded-3xl border border-white p-4 sm:p-5">
//                     <div className="relative flex w-full justify-center">

//                         {/* First image - ABOVE */}
//                         <img
//                             className="
//                             relative z-20
//                             h-auto w-full max-w-[220px]
//                             object-contain
//                             transition-transform duration-300 ease-out
//                             group-hover:-translate-y-2
//                             group-hover:scale-125
//                             group-hover:drop-shadow-[0_0_20px_rgba(80,140,255,0.6)]
//                             animate-slide-fade-in-right
//                             sm:max-w-[260px]
//                             md:max-w-[280px]
//                             "
//                             src={image}
//                             alt="Graphic Designer"
//                         />

//                         {/* Second image - BELOW */}
//                         <img
//                             className="
//                             absolute
//                             z-10
//                             h-auto w-full max-w-[120px]
//                             object-contain
//                             sm:max-w-[160px]
//                             md:max-w-[160px]
//                             "
//                             src={bl}
//                             alt=""
//                         />

//                         </div>

//                     <a
//                     href="#"
//                     className="mt-3 block text-center text-base font-medium sm:text-lg"
//                     >
//                     Graphic Designer
//                     </a>
//                 </div>
//                 <div className="group w-30% overflow-visible rounded-3xl border border-white p-4 sm:p-5">
//                     <div className="relative flex w-full justify-center">

//                         {/* First image - ABOVE */}
//                         <img
//                             className="
//                             relative z-20
//                             h-auto w-full max-w-[220px]
//                             object-contain
//                             transition-transform duration-300 ease-out
//                             group-hover:-translate-y-2
//                             group-hover:scale-125
//                             group-hover:drop-shadow-[0_0_20px_rgba(80,140,255,0.6)]
//                             animate-slide-fade-in-right
//                             sm:max-w-[260px]
//                             md:max-w-[280px]
//                             "
//                             src={image}
//                             alt="Graphic Designer"
//                         />

//                         {/* Second image - BELOW */}
//                         <img
//                             className="
//                             absolute
//                             z-10
//                             h-auto w-full max-w-[120px]
//                             object-contain
//                             sm:max-w-[160px]
//                             md:max-w-[160px]
//                             "
//                             src={bl}
//                             alt=""
//                         />

//                         </div>

//                     <a
//                     href="#"
//                     className="mt-3 block text-center text-base font-medium sm:text-lg"
//                     >
//                     Graphic Designer
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default AKF