import React from 'react'
import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {

    const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    return (
        <div class="inbox_chat">

            {
                chats.map((chat) => (
                    <SidebarChatItem key={chat} />
                ))
            }

            {/* <!-- Espacio extra para scroll --> */}
            <div class="extra_space"></div>

        </div>
    )
}
