import {useState} from "react";

const useModalState = (initial = false) => {

    const [isOpen, setIsOpen] = useState(initial)

    const onOpen = () => setIsOpen(true);

    const onClose =( ) =>  setIsOpen(false);

    const onToggle = () =>  setIsOpen(!isOpen);

    return {isOpen, onOpen, onClose, onToggle}

}

export default useModalState
