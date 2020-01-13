import React from "react";
import styled from 'styled-components';

const Styledh3 = styled.h3
`font-size: 20px;
color: black`

function PersonList(props) {
    
    return (
        <div>
            {
                props.people.map((person) => (
                    
                    <div>
                        <h1>{person.name}</h1>
                        <Styledh3> height:{person.height}</Styledh3>
                        <Styledh3> mass:{person.mass}</Styledh3>
                        <Styledh3> skin color:{person.skin_color}</Styledh3>
                        <Styledh3> eye color:{person.eye_color}</Styledh3>
                        <Styledh3> birth year:{person.birth_year}</Styledh3>

                    </div>
                )
                )
            }
        </div>
    )
}
  
export default PersonList




  