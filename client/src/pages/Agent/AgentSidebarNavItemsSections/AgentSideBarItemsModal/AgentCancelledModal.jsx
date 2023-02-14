import React from 'react'

const AgentCancelledModal = (props) => {
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
      }
    
      return (
        
        <div className='modal show-fade' style={modelStyle}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title text-warning' style={{textShadow: 'none', fontWeight: 'bold'}}>
                            Remove this Item?
                        </h4>
                        <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' aria-label='Close' onClick={props.hide}></button>
                    </div>
                    <div className='modal-body'>
                        <div className='d-flex flex-column justify-content-center align-items-around text-secondary'>
                            <h5>{props.fullName}</h5>
                            <h5>Reson: {props.reason}</h5>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-warning' style={{color: 'rgb(59, 58, 58)', fontWeight: 'bold'}}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    
      )
}

export default AgentCancelledModal
