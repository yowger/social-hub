import { Globe, Lock, User2, Users2 } from "lucide-react"
import { Privacy } from "@/types/user"

export const iconMappings: Record<Privacy, JSX.Element> = {
    followers: <Users2 className="w-4 h-4" />,
    private: <Lock className="w-4 h-4" />,
    public: <Globe className="w-4 h-4" />,
}

type PrivacyIconType = {
    privacy: Privacy
}

export default function PrivacyIcon({ privacy }: PrivacyIconType): JSX.Element {
    return iconMappings[privacy] || <Globe className="w-4 h-4" />
}
