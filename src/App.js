import { useDispatch, useSelector } from 'react-redux'
import { confirm } from './store/ticketSlice'
import { useState } from 'react'
import clsx from 'clsx'

function App() {
  const dispatch = useDispatch()

  const tickets = useSelector((state) => state.tickets)

  const selectedSeats = tickets.map((ticket) => ticket.seats).flat()

  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [seats, setSeats] = useState([])

  const handleClick = () => {
    dispatch(
      confirm({
        name,
        number: parseInt(number),
        seats,
      })
    )
    setName('')
    setNumber(0)
    setSeats([])
  }

  const handleChange = (e) => {
    const { value, checked } = e.target

    if (seats.length === parseInt(number)) {
      e.preventDefault()
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      return
    }

    if (checked) {
      setSeats([...seats, value])
    } else {
      setSeats(seats.filter((seat) => seat !== value))
    }
  }
  const isValidUserName = (userName) => {
    return /^[^\d][a-zA-Z0-9]+$/.test(userName);
  };

  const [isConditionMet, setIsConditionMet] = useState(false);
  
  const handleButtonClick = (event) => {
    const isValid = isValidUserName(name);
    if (isValid === true && number > 0) {
      console.log(isValid);
      setIsConditionMet(true);
    } else {
      console.log(isValid);
      setIsConditionMet(false);
    }
  };

  return (
    <>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            <div className="inputForm">
              <h2>fill the required details below and select your seat/s</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    Name
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="Username"
                    required
                    onChange={(e) => setName(e.target.value, e.target.checked)}
                    value={name}
                    placeholder='John Max'
                  />
                </div>
                <div className="agileits-right">
                  <label>
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input
                    type="number"
                    id="Numseats"
                    required
                    min="1"
                    onChange={(e) => setNumber(e.target.value, e.target.checked)}
                    value={number}
                  />
                </div>
              </div>
              <button onClick={handleButtonClick}>Start Selecting</button>
              {isConditionMet ? <p>Điều kiện được đáp ứng</p> : <p>Điều kiện không được đáp ứng</p>}
            </div>

            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>

              <li className="smallBox redBox">Reserved Seat</li>

              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>

            <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
              <table id="seatsBlock">
                <p id="notification"></p>
                <tr>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td></td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>
                    <input
                      type="checkbox"
                     className='seats'
                     style={{
                      '&::before': {
                        backgroundColor: seats.length === parseInt(number) ? 'white !important' : 'green',
                        fontSize: '15px',
                      }
                     }}
                      value="A1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A5')}
                    />
                  </td>
                  <td className="seatGap"></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="A12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('A12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>B</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="B12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('B12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>C</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="C12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('C12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>D</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="D12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('D12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>E</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="E12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('E12')}
                    />
                  </td>
                </tr>

                <tr className="seatVGap"></tr>

                <tr>
                  <td>F</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="F12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('F12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>G</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="G12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('G12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>H</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="H12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('H12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>I</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="I12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('I12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>J</td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J1"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J1')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J2"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J2')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J3"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J3')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J4"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J4')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J5"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J6"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J6')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J7"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J7')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J8"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J8')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J9"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J9')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J10"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J10')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J11"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J11')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="seats"
                      value="J12"
                      onChange={(e) => handleChange(e)}
                      disabled={selectedSeats.includes('J12')}
                    />
                  </td>
                </tr>
              </table>

              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button onClick={handleClick}>Confirm Selection</button>
            </div>

            <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
              <table className="Displaytable w3ls-table" width="100%">
                <tr>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                {tickets.map((ticket) => (
                  <tr>
                    <td>{ticket.name}</td>
                    <td>{ticket.number}</td>
                    <td>{ticket.seats.map((item) => `${item}`)}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
    </>
  )
}

export default App