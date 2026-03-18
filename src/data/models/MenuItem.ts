import { ReactNode } from "react"

export interface MenuItem {
    icon: ReactNode
    title: string
    tag: string
    url: string
    isSelected?: boolean
}