import Post from "@/components/post/Post"
import PostComposer from "@/components/post/PostComposer"

export default function Home() {
    const dateTest = new Date(Date.now() - 3 * 60 * 60 * 1000)
    return (
        <main className="">
            <PostComposer />
            <br />
            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"public"}
                content="Sint in excepteur culpa do cupidatat consequat tempor. Sit et ex ut nostrud cillum adipisicing id. Pariatur officia sunt consequat aliqua velit mollit in irure dolore consequat duis nulla dolor. Irure ad pariatur Lorem reprehenderit laboris tempor sint."
                image={
                    "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                }
                comment={{
                    name: "Roger Pantil",
                    date: dateTest,
                    content:
                        "Id dolore aute reprehenderit ipsum eu incididunt dolor Lorem culpa.",
                    reactions: "like",
                }}
            />

            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"private"}
                content="<p>Nisi consectetur officia Lorem labore. Quis tempor in veniam veniam adipisicing exercitation. Aliqua excepteur sit qui consectetur sunt excepteur veniam non Lorem laboris eiusmod.</p>\n
                
                Nisi consectetur officia Lorem labore. Quis tempor in veniam veniam adipisicing exercitation. Aliqua excepteur sit qui consectetur sunt excepteur veniam non Lorem laboris eiusmod.
                "
                image={
                    "https://images.unsplash.com/photo-1695112577118-d44f734ce6fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80"
                }
            />

            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"followers"}
                content="Exercitation aute magna adipisicing proident anim proident magna occaecat. In mollit aute est laboris duis magna ipsum laboris. Mollit esse exercitation proident eu aute labore nulla ea enim. Ex cillum qui eu officia non exercitation nostrud ut incididunt sunt aliquip pariatur nulla.

Tempor cillum adipisicing commodo et enim sit adipisicing sunt in nulla eiusmod. Voluptate ipsum quis cillum mollit cillum excepteur aliqua. Aute laborum est duis sunt eu eu culpa qui minim consectetur adipisicing.

Pariatur nisi exercitation est anim sint commodo duis culpa veniam ad excepteur qui. Reprehenderit aute dolore duis do incididunt est nulla. Lorem non aute Lorem qui ut officia dolor tempor do culpa. Aliqua amet aute qui est veniam nostrud nisi eiusmod commodo sint ullamco nisi officia.

Sit laboris nostrud minim exercitation ea amet. Nulla sunt eiusmod reprehenderit laborum proident adipisicing. Ut cillum mollit anim dolor irure non labore magna id aute. Eiusmod cillum ex tempor sunt elit."
                comment={{
                    name: "James Macagba",
                    date: dateTest,
                    content:
                        "loremConsectetur proident aliquip et magna tempor dolor aliquip laboris cillum dolore adipisicing.",
                    reactions: "like",
                }}
            />
        </main>
    )
}
