import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavBar from './components/SideNavBar';
import CurrentSelectedBar from './components/CurrentSelectedBar';
import * as mockData from './__mock__/mock.json';
import { formatMessageDataForNav } from './utils/utils';
import LoaderSkelton from './components/Skeleton';
import styled from 'styled-components';
import bgImage from './assets/weathered-blue-page.jpg';
import loader from './assets/Flip Flop.gif';

const Wrapper = styled.div`
  background-image: url(${bgImage});
`;

function App() {
  const [fetching, setFetching] = useState({
    isLoading: true,
    isSuccess: false,
    isMessageFetching: true,
    data: [],
  });

  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState('');
  const [messages, setMessages] = useState([]);

  const [addNewNumber, setAddNewNumber] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFetching({
        isLoading: false,
        isSuccess: true,
        data: mockData.default.messages.map(item => ({ ...item, id: Math.random().toString(16).slice(2)})),
        isMessageFetching: true,
        isDeleting: false,
      })
      setSelectedPhoneNumber(Object.keys(formatMessageDataForNav(mockData.default.messages))[0]);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if(selectedPhoneNumber) {
      setFetching({
        ...fetching,
        isMessageFetching: true,
      })
      const timer = setTimeout(() => {
        setFetching({
          ...fetching,
          isMessageFetching: false,
        })
        setMessages(formatMessageDataForNav(fetching.data)[selectedPhoneNumber])
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedPhoneNumber]);

  const addNewNumberOrMessage = (number, message) => {
    const savedStoreData = fetching.data;
    savedStoreData.push(
      {
        "text": message,
        "date": new Date().toISOString(),
        "id": Math.random().toString(16).slice(2),
        "type": "S",
        "number": number,
      }
    );
    setFetching({
      ...fetching,
      data: savedStoreData,
    });
    setAddNewNumber(false);
    setSelectedPhoneNumber(number);
  }
  // change it to redux pattern
  const deleteNumberOrMessage = (number = '', messageId = '', numberMessageArr = {}) => {
    const savedStoreData = fetching.data;

    if(number) {
      setFetching({
        ...fetching,
        isDeleting: true
      });
      const filterData = savedStoreData.filter(item => item.number.toString() !== number.toString());
      setFetching({
        ...fetching,
        data: filterData,
        isDeleting: false,
      });
      setSelectedPhoneNumber(Object.keys(formatMessageDataForNav(filterData))[0]);
    }

    if(messageId) {
      setFetching({
        ...fetching,
        isDeleting: true
      });
      const filterData = savedStoreData.filter(item => item.id !== messageId);
      setFetching({
        ...fetching,
        data: filterData,
        isDeleting: false,
      });
      const tempMessages = formatMessageDataForNav(filterData)[selectedPhoneNumber];
      if(tempMessages && tempMessages.length >0) {
        setMessages(formatMessageDataForNav(filterData)[selectedPhoneNumber])
      } else {
        setSelectedPhoneNumber(Object.keys(formatMessageDataForNav(filterData))[0]);
      }
    }
    if(Object.keys(numberMessageArr).length) {
      const selectedNumbers = Object.keys(numberMessageArr).filter(item => numberMessageArr[item]);
      const filteredArr = savedStoreData.filter(item => !selectedNumbers.includes(item.number))
      setFetching({
        ...fetching,
        data: filteredArr,
        isDeleting: false,
      });
    }
  }

  return (
    <div className="wrapper">
      <div className="sidenav-bar">
        {fetching.data && fetching.data.length > 0 && 
          <SideNavBar 
            data={formatMessageDataForNav(fetching.data)} 
            doSelect={setSelectedPhoneNumber} 
            setAddNewNumber={setAddNewNumber}
            isAdd={addNewNumber}
            selected={selectedPhoneNumber}
            deleteNumberOrMessage={deleteNumberOrMessage}
          />
        }
        {fetching.isLoading && !fetching.isSuccess && (
          <div class="loader">
            <img src={loader} alt="Loading" />
          </div>
        )}
      </div>
      <div className="messageSection">
        {fetching.data && fetching.data.length > 0 && selectedPhoneNumber && messages.length > 0 &&
          <CurrentSelectedBar 
            data={messages} 
            number={selectedPhoneNumber} 
            addNewNumberOrMessage={addNewNumberOrMessage}
            isAdd={addNewNumber}
            deleteNumberOrMessage={deleteNumberOrMessage}
          />}
        {(fetching.isLoading || fetching.isSuccess) && (fetching.isMessageFetching || fetching.isDeleting) && (
          <div class="loader">
            <img src={loader} alt="Loading" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
