import React, { useEffect, useState } from 'react';
import { StyledNavBarWrapper,  StyledNavBarList, Wrapper} from './styles';
import sendIcon from '../../assets/send.png';

const CurrentSelectedBar = (props) => {
  const { data, number: phoneNumber, addNewNumberOrMessage, isAdd } = props;
  const [newNumber, setNewNumber] = useState('');
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setNewNumber('');
    setNewMessage('');
  } ,[isAdd]);

  return (
    <Wrapper>
      <div className="parent">
        {isAdd ? (
          <>
            <input 
              value={newNumber} 
              onChange={(e) => setNewNumber(e.target.value)} 
              type="number" 
              name="phoneNumber" 
              id="phoneNumber" 
              required 
              placeholder="Sender Number"
            />
          </>
        ) : phoneNumber
        }
        </div>
      <StyledNavBarWrapper>
        <div className="messages-wrapper">
          {!isAdd && data.map((i, index) => (
            <StyledNavBarList isRight={i.type === 'S'} index={index}>
              <div className="message">{i.text}</div>
              <div className="message-date">{new Date(i.date).toGMTString()}</div>
            </StyledNavBarList>
          ))}
        </div>
        <div className="messageArea">
          <textarea 
            id="textarea" 
            name="textarea" 
            rows="4" 
            cols="50" 
            placeholder="Type your message here...."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)} 
          >
          </textarea>
          <img src={sendIcon} alt="Send icon" onClick={() => {
            if((newNumber && newMessage) || (phoneNumber && newMessage)) {
              addNewNumberOrMessage(newNumber || phoneNumber, newMessage);
            }
          }} />
        </div>
      </StyledNavBarWrapper>
    </Wrapper>
  );
};

export default CurrentSelectedBar;