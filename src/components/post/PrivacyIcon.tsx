import { Globe, Lock, User2, Users2 } from "lucide-react"
import { Privacy } from "@/types/commonTypes"

export const iconMappings: Record<Privacy, JSX.Element> = {
    PUBLIC: <Globe size={14} />,
    FOLLOWERS: <Users2 size={14} />,
    PRIVATE: <Lock size={14} />,
}

type PrivacyIconType = {
    privacy: Privacy
}

export default function PrivacyIcon({ privacy }: PrivacyIconType): JSX.Element {
    return iconMappings[privacy] || <Globe size={14} />
}
