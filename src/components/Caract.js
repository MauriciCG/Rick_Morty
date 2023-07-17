import React from 'react'

export default function Caract(props) {
  const {Caract, setCaracter} = props;

    const resCarac = () =>{
        setCaracter(null);
      //console.log("Regreso");
    }
  //console.log(props)

  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home' onClick={resCarac}>Inicio</span>

        <div className='container-characters'>
          {Caract.map((Caract,index)=>(
              <div className='character-container' key={index}>
                  <div>
                      <img src={Caract.image} alt={Caract.name} ></img>
                  </div>
                  <div>
                    <h2>{Caract.name}</h2>

                   
                    {Caract.status === "Alive" ?(
                      <>
                      <span className='alive'/>
                      Vivo
                      </>
                    ):(
                      <>
                      <span className='dead'/>
                      Muerto
                      </>
                    )}
                      <p>
                        <span className='text-grey'>Episodios: </span>
                        <span>{Caract.episode.length}</span>
                      </p>
                      <p>
                      <span className='text-grey'>Especie: </span>
                        <span>{Caract.species}</span>
                      </p>
                   </div> 
              </div>
          ))}
        </div>
        <span className='back-home' onClick={resCarac}>
          Inicio
        </span>
    </div>
  )
}
