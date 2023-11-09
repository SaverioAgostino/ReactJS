import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'


const CheckoutBarang = () => {
    return (
      <div>
        <div className='w-11/12 m-auto py-10'>
            <h1>Shopping cart</h1>
            <p>Terdapat 1 item di cart anda</p>
            <section>
                <div>
                    <table>
                        <thread>
                            <tr>
                                <td>Produk</td>
                                <td>Harga</td>
                                <td>Quantity</td>
                                <td>Total</td>
                                <td>Hapus</td>
                            </tr>
                        </thread>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <h1>Test</h1>
                                    <p>Test</p>
                                </td>
                                <td>300.000</td>
                                <td>
                                    <div>
                                        <input type="number" />
                                    </div>
                                </td>
                                <td>500.000</td>
                                <td>
                                    <button>
                                        <AiFillDelete/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
      </div>
    )
  }
  
  export default CheckoutBarang