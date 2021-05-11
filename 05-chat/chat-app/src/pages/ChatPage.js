import React from 'react';
import { InboxPeople } from '../components/InboxPeople';

import '../css/chat.css';


export const ChatPage = () => {
    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />

                {/* <!-- Chat inicio --> */}
                <div class="mesgs">

                    {/* <!-- Historia inicio --> */}
                    <div class="msg_history">

                        {/* <!-- Mensaje recibido Inicio --> */}
                        <div class="incoming_msg">
                            <div class="incoming_msg_img">
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                            </div>
                            <div class="received_msg">
                                <div class="received_withd_msg">
                                    <p>Test which is a new approach to have all
                                    solutions</p>
                                    <span class="time_date"> 11:01 AM | June 9</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Mensaje recibido Fin --> */}

                        {/* <!-- Mensaje enviado inicio --> */}
                        <div class="outgoing_msg">
                            <div class="sent_msg">
                                <p>Test which is a new approach to have all
                                solutions</p>
                                <span class="time_date"> 11:01 AM | June 9</span>
                            </div>
                        </div>
                        {/* <!-- Mensaje enviado inicio --> */}



                    </div>
                    {/* <!-- Historia Fin --> */}

                    {/* <!-- Enviar mensaje Inicio --> */}
                    <div class="type_msg row">
                        <div class="input_msg_write col-sm-9">
                            <input type="text" class="write_msg" placeholder="Mensaje..." />
                        </div>
                        <div class="col-sm-3 text-center">
                            <button class="msg_send_btn mt-3" type="button">
                                enviar
                        </button>
                        </div>
                    </div>
                    {/* <!-- Enviar mensaje Fin --> */}

                </div>
                {/* <!-- Chat Fin --> */}
                

            </div>


        </div>
    )
}
