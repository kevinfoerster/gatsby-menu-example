import React, {useState} from "react"
import Grid from "../components/Grid"
import Headline from "../components/Headline"
import Product from "../components/Product"
import Logo from "../components/Logo"

import data from "./data.js"

const headlines = {
  coffee_and_tea: "Kaffee und Tee",
  beverages: "Kalte Getränke",
  red_wine: "Rotwein",
  white_wine: "Weißwein",
  beer_on_tap: "Bier vom Fass",
  beer_bottle: "Bier aus der Flasche",
  steaks: "Steaks",
  dessert: "Dessert",
}

export default function Home() {
  const [componentVisible, setComponentVisible] = useState(false)
  return (
    <div>
      <Grid>
        <Logo />

        {Object.keys(headlines).map(category =>
          data.filter(product => product.category === category).length !== 0 ? (
            <div key={category}>
              <Headline>{headlines[category]}</Headline>
              {data
                .filter(product => product.category === category)
                .map(({ name, price, size, description, special }, index) => (
                  <Product
                    key={`${category}_${name}_${index}`}
                    special={special}
                    name={name}
                    price={price}
                    description={description}
                    size={size}
                  />
                ))}
            </div>
          ) : null
        )}
      </Grid>
    </div>
  )
}
