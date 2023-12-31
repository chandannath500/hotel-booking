import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import './reserve.css'
import {useNavigate} from 'react-router-dom'
import { BASE_URL, publicRequest } from '../../Request'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reserve = ({setOpen, hotelId}) => {

  const navigate = useNavigate();

  const [selectedRoom, setSelectedRoom] = useState([]);
  const {data, loading, error} = useFetch(`${BASE_URL}hotels/room/${hotelId}`);

  const { date } = useContext(SearchContext);

  const getDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dates = new Date(start.getTime());

    const date = [];

    while (date <= end) {
      date.push(new Date(dates).getTime());
      dates.setDate(dates.getDate() + 1);
    }

    return date;
  };

  const allDates = getDates(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) => allDates.includes(new Date(date).getTime()));

    return !isFound;

  }

  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;

    setSelectedRoom(selected ? [...selectedRoom, value] : selectedRoom.filter((item) => item !== value));

  }

  //console.log(selectedRoom);
  const handleClick = async () => {
    try {

      await Promise.all(
        selectedRoom.map((roomId) => {
          const res = publicRequest.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );

      setOpen(false);

      setTimeout(() => {
        navigate("/");
      }, 3000);
      toast.success("Booked Hotel Room Successfully!")
    } catch(err) {
      console.log(err);
      toast.error("Something went wrong")

    }
  }

  return (
    <div className='rcontainer'>
      <div className="rreserve">
        <div className="rcol">
          <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
        </div>
        <div className="rcol">
            <div className="rdiv">
              <span className="r-select">Select Your Rooms:</span>
              {data.map((item) => (
                <div className="rcontent" key={item._id}>
                  <div className="rcontentinfo">
                    <div className="r">Name of Room: <strong>{item.title}</strong></div>
                    <div className="r">Desc for Room: <strong>{item.desc}</strong></div>
                    <div className="r">Max of People: <strong>{item.maxPeople}</strong></div>
                    <div className="r">Price for Room: <strong>${(item.price).toFixed(2)}</strong></div>
                  </div>
                  {item.roomNumbers.map((roomNumber) => (
                    <div className="rrom">
                      <input type="checkbox" disabled={!isAvailable(roomNumber)} id={roomNumber.number} value={roomNumber._id} onChange={handleSelect} />
                      <label className='rlabel' htmlFor={roomNumber.number}>Number of Room: <strong>{roomNumber.number}</strong></label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
        </div>
        <button className='bookingNow' onClick={handleClick}>Booking Now</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Reserve
