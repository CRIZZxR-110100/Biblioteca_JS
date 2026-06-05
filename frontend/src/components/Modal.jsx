export const Modal = ({ abierto, onCerrar, titulo, contenido }) => {
  if (!abierto) return null

  return (
    <div className="w3-modal">
      <div className="w3-modal-content w3-card w3-animate-top w3-round">
        
        <header className="w3-container w3-blue">
          <h3>{ titulo }</h3>
          <span onClick={ onCerrar } className="w3-button w3-display-topright">&times;</span>
        </header>

        <div className="w3-container w3-padding">
          { contenido }
        </div>
      </div>
    </div>
  )
}