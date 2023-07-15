import { useDispatch, useSelector } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import { confirm, calculate } from './store/ticketSlice'

function App() {
  const { danhSachGhe, total } = useSelector((state) => state.tickets)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value } = e.target
    dispatch(confirm(value))
  }

  return (
    <>
      <div className="bookingMovie">
        <div className="content">
          <h1> ĐẶT VÉ XEM PHIM CYBERLEARN.VN </h1>
          <h5 className="text-center">Màn Hình</h5>
          <div className="screen"></div>
        </div>
      </div>
      <div className="row">
        <div className="gridSeat form-group col-8">
          {danhSachGhe.map((ticket, index) => (
            <div className="rowSeat" style={{ gridRow: '2' }}>
              <div className="rowNumber">{ticket.hang}</div>
              {ticket.danhSachGhe.map((ghe, index) => (
                <>
                  <input
                    type="checkbox"
                    value={ghe.soGhe}
                    onChange={handleChange}
                    checked={ghe.daDat}
                    disabled={ghe.daThanhToan}
                  />
                  <div>{ghe.soGhe}</div>
                </>
              ))}
            </div>
          ))}
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
              {danhSachGhe.map((ticket, index) =>
                ticket.danhSachGhe.map(
                  (ghe, index) =>
                    ghe.daDat && (
                      <tr>
                        <td>{ghe.soGhe}</td>
                        <td>{ghe.gia}</td>

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => dispatch(confirm(ghe.soGhe))}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div>{total}</div>
      <button onClick={() => dispatch(calculate())}>Tinh tien</button>
    </>
  )
}

export default App
