import React from "react"
import '../css/style.css'

const List_Article = ({imagen,imagen1,state}) => {
    if (state===true) {

        return(
            <section className='list_article'>
                <ul>
                    <li className='grande'>
                        <img className='' src={imagen} alt=''/>
                    </li>
                    <li className='pequeño'>
                        <img className='' src={imagen1} alt=''/>
                    </li>
                </ul>
            </section>
        )
        
    }else{

        return(
            <section className='list_article'>
                <ul>
                    <li className='pequeño'>
                        <img className='' src={imagen} alt=''/>
                    </li>
                    <li className='grande'>
                        <img className='' src={imagen1} alt=''/>
                    </li>
                </ul>
            </section>
        )
    }
}

export default List_Article