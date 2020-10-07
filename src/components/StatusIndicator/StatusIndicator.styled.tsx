import styled from "styled-components";

interface StatusIndicatorElProps {
  readonly statusColor: string;
}

export const StatusIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const StatusIndicatorEl = styled.div<StatusIndicatorElProps>`
  height: 0.6rem;
  width: 0.6rem;
  margin-right: 0.375rem;
  background: ${(props) => props.statusColor};
  border-radius: 50%;
`;
