import React from 'react'

const JsxPage = () => {
    const contohVariable = 'Contoh variable';
    return (
        <div>
            <h1 className='greeting'>Contoh dari Jsx</h1>
            <div>
                {
                    1 + 1
                }
            </div>
            <div>
                {contohVariable}
            </div>
            {
                false ? (
                    <p>benar</p>
                ) : (
                    <p>salah</p>
                )
            }
        </div>
    )
}

export default JsxPage