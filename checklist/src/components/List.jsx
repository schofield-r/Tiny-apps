import React from "react"

const List = props =>{
    const items = props.items;
    
    return(
        <ul>
          {items.map(item => {
              return(
                  <li key = {item.item}>
                    <h2>
                        {item.item}<br/>
                        {item.Due}
                     </h2>   
                  </li>
              )
          })}
        </ul>
    )
    
}

export default List;