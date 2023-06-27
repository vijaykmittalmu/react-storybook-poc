import React from "react";
import { Button, IconButton } from "@mui/material";
import * as MUIcon from "@mui/icons-material";

import { VIcon } from "../Icon/VIcon";

interface ButtonProps {
  variant?: "text" | "contained" | "outlined";
  label?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  classes?: string;
  iconName?: keyof typeof MUIcon;
  iconDirection?: boolean;
  iconButton?: boolean;
  iconColor?: string;
}

export const VButton: React.FC<ButtonProps> = ({
  variant,
  label,
  color,
  iconName,
  iconDirection,
  iconButton,
  iconColor,
  ...props
}) => {
  const iconElement = iconName && (
    <VIcon iconName={iconName} color={iconColor} />
  );
  const iconProps = {
    startIcon: iconDirection && iconElement,
    endIcon: !iconDirection && iconElement,
  };

  if (iconButton) {
    return <IconButton aria-label={label}>{iconElement}</IconButton>;
  }
  // hkjhskjdhskh
  return (
    <Button variant={variant} color={color} {...iconProps} {...props}>
      {label}
    </Button>
  );
};
