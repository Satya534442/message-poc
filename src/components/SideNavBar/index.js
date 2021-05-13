import React, { useEffect, useState } from 'react';
import { StyledNavBarWrapper,  StyledNavBarList, StyledAddMessageWrapper } from './styles';
import contact from '../../assets/contact.png';
import newMessage from '../../assets/newMessage.svg';
import deleteIcon from '../../assets/delete.png';
import openMessage from '../../assets/openMessage.svg';
import closedMessage from '../../assets/closedMessage.png';
import cancelIcon from '../../assets/cancel.png';

const SideNavBar = (props) => {
  const { data, doSelect, isAdd, setAddNewNumber, selected, deleteNumberOrMessage } = props;
  const [isSelect, setIsSelect] = useState(false);
  const [selectState, setSelectState] = useState({});

  const handleCheckBoxChange = (e) => {
    e.stopPropagation();
    const { name, checked } = e.target;
    setSelectState({
      ...selectState,
      [name]: checked,
    });
  }

  return (
    <StyledNavBarWrapper>
      <div className="head">
        {isAdd ? <img src={cancelIcon} alt="cancel" onClick={() => setAddNewNumber(false)} /> : 'Messages'}
        {isAdd ? <div className="right">New Message</div> : (
          <button onClick={() => {
            if(!isAdd) {
              setAddNewNumber(true);
            }
          }} disabled={isAdd}>
            <img src={newMessage} alt="new Message" />
          </button>
        )}
      </div>
      <div className="scroll">
        {Object.keys(data).map((item, index) => {

          return(
            <StyledNavBarList className={selected === item ? 'selected' : ''} onClick={() => {
              if(!isAdd) {
                doSelect(item)
              }
            }} index={index} isOpaqe={isAdd}>
              <div className="wrapper-contact">
                <div className="child-1">
                  {isSelect && (
                    <input 
                      type="checkbox" 
                      name={item} 
                      checked={selectState[item]} 
                      onChange={handleCheckBoxChange} 
                    />)}
                  <img src={contact} alt="contact" />
                </div>
                <div className="child-2">
                  <div className="number">{item}</div>
                  <div className="number-date">{new Date(data[item][data[item].length - 1].date).toGMTString()}</div>
                </div>
                <div className="child-3">
                  <img src={deleteIcon} alt="Delete icon" onClick={() => {
                    deleteNumberOrMessage(item);
                  }} />
                </div>
              </div>
            </StyledNavBarList>
          )
          })}
      </div>
      <StyledAddMessageWrapper>
      <button onClick={() => {
          if(isSelect && Object.keys(selectState).length) {
            deleteNumberOrMessage(undefined, undefined, selectState);
          }
          }} disabled={isAdd || (isSelect && Object.keys(selectState).length === 0)}>
            Delete All
          </button>
          <button onClick={() => {
            setIsSelect(true);
          }} disabled={isAdd}>
            Select
          </button>
          <button onClick={() => {
          }} disabled={isAdd}>
            Select All
          </button>
          <button onClick={() => {
          }} disabled>
            Share
          </button>
      </StyledAddMessageWrapper>
    </StyledNavBarWrapper>
  );
};

export default SideNavBar;