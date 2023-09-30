import { Globe, Lock, User2, Users2 } from "lucide-react"
import { Privacy } from "@/types/common"

export const iconMappings: Record<Privacy, JSX.Element> = {
    PUBLIC: <Globe className="w-4 h-4" />,
    FOLLOWERS: <Users2 className="w-4 h-4" />,
    PRIVATE: <Lock className="w-4 h-4" />,
}

type PrivacyIconType = {
    privacy: Privacy
}

export default function PrivacyIcon({ privacy }: PrivacyIconType): JSX.Element {
    return iconMappings[privacy] || <Globe className="w-4 h-4" />
}
