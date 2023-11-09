import { useContext } from "react"
import { useParams } from "react-router-dom"

const ProdukDetail = () => {
  const { semuaKelas }= useContext(ShopContext)
  const {ProdukId} = useParams
  const product = semuaKelas.find((e)=> e.id ===Number (ProdukId))
  return (
    <div></div>
  )
}

export default ProdukDetail

