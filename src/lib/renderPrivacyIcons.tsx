import { Globe, Lock, User2, Users2 } from "lucide-react"
import { Privacy } from "@/types/user"

export const iconMappings: Record<Privacy, JSX.Element> = {
    followers: <Users2 className="w-4 h-4" />,
    private: <Lock className="w-4 h-4" />,
    public: <Globe className="w-4 h-4" />,
}

export default function renderPrivacyIcon(privacy: Privacy): JSX.Element {
    return iconMappings[privacy] || <Globe className="w-4 h-4" />
}
