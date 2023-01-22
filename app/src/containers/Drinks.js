import React, { Component } from 'react'; // Import React and Component from react
import Drink_Page from '../components/drinks/Drink_Page.jsx';

//import { MongoClient } from 'mongodb';

/*export const getStaticProps = async context => {
    const mongoClient = new MongoClient(
      "mongodb+srv://SE:pos123@cluster0.iovn5.mongodb.net/test"
    )
    const data = await mongoClient
      .db()
      .collection("Drinks")
      .findOne({})
      .toArray()
    console.log("!!!", data)
  }
*/

class DrinksCont extends Component { // Create a class called Drinks that extends Component

    render() { // Render a div with the Drink_Page component
    return (
      <div>
        <Drink_Page/>
      </div>
    );
  }
}
export default DrinksCont; // Export the class