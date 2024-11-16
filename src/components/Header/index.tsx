import { HeaderProps } from "./types";

export default function Header({ direction, position, children }: HeaderProps) {
    return(
        <div className={`w-screen h-14 bg-bg-secondary shadow-lg flex justify-${position} flex-${direction} items-center p-4`}>
            {children}
        </div>
    );
}