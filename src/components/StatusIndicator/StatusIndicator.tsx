import React from "react";
import {
  StatusIndicatorWrapper,
  StatusIndicatorEl,
} from "./StatusIndicator.styled";

const deadStatusColor = "#ff5722";
const aliveStatusColor = "#4caf50";
const unknownStatusColor = "#9e9e9e";

interface IStatusIndicatorProps {
  status: "Alive" | "Dead" | "unknown";
}
function StatusIndicator(props: IStatusIndicatorProps) {
  let statusColor =
    props.status === "Alive"
      ? aliveStatusColor
      : props.status === "Dead"
      ? deadStatusColor
      : unknownStatusColor;

  let statusLabel =
    props.status === "Alive"
      ? "Vivo"
      : props.status === "Dead"
      ? "Deceduto"
      : "Sconosciuto";

  return (
    <StatusIndicatorWrapper>
      <StatusIndicatorEl statusColor={statusColor} />
      <span> - {statusLabel}</span>
    </StatusIndicatorWrapper>
  );
}

export default StatusIndicator;
