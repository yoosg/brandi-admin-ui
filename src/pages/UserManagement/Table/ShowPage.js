import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const customStyles = {
  control: styles => ({
    ...styles,
    width: 100,
    height: 35,
  }),
  input: styles => ({
    ...styles,
    height: 25,
    display: 'flex',
    alignItems: 'center',
  }),
};

const ShowPage = ({
  currentPage,
  offset,
  optionChange,
  pageChange,
  handleButton,
  total,
}) => {
  return (
    <DivMainWrapper>
      <DivBtnWrap style={{ marginLeft: 0 }}>
        <Span>현재 페이지</Span>
        <DivArrowBtn
          onClick={() => {
            if (currentPage > 1) handleButton('minus');
          }}
        >
          <IArrow arrow="\f104" />
        </DivArrowBtn>
        <DivInputBtn style={{ padding: 0 }}>
          <InputCurrentPage value={currentPage} onChange={pageChange} />
        </DivInputBtn>
        <DivArrowBtn
          onClick={() => {
            if (currentPage < Math.ceil(total / offset.value)) {
              handleButton('plus');
            }
          }}
        >
          <IArrow arrow="\f105" />
        </DivArrowBtn>
        <Span style={{ marginLeft: '10px' }}>{`총 ${Math.ceil(
          total / offset.value,
        )}페이지`}</Span>
        <Span></Span>
      </DivBtnWrap>
      <DivBtnWrap>
        <Select
          styles={customStyles}
          value={offset}
          options={[
            { label: 10, value: 10 },
            { label: 20, value: 20 },
            { label: 50, value: 50 },
            { label: 100, value: 100 },
            { label: 150, value: 150 },
          ]}
          onChange={optionChange}
        />
        <Span style={{ marginLeft: '15px' }}>개씩 보기</Span>
      </DivBtnWrap>
      <DivBtnWrap>
        <Span>{`총 ${total}명의 셀러`}</Span>
      </DivBtnWrap>
    </DivMainWrapper>
  );
};

export default ShowPage;

const DivMainWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const DivBtnWrap = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
`;

const Span = styled.span`
  font-size: 16px;
`;

const DivArrowBtn = styled.div`
  padding: 5px 10px;
  font-size: 15px;
  line-height: 1.5;
  height: 35px;
  border: 1px solid #dedede;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const DivInputBtn = styled.div`
  padding: 5px 10px;
  font-size: 15px;
  line-height: 1.5;
  height: 35px;
  border: 1px solid #dedede;
  border-radius: 3px;
  margin-left: 10px;
`;

const IArrow = styled.i`
  font-style: normal;
  font-family: FontAwesome;
  &:before {
    content: '${({ arrow }) => arrow}';
  }
`;

const InputCurrentPage = styled.input`
  border: none;
  text-align: center;
  width: 50px;
  height: 30px;
`;
