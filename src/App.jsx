import { useState } from "react"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Table from "./components/Table"
import { useEffect } from "react"


function App() {
  const [tables, setTables] = useState([])

  const [cards, serCards] = useState([])
  useEffect(() => {
    fetch("recipes.json")
      .then(res => res.json())
      .then(data => serCards(data.recipes))
  }, [])

  const handelCookBtn = (cardData) => {
    const newTable = [...tables, cardData]
    setTables(newTable)
  }

  console.log(tables);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className="flex w-11/12 justify-between mx-auto gap-8">
        <div className="grid grid-cols-2 gap-4 w-[65%]">
          {
            cards.map(card => <Card 
              key={card.recipe_id} 
              card={card}
              handelCookBtn={handelCookBtn}></Card>)
          }
        </div>
        <div className="w-[35%]">
          <Table></Table>
        </div>
      </div>
    </>
  )
}

export default App
