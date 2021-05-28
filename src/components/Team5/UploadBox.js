import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`

function UploadBox() {
  return (
    <Wrapper>
        <label htmlFor="uploadFile">
            <img src={process.env.PUBLIC_URL + '/images/ico_upload.png'} alt="upload" />
        </label>
        <input accept="image/*" id="uploadFile" type="file" style={{ display: 'none' }} />
      </Wrapper>
  );
}

export default UploadBox;