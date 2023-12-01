import React, {useEffect, useState} from "react";
import { Button } from "antd";
import {getAllSeats,updateSeat} from "./api";
import Seat from "./containers/BusReservation/Seat";
import ReservationForm from "./ReservationForm";
import {Row,MiddleRow,BusWrapper} from "./Buses.styled";


const initialBus =[
    {numberOfSeat: 1,reserved:false, confirmed :false}, {numberOfSeat: 2, reserved:false, confirmed :false}, {numberOfSeat: 3, reserved:false, confirmed :false}, {numberOfSeat: 4,reserved:false, confirmed :false},
    {numberOfSeat: 5,reserved:false, confirmed :false}, {numberOfSeat: 6, reserved:false, confirmed :false}, {numberOfSeat: 7, reserved:false, confirmed :false}, {numberOfSeat: 8,reserved:false, confirmed :false},
    {numberOfSeat: 9,reserved:false, confirmed :false}, {numberOfSeat: 10, reserved:false, confirmed :false}, {numberOfSeat: 11, reserved:false, confirmed :false}, {numberOfSeat: 12,reserved:false, confirmed :false},
    {numberOfSeat: 13,reserved:false, confirmed :false}, {numberOfSeat: 14, reserved:false, confirmed :false}, {numberOfSeat: 15, reserved:false, confirmed :false}, {numberOfSeat: 16,reserved:false, confirmed :false},
    {numberOfSeat: 17,reserved:false, confirmed :false}, {numberOfSeat: 18, reserved:false, confirmed :false}, {numberOfSeat: 19, reserved:false, confirmed :false}, {numberOfSeat: 20,reserved:false, confirmed :false},
    {numberOfSeat: 21,reserved:false, confirmed :false}, {numberOfSeat: 22, reserved:false, confirmed :false}, {numberOfSeat: 23, reserved:false, confirmed :false}, {numberOfSeat: 24,reserved:false, confirmed :false},
    {numberOfSeat: 25,reserved:false, confirmed :false}, {numberOfSeat: 26, reserved:false, confirmed :false}, {numberOfSeat: 27, reserved:false, confirmed :false}, {numberOfSeat: 28,reserved:false, confirmed :false},
    {numberOfSeat: 29,reserved:false, confirmed :false}, {numberOfSeat: 30, reserved:false, confirmed :false}, {numberOfSeat: 31, reserved:false, confirmed :false}, {numberOfSeat: 32,reserved:false, confirmed :false},
    {numberOfSeat: 33,reserved:false, confirmed :false}, {numberOfSeat: 34, reserved:false, confirmed :false}, {numberOfSeat: 35, reserved:false, confirmed :false}, {numberOfSeat: 36,reserved:false,  confirmed :false},
    {numberOfSeat: 37,reserved:false,  confirmed :false}, {numberOfSeat: 38, reserved:false,  confirmed :false}, {numberOfSeat: 39, reserved:false,  confirmed :false}, {numberOfSeat: 40,reserved:false,  confirmed :false},
    {numberOfSeat: 41,reserved:false,  confirmed :false}, {numberOfSeat: 42, reserved:false,  confirmed :false}, {numberOfSeat: 43, reserved:false,  confirmed :false}, {numberOfSeat: 44,reserved:false,  confirmed :false},
    {numberOfSeat: 45,reserved:false,  confirmed :false}, {numberOfSeat: 46, reserved:false,  confirmed :false}, {numberOfSeat: 47, reserved:false, confirmed :false}, {numberOfSeat: 48,reserved:false,  confirmed :false},
    {numberOfSeat: 49,reserved:false,  confirmed :false}, {numberOfSeat: 50, reserved:false, confirmed :false}, {numberOfSeat: 51, reserved:false, confirmed :false}, {numberOfSeat: 52,reserved:false, confirmed :false},
    {numberOfSeat: 53,reserved:false, confirmed :false}, {numberOfSeat: 54, reserved:false, confirmed :false}, {numberOfSeat: 55, reserved:false, confirmed :false}
]

