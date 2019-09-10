 import React from 'react';

 const Rainbow = (WrappedComponent) => {
     const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
     const randomColour = colours[Math.floor(Math.random() * 5)];
     const className = randomColour + '-text';

     //este props será pasado a WrappedComponent que a la 
     //donde este a la vez puede ser un About or Contact del <NavBar>
     return ( props ) => {
         return (
             <div className={ className }>
                 <WrappedComponent { ...props } />
             </div>
         )
     }   
 }

 export default Rainbow;