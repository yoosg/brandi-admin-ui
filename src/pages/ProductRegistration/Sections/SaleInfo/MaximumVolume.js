import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import { connect } from 'react-redux';
import { setMaxVolume } from 'store/actions';
import { checkCount } from 'utils/checkValidation';

const MaximumVolume = ({ setMaxVolume }) => {
  const [maxVolumeLocal, setMaxVolumeLocal] = useState(20);
  const [isValid, setIsValid] = useState(true);

  const onChange = e => {
    const val = e.target.value;

    if (checkCount(val)) {
      setIsValid(true);
      setMaxVolumeLocal(parseInt(val));
      setMaxVolume(parseInt(val));
    } else {
      setIsValid(false);
      setMaxVolumeLocal(val);
      setMaxVolume(null);
    }
  };

  return (
    <SectionField
      label="최대판매수량"
      moreInfoText="20개를 초과하여 설정하실 수 없습니다"
    >
      <InputTag
        type="number"
        value={maxVolumeLocal}
        onChange={onChange}
        onKeyDown={e =>
          (e.keyCode === 69 ||
            e.keyCode === 190 ||
            e.keyCode === 187 ||
            e.keyCode === 189) &&
          e.preventDefault()
        }
        isValid={isValid}
      />
      개 이하
      {!isValid && (
        <ErrorMessage>* 올바른 판매수량을 입력해주세요.</ErrorMessage>
      )}
    </SectionField>
  );
};

export default connect(null, { setMaxVolume })(MaximumVolume);

// Styled Components

const InputTag = styled.input`
  width: 100px;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
    ${props => !props.isValid && 'border: 1px solid red'}
  }
  margin-right: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`;