const seatData1 = initialBus.find(seat => seat.numberOfSeat === 1);
const seatData2 = initialBus.find(seat => seat.numberOfSeat === 2);
const seatData3 = initialBus.find(seat => seat.numberOfSeat === 3);
const seatData4 = initialBus.find(seat => seat.numberOfSeat === 4);
const seatData5 = initialBus.find(seat => seat.numberOfSeat === 5);
const seatData6 = initialBus.find(seat => seat.numberOfSeat === 6);
const seatData7 = initialBus.find(seat => seat.numberOfSeat === 7);
const seatData8 = initialBus.find(seat => seat.numberOfSeat === 8);
const seatData9 = initialBus.find(seat => seat.numberOfSeat === 9)
const seatData10 = initialBus.find(seat => seat.numberOfSeat === 10)
const seatData11 = initialBus.find(seat => seat.numberOfSeat === 11)
const seatData12 = initialBus.find(seat => seat.numberOfSeat === 12)
const seatData13 = initialBus.find(seat => seat.numberOfSeat === 13)
const seatData14 = initialBus.find(seat => seat.numberOfSeat === 14)
const seatData15 = initialBus.find(seat => seat.numberOfSeat === 15)
const seatData16 = initialBus.find(seat => seat.numberOfSeat === 16)
const seatData17 = initialBus.find(seat => seat.numberOfSeat === 17)
const seatData18 = initialBus.find(seat => seat.numberOfSeat === 18)
const seatData19 = initialBus.find(seat => seat.numberOfSeat === 19)
const seatData20 = initialBus.find(seat => seat.numberOfSeat === 20)
const seatData21 = initialBus.find(seat => seat.numberOfSeat === 21)
const seatData22 = initialBus.find(seat => seat.numberOfSeat === 22)
const seatData23 = initialBus.find(seat => seat.numberOfSeat === 23)
const seatData24 = initialBus.find(seat => seat.numberOfSeat === 24)
const seatData25 = initialBus.find(seat => seat.numberOfSeat === 25)
const seatData26 = initialBus.find(seat => seat.numberOfSeat === 26)
const seatData27 = initialBus.find(seat => seat.numberOfSeat === 27)
const seatData28 = initialBus.find(seat => seat.numberOfSeat === 28)
const seatData29 = initialBus.find(seat => seat.numberOfSeat === 29)
const seatData30 = initialBus.find(seat => seat.numberOfSeat === 30)
const seatData31 = initialBus.find(seat => seat.numberOfSeat === 31)
const seatData32 = initialBus.find(seat => seat.numberOfSeat === 32)
const seatData33 = initialBus.find(seat => seat.numberOfSeat === 33)
const seatData34 = initialBus.find(seat => seat.numberOfSeat === 34)
const seatData35 = initialBus.find(seat => seat.numberOfSeat === 35)
const seatData36 = initialBus.find(seat => seat.numberOfSeat === 36)
const seatData37 = initialBus.find(seat => seat.numberOfSeat === 37)
const seatData38 = initialBus.find(seat => seat.numberOfSeat === 38)
const seatData39 = initialBus.find(seat => seat.numberOfSeat === 39)
const seatData40 = initialBus.find(seat => seat.numberOfSeat === 40)
const seatData41 = initialBus.find(seat => seat.numberOfSeat === 41)
const seatData42 = initialBus.find(seat => seat.numberOfSeat === 42)
const seatData43 = initialBus.find(seat => seat.numberOfSeat === 43)
const seatData44 = initialBus.find(seat => seat.numberOfSeat === 44)
const seatData45 = initialBus.find(seat => seat.numberOfSeat === 45)
const seatData46 = initialBus.find(seat => seat.numberOfSeat === 46)
const seatData47 = initialBus.find(seat => seat.numberOfSeat === 47)
const seatData48 = initialBus.find(seat => seat.numberOfSeat === 48)
const seatData49 = initialBus.find(seat => seat.numberOfSeat === 49)
const seatData50 = initialBus.find(seat => seat.numberOfSeat === 50)
const seatData51 = initialBus.find(seat => seat.numberOfSeat === 51)
const seatData52 = initialBus.find(seat => seat.numberOfSeat === 52)
const seatData53 = initialBus.find(seat => seat.numberOfSeat === 53)
const seatData54 = initialBus.find(seat => seat.numberOfSeat === 54)
const seatData55 = initialBus.find(seat => seat.numberOfSeat === 55)
const Bus = () =>{

    const [busData, setBusData] = useState(initialBus);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const handleSeatClick = (seatNumber) => {
        setSelectedSeat(seatNumber);
    };
    const handleSubmit = ()=>{
        setShowForm(true)
    }
    const handleConfirm = () =>{
        if (selectedSeat !== null) {

            updateSeat(selectedSeat.id,selectedSeat).then((updatedBusData) => {
                setBusData(updatedBusData);
                setSelectedSeat(null);
            });
        }
        setShowForm(false)
    }
    const handleCancel= ()=>{
        setSelectedSeat(null);
        setShowForm(false)
    }



    useEffect(() => {
        if (selectedSeat !== null) {

            const selectedSeatData = busData.find(
                (seat) => seat.numberOfSeat === selectedSeat
            );
            if (selectedSeatData && !selectedSeatData.confirmed) {

                const updatedBusData = busData.map((seat) => {
                    if (seat.numberOfSeat === selectedSeat) {
                        return {
                            ...seat,
                            confirmed: true,
                        };
                    }
                    return seat;
                });
                setBusData(updatedBusData);


                updateSeat(selectedSeat.id, selectedSeat);
            }
        }
    }, [selectedSeat, busData]);

    const isReservationConfirmed = selectedSeat !== null;
    const [showForm,setShowForm] = useState(false)


    return(
    <BusWrapper>
    <Row>
        <Seat numberOfSeat = {seatData1.numberOfSeat}
        reserved = {seatData1.reserved}
        confirmed = {seatData1.confirmed}
        id = {seatData1.numberOfSeat}
        onClick = {handleSeatClick}
       />
        <Seat numberOfSeat = {seatData5.numberOfSeat}
              reserved = {seatData5.reserved}
              onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData9.numberOfSeat}
               reserved = {seatData9.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData13.numberOfSeat}
               reserved = {seatData13.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData17.numberOfSeat}
               reserved = {seatData17.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData21.numberOfSeat}
               reserved = {seatData21.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData25.numberOfSeat}
               reserved = {seatData25.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData27.numberOfSeat}
               reserved = {seatData27.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData29.numberOfSeat}
               reserved = {seatData29.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData33.numberOfSeat}
               reserved = {seatData33.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData37.numberOfSeat}
               reserved = {seatData37.reserved}
                   onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData41.numberOfSeat}
               reserved = {seatData41.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData45.numberOfSeat}
               reserved = {seatData45.reserved}
               onClick = {handleSeatClick}/>
        <Seat  numberOfSeat = {seatData49.numberOfSeat}
               reserved = {seatData49.reserved}
               onClick = {handleSeatClick}/>
        <Seat numberOfSeat = {seatData51.numberOfSeat}
              reserved = {seatData51.reserved}
              onClick = {handleSeatClick}/>
    </Row>
    <Row>
        <Seat  numberOfSeat = {seatData2.numberOfSeat}
               reserved = {seatData2.reserved}/>
        <Seat  numberOfSeat = {seatData6.numberOfSeat}
               reserved = {seatData6.reserved}/>
        <Seat  numberOfSeat = {seatData10.numberOfSeat}
               reserved = {seatData10.reserved}/>
        <Seat  numberOfSeat = {seatData14.numberOfSeat}
               reserved = {seatData14.reserved}/>
        <Seat  numberOfSeat = {seatData18.numberOfSeat}
               reserved = {seatData18.reserved}/>
        <Seat numberOfSeat = {seatData22.numberOfSeat}
              reserved = {seatData22.reserved}/>
        <Seat numberOfSeat = {seatData26.numberOfSeat}
              reserved = {seatData26.reserved}/>
        <Seat numberOfSeat = {seatData28.numberOfSeat}
              reserved = {seatData28.reserved}/>
        <Seat numberOfSeat = {seatData30.numberOfSeat}
              reserved = {seatData30.reserved}/>
        <Seat numberOfSeat = {seatData34.numberOfSeat}
              reserved = {seatData34.reserved}/>
        <Seat numberOfSeat = {seatData38.numberOfSeat}
              reserved = {seatData38.reserved}/>
        <Seat numberOfSeat = {seatData42.numberOfSeat}
              reserved = {seatData42.reserved}/>
        <Seat numberOfSeat = {seatData46.numberOfSeat}
              reserved = {seatData46.reserved}/>
        <Seat numberOfSeat = {seatData50.numberOfSeat}
              reserved = {seatData50.reserved}/>
        <Seat numberOfSeat = {seatData52.numberOfSeat}
              reserved = {seatData52.reserved}/>

    </Row>
    <MiddleRow>
        <Seat numberOfSeat = {seatData53.numberOfSeat}
              reserved = {seatData53.reserved} />
    </MiddleRow>
    <Row>
        <Seat numberOfSeat = {seatData3.numberOfSeat}
              reserved = {seatData3.reserved}/>
        <Seat numberOfSeat = {seatData7.numberOfSeat}
              reserved = {seatData7.reserved}/>
        <Seat numberOfSeat = {seatData11.numberOfSeat}
              reserved = {seatData11.reserved}/>
        <Seat numberOfSeat = {seatData15.numberOfSeat}
              reserved = {seatData15.reserved}/>
        <Seat numberOfSeat = {seatData19.numberOfSeat}
              reserved = {seatData19.reserved}/>
        <Seat numberOfSeat = {seatData23.numberOfSeat}
              reserved = {seatData23.reserved}/>
        <Seat numberOfSeat = {seatData31.numberOfSeat}
              reserved = {seatData31.reserved}/>
        <Seat numberOfSeat = {seatData35.numberOfSeat}
              reserved = {seatData35.reserved}/>
        <Seat numberOfSeat = {seatData39.numberOfSeat}
              reserved = {seatData39.reserved}/>
        <Seat numberOfSeat = {seatData43.numberOfSeat}
              reserved = {seatData43.reserved}/>
        <Seat numberOfSeat = {seatData47.numberOfSeat}
              reserved = {seatData47.reserved}/>
        <Seat numberOfSeat = {seatData54.numberOfSeat}
              reserved = {seatData54.reserved}/>

    </Row>
    <Row>
        <Seat numberOfSeat = {seatData4.numberOfSeat}
              reserved = {seatData4.reserved}/>
        <Seat numberOfSeat = {seatData8.numberOfSeat}
              reserved = {seatData8.reserved}/>
        <Seat numberOfSeat = {seatData12.numberOfSeat}
              reserved = {seatData12.reserved}/>
        <Seat numberOfSeat = {seatData16.numberOfSeat}
              reserved = {seatData16.reserved}/>
        <Seat numberOfSeat = {seatData20.numberOfSeat}
              reserved = {seatData20.reserved}/>
        <Seat numberOfSeat = {seatData24.numberOfSeat}
              reserved = {seatData24.reserved}/>
        <Seat numberOfSeat = {seatData32.numberOfSeat}
              reserved = {seatData32.reserved}/>
        <Seat numberOfSeat = {seatData36.numberOfSeat}
              reserved = {seatData36.reserved}/>
        <Seat numberOfSeat = {seatData40.numberOfSeat}
              reserved = {seatData40.reserved}/>
        <Seat numberOfSeat = {seatData44.numberOfSeat}
              reserved = {seatData44.reserved}/>
        <Seat numberOfSeat = {seatData48.numberOfSeat}
              reserved = {seatData48.reserved}/>
        <Seat numberOfSeat = {seatData55.numberOfSeat}
              reserved = {seatData55.reserved}/>
    </Row>
        <div style={{display:"flex",justifyContent:"center",marginTop:50}}>
        <Button onClick={handleSubmit} style={{width:230,height:50, fontSize:20}}>
            Підтвердити
        </Button>
        </div>
        <ReservationForm
        visible = {showForm}
        onCancel={handleCancel}
        onConfirm = {handleConfirm}/>



    </BusWrapper>

    )
}

export default Bus