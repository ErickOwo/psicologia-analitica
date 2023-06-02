import CardInfo from "@components/Card-Info";

//importing images
import carlJungImage from "@images/carlgustavjung.jpg"

export default function Home() {
  return (
    <div className='flex flex-col bg-[url("../assets/images/fondo.jpg")] bg-fixed min-h-screen'>
      {/* <h1 className="text-blue-500 font-semibold text-3xl p-3 ">
        Psicología Analítica
      </h1> */}
      <div className="flex items-center pt-5 flex-col">
        <div className="flex flex-col items-center p-5 border  cursor-pointer bg-orange-500/90 hover:bg-orange-500 text-white transition-colors bg-[length:170%_100%] lg:bg-[length:100%_100%]"> 
          <h2 className="md:text-3xl text-xl font-mono font-semibold  ">¡Bienvenidos a Teorias de la personalidad!</h2>
        </div>
        <div className="md:p-5 grid grid-cols-1 md:grid-cols-2 w-full mt-4 md:gap-y-4 gap-2 ">
          <CardInfo
            image={carlJungImage}
            height="400px"
            width="280px"
            title={"Biografia de Carl Gustav Jung"}
            description="Carl Gustav Jung (1875-1961) fue un psiquiatra suizo conocido por su trabajo en psicología analítica. Nacido en Suiza, provenía de una familia religiosa y tenía un interés temprano por el funcionamiento de la mente humana. A lo largo de su carrera, Jung desarrolló su propia teoría psicológica, apartándose del enfoque de Sigmund Freud."
           />
           <CardInfo
            right={true}
            image={carlJungImage}
            height="400px"
            width="280px"
            title={"Biografia de Carl Gustav Jung"}
            description="Carl Gustav Jung (1875-1961) fue un psiquiatra suizo conocido por su trabajo en psicología analítica. Nacido en Suiza, provenía de una familia religiosa y tenía un interés temprano por el funcionamiento de la mente humana. A lo largo de su carrera, Jung desarrolló su propia teoría psicológica, apartándose del enfoque de Sigmund Freud."
           />
        </div>
      </div>
    </div>
  )
}
