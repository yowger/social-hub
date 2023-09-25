import Post from "@/components/post/Post"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
    return (
        <main className="">
            {/* post composer */}
            <div>
                <Textarea placeholder="What's on your mind" />
            </div>
            <br />
            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"public"}
                content="Sint in excepteur culpa do cupidatat consequat tempor. Sit et ex ut nostrud cillum adipisicing id. Pariatur officia sunt consequat aliqua velit mollit in irure dolore consequat duis nulla dolor. Irure ad pariatur Lorem reprehenderit laboris tempor sint."
            />

            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"private"}
                content="<p>Nisi consectetur officia Lorem labore. Quis tempor in veniam veniam adipisicing exercitation. Aliqua excepteur sit qui consectetur sunt excepteur veniam non Lorem laboris eiusmod.</p>\n
                
                Nisi consectetur officia Lorem labore. Quis tempor in veniam veniam adipisicing exercitation. Aliqua excepteur sit qui consectetur sunt excepteur veniam non Lorem laboris eiusmod.
                "
            />

            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"followers"}
                content="Exercitation aute magna adipisicing proident anim proident magna occaecat. In mollit aute est laboris duis magna ipsum laboris. Mollit esse exercitation proident eu aute labore nulla ea enim. Ex cillum qui eu officia non exercitation nostrud ut incididunt sunt aliquip pariatur nulla.

Tempor cillum adipisicing commodo et enim sit adipisicing sunt in nulla eiusmod. Voluptate ipsum quis cillum mollit cillum excepteur aliqua. Aute laborum est duis sunt eu eu culpa qui minim consectetur adipisicing.

Pariatur nisi exercitation est anim sint commodo duis culpa veniam ad excepteur qui. Reprehenderit aute dolore duis do incididunt est nulla. Lorem non aute Lorem qui ut officia dolor tempor do culpa. Aliqua amet aute qui est veniam nostrud nisi eiusmod commodo sint ullamco nisi officia.

Sit laboris nostrud minim exercitation ea amet. Nulla sunt eiusmod reprehenderit laborum proident adipisicing. Ut cillum mollit anim dolor irure non labore magna id aute. Eiusmod cillum ex tempor sunt elit."
            />
        </main>
    )
}
