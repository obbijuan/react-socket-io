export const getUsuarioStorage = () => {
    return {
        agent: localStorage.getItem('agent'),
        desk: localStorage.getItem('desk'),
    }
}