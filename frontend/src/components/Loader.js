import React from 'react'

export default function Loader() {
    return (
        <>
            <div className="d-flex justify-content-center madimi-one-regular fs-1 mb-4 text-light" style={{ marginTop: '30vh' }}>
                <strong>Great things take time</strong>
            </div>

            <div className="d-flex justify-content-center">
                <div className="loader">
                    <div className="📦"></div>
                    <div className="📦"></div>
                    <div className="📦"></div>
                    <div className="📦"></div>
                    <div className="📦"></div>
                </div>
            </div>
        </>
    )
}
