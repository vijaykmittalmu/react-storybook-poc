import React from "react";

import * as MUIcon from "@mui/icons-material";

interface IconProps {
  iconName?: keyof typeof MUIcon;
  size?: number;
  color?: string;
}

export const VIcon: React.FC<IconProps> = ({ iconName, size, color }) => {
  const Icon = iconName && MUIcon[iconName];
  return <>{Icon && <Icon sx={{ fontSize: size, color: color }} />}</>;
};
