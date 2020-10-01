import React from "react";
import TypeIt from "typeit-react";

const styles = {
  color: 'black',
  fontSize: '22px',
  fontWeight: 'bold',
  position: 'relative',
  left: '8%',
  top:'110px'
  
}
export default () => {
  return (
    <div className="Type">
      <TypeIt style = {styles}
        getBeforeInit={(instance) => {
          instance
            .type("Hey! Welcome to Kristian's blog")
            .pause(750)
            .delete(4)
            .pause(500)
            .type("youtube channel!")
            .pause(750)
            .delete(16)
            .pause(500)
            .type("github!")
            .pause(750)
            .delete(7)
            .pause(500)
            .type("portfolio!")
           

          // Remember to return it!
          return instance;
        }}
      />
    </div>
  );
};
