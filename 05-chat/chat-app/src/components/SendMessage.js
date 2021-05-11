import React from 'react'

export const SendMessage = () => {
    return (
        <form>
            <div class="type_msg row">
                <div class="input_msg_write col-sm-9">
                    <input type="text" class="write_msg" placeholder="Mensaje..." />
                </div>
                <div class="col-sm-3 text-center">
                    <button class="msg_send_btn mt-3" type="submit">
                        enviar
                </button>
                </div>
            </div>
        </form>
    )
}
