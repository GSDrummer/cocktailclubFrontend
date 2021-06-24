
import "./main.css";
import React from "react";

const About = () => {
  return (
    <div className="about">
      <section className="aboutSection">
        <h1 className="title">About Cocktail Club App</h1>
        <p className="text">
          This Cocktail App was built using React, Material Ui, MongoDb and Express. 
        </p>
       
       <h2>About Or cocktail Recipes</h2>
        <p className="text">
          We enjoy making cocktails, These recipes have been enjoyed and some have
          been tested by us all. Some of the cocktails are very traditional as well 
          as the three primary techniques for making your cocktail drinks. And the import
          mixology skills with the ingredients of your cocktails.
          Some of the recipes might be balanced for a specific brands, but you can 
          easily work with another brands though the measurements potentially require 
          a little tweaking to get the flavor balance right you could make any adjustments 
          you might find necessary.  
      </p>
        
        <footer className="footer">&copy;2020
                <p>Josh Howcroft, Luke Ellwood</p>
           <link>
             <a href="https://github.com/GSDrummer">Luke E GitHub Profile</a>
             <a href="https://github.com/javajoshcmd">Josh Howcroft GitHub Profile</a>
          </link>
      </footer>     
     </section>
     </div>
  );
};


export default About;
