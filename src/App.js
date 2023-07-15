// import { useDispatch, useSelector } from 'react-redux'
// import { confirm } from './store/ticketSlice'
// import { useState } from 'react'
import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
//   const dispatch = useDispatch()

//   const tickets = useSelector((state) => state.tickets)

  // const selectedSeats = tickets.map((ticket) => ticket.seats).flat()

  // console.log(selectedSeats)

  // const [name, setName] = useState('')
  // const [number, setNumber] = useState(0)
  // const [seats, setSeats] = useState([])

  // const handleClick = () => {
  //   dispatch(
  //     confirm({
  //       name,
  //       number,
  //       seats,
  //     })
  //   )
  //   setName('')
  //   setNumber(0)
  //   setSeats([])
  // }

  // const handleChange = (e) => {
  //   const { value, checked } = e.target
  //   if (checked) {
  //     setSeats([...seats, value])
  //   } else {
  //     setSeats(seats.filter((seat) => seat !== value))
  //   }
  // }

  return (
    <>
        <div className="bookingMovie">
            <div className = "content">
                <h1> ĐẶT VÉ XEM PHIM CYBERLEARN.VN </h1>
                <h5 className='text-center'>Màn Hình</h5>
                <div className = "screen">
                </div>
            </div>
        </div>
        <div className="row">
            <div className="gridSeat form-group col-8">
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="firstChar"></div>
                    <div className="firstChar">A</div>
                    <div className="firstChar">B</div>
                    <div className="firstChar">C</div>
                    <div className="firstChar">D</div>
                    <div className="firstChar">E</div>
                    <div className="firstChar">F</div>
                    <div className="firstChar">G</div>
                    <div className="firstChar">H</div>
                    <div className="firstChar">I</div>
                    <div className="firstChar">J</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                    <div className="ghe">1</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                    <div className="ghe">2</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                    <div className="ghe">3</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                    <div className="ghe">4</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                    <div className="ghe">5</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                    <div className="ghe">6</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                    <div className="ghe">7</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                    <div className="ghe">8</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                    <div className="ghe">9</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                    <div className="ghe">10</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                    <div className="ghe">11</div>
                </div>
                <div className="rowSeat" style={{gridRow: "2"}}>
                    <div className="rowNumber">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                    <div className="ghe">12</div>
                </div>
            </div>
            <div className="form-group col-4">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th>Hủy</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                
                </tbody>
            </table>
            </div>
        
        </div>
    </>
  )
}

export default App
