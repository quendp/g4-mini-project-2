import React from 'react'

const AgentBookingsCancelled = () => {
  return (
    <div>
        <div className="modal fade" id="removeBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Remove this item?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h5>Press Ok to continue</h5>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Later</button>
                    <button type="button" className="btn btn-warning">Ok</button>
                </div>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default AgentBookingsCancelled
