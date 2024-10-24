import { useState } from "react"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Table from "./components/Table"
import { useEffect } from "react"


function App() {
  const [tables, setTables] = useState([])
  const [cook, setCook] = useState([])
  const [min, setMin] = useState(0)
  const [calories, setCalories] = useState(0)

  const [cards, serCards] = useState([])
  useEffect(() => {
    fetch("/recipes.json")
      .then(res => res.json())
      .then(data => serCards(data.recipes))
  }, [])

  const handelCookBtn = (cardData) => {
    const isExist = tables.find(previousRecipe => previousRecipe.recipe_id === cardData.recipe_id)

    if (!isExist) {
      const newTable = [...tables, cardData]
      setTables(newTable)
    } else {
      alert("Recipe already exists in the queue.")
    }
  }

  const handelPreparing = (preparing) => {
    const remainingPreparing = tables.filter(prepar => prepar.recipe_id !== preparing.recipe_id)
    setTables(remainingPreparing)

    // cook.map(cookTime => setMin(cookTime.preparing_time + min))
    // cook.map(calory => setCalories(calories + calory.calories))

    setCook([...cook, preparing])
  }

  useEffect(() => {
    const totalCal = cook.reduce((pre, cr) => {
      return pre + cr.calories
    }, 0)
    setCalories(totalCal)
  }, [cook])

  useEffect(() => {
    const totalMin = cook.reduce((pre, cr) => {
      return pre + cr.preparing_time
    }, 0)
    setMin(totalMin)
  }, [cook])

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
          <Table recipe={tables}
            handelPreparing={handelPreparing}
            cooking={cook}
            min={min}
            calories={calories}></Table>
        </div>
      </div>
    </>
  )
}

export default App
