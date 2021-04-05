import React, { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

import { BandAdd } from '../components/BandAdd';
import { BandList } from '../components/BandList';



function HomePage() {


  const { online } = useContext( SocketContext )
  
  // const [ bands, setBands ] = useState([]);


  // useEffect(() => {

  //   socket.on('current-bands', ( bands ) => {
  //     setBands( bands )
  //   })

  // }, [socket])


  // const votar = ( id ) => {
  //   socket.emit( 'votar-banda', id );
  // }


  // const borrar = ( id ) => {
  //   socket.emit( 'borrar-banda', id );
  // }


  // const cambiarNombre = ( id, name ) => {
  //   socket.emit('cambiar-nombre-banda', {id, name} )
  // }



  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          {
            online
              ? <span className="text-success"> Online</span>
              : <span className="text-danger"> Offline</span>
          }
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />
      
      <div className="row">
        <div className="col-8">
          {/* <BandList
            data={ bands }
            votar={ votar }
            borrar={ borrar }
            cambiarNombre={ cambiarNombre }
          /> */}
        </div>
        <div className="col-4">
          {/* <BandAdd/> */}
        </div>
      </div>

    </div>
  );
}

export default HomePage;