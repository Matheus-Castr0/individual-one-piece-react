import { ReactNode } from "react";

type ItemsDirection = 'row' | 'row-reverse';
type ItemsPosition = 'start' | 'end';

export interface HeaderProps {
    direction: ItemsDirection,
    position: ItemsPosition,
    children: ReactNode,
}
