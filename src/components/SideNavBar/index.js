import React from 'react';
import { StyledNavBarWrapper,  StyledNavBarList, StyledAddMessageWrapper } from './styles';
import contact from '../../assets/contact.png';
import newMessage from '../../assets/new.png';

const SideNavBar = (props) => {
  const { data, doSelect, isAdd, setAddNewNumber } = props;

  return (
    <StyledNavBarWrapper>
      <div className="scroll">
        {Object.keys(data).map((item, index) => {

          return(
            <StyledNavBarList onClick={() => {
              if(!isAdd) {
                doSelect(item)
              }
            }} isOpaqe={isAdd}>
              <div className="wrapper-contact">
                <div className="child-1">
                  <img src={contact} alt="contact" />
                </div>
                <div className="child-2">
                  <div className="number">{item}</div>
                  <div className="number-text">{data[item][data[item].length - 1].text}</div>
                  <div className="number-date">{new Date(data[item][data[item].length - 1].date).toGMTString()}</div>
                </div>
              </div>
            </StyledNavBarList>
          )
          })}
      </div>
      <StyledAddMessageWrapper>
        <button onClick={() => {
          if(!isAdd) {
            setAddNewNumber(true);
          }
        }} disabled={isAdd}>
          <img src={newMessage} alt="new Message" />
        </button>
      </StyledAddMessageWrapper>
    </StyledNavBarWrapper>
  );
};

export default SideNavBar;