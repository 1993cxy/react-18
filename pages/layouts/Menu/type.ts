import { ComponentType } from 'react';

export interface IMenuItemProps {
  title: string;
  path?: string;
  label?: string;
  icon?: ComponentType;
  children?: Array<IMenuItemProps>;
}

type IMenuProps = {
  theme: string;
};
