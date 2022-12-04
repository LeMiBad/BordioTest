import { useState } from "react"


export const useOpeningSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false)

    return {
        openState: isOpen,
        switchHandler: () => isOpen? setIsOpen(false) : setIsOpen(true)
    }
}