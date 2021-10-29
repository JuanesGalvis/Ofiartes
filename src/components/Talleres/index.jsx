import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa'
import { context } from '../../context';
import './estilos.sass';
import {ButtonBorder} from '../commons/Buttons'

//importación de imágenes
import img_Etiqueta_E from '../../assets/Etiqueta_E.svg';
import img_Etiqueta_F from '../../assets/Etiqueta_F.svg';

export const Talleres = () => {
    const {talleres} = useContext(context); /*asi traigo el objeto contexto*/
    let et = "";
    let puntero = 0;
    function colores(){
        let clase = "";
        if(puntero === 0){
            clase = "verde"
        }
        else if(puntero === 1){
            clase = "azul" 
        }
        else if(puntero === 2){
            clase = "rojo" 
        }
        else if(puntero === 3){
            clase = "amarillo" 
        }
        else{
            puntero = 0;
            clase = "verde"
        }
        puntero++;
        return clase;
    }
    function imagen(tipo){
        let etiqueta = "";
        let alt = "";
        if(tipo == 'Empresarial'){
            etiqueta = img_Etiqueta_E
            alt = "taller empresarial"
        }
        else{
            etiqueta = img_Etiqueta_F
            alt = "taller de formación"
        }
        return {
            etiqueta,
            alt
        };   
    }
    
    return (
        <>
        <div className="search">
            <input type="text" className="search__input" placeholder="Buscar un curso" />
            <button><FaSearch/></button>
        </div>
        <div className="labels">
            <div className="labels__etiquetas">
                <img src= {img_Etiqueta_E} alt="etiqueta empresarial" />
                <p>Talleres empresariales</p>
            </div>
            <div className="labels__etiquetas">
                <img src= {img_Etiqueta_F} alt="etiqueta empresarial" />
                <p>Talleres de Formación</p>
            </div>
        </div>
        {console.log(talleres)}
        <section className="details__talleres">
            {
                talleres ?
                talleres.map((talleres,index) => (
                    <div className= {`cards__taller ${colores()}`}  key= {`taller-${index}`}>
                        <details className="card">
                            <summary>{talleres.fields.title}</summary>
                            <p>{talleres.fields.description}</p>
                            <div className="icon__clock">
                                <i><FaRegClock/></i>
                                <p>{talleres.fields.duration}</p>
                            </div>
                                <ButtonBorder border="black" color="black"content="Saber más"/>
                        </details>
                        <img src={`${imagen(`${talleres.fields.type}`).etiqueta}`} alt= {`${imagen(`${talleres.fields.type}`).alt}`} />
                    </div>
                ))
                :<h2>Loading...</h2>
            }
        </section>
        </>
    )
}

/**
 * <summary style={{ backgroundImage: "url('https://img.freepik.com/vector-gratis/fondo-invierno-hojas-pinceles-color-pastel_220290-42.jpg?size=626&ext=jpg')" }} >
 *  ....
 * </summary>
 * 
 * La propiedad "open" se le agrega al <details>
 */