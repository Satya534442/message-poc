import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavBar from './components/SideNavBar';
import CurrentSelectedBar from './components/CurrentSelectedBar';
import * as mockData from './__mock__/mock.json';
import { formatMessageDataForNav } from './utils/utils';
import LoaderSkelton from './components/Skeleton';

function App() {
  const [fetching, setFetching] = useState({
    isLoading: true,
    isSuccess: false,
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
        data: mockData.default.messages,
        isMessageFetching: true,
      })
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if(selectedPhoneNumber) {
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
  

  return (
    <div className="wrapper">
      <div className="sidenav-bar">
        {fetching.data.length > 0 && 
          <SideNavBar 
            data={formatMessageDataForNav(fetching.data)} 
            doSelect={setSelectedPhoneNumber} 
            setAddNewNumber={setAddNewNumber}
            isAdd={addNewNumber}
          />
        }
        {fetching.isLoading && !fetching.isSuccess && (
          <div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
          </div>
        )}
      </div>
      <div className="messageSection">
        {fetching.data.length > 0 && selectedPhoneNumber && messages.length > 0 &&
          <CurrentSelectedBar 
            data={messages} 
            number={selectedPhoneNumber} 
            addNewNumberOrMessage={addNewNumberOrMessage}
            isAdd={addNewNumber}
          />}
        {!fetching.isLoading && fetching.isSuccess && fetching.isMessageFetching && (
          <div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
            <div>
              <LoaderSkelton width="100%" height="75px" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
