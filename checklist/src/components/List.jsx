import React from "react"

const List = props =>{
    const items = props.items;
    
    //const sorted = items.sort((a, b) => { return a.Due - b.Due})

    return(
        <ul>
          {items.map(item => {
              return(
                  <li key = {item.item}>
                    <h2>
                        {item.item}<br/>
                        {item.Due.toDateString()}
                     </h2>   
                  </li>
              )
          })}
        </ul>
    )
    
}

export default List;