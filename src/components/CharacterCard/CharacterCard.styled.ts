import styled from "styled-components";
import { device } from "../../style/device";

export const CharacterCardEl = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  border: 1px solid #e5e5e5;
  transition: 0.25s;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    color: #202020;
  }

  border-radius: 2px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CharacterAvatar = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 2px;

  @media ${device.mobileM} {
  }
`;

export const CharacterContentWrapper = styled.div`
  padding: 10px;
  margin-left: 20px;
  display: flex;

  flex-direction: column;
`;

export const CharacterHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CharacterCardLabel = styled.span`
  color: #546e7a;
  font-size: 20px;
`;

export const EpisodesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    max-height: 200px;
    overflow: auto;
  }

  .load-more {
    cursor: pointer;

  }
`;
