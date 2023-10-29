import React from 'react'
import '../Style/CaseForm.css'
function CaseForm() {
  return (
    <section className='caseForm'>
        <div className='container'>
            <div className='form1'>
                <h1>
                Get a Free SEO Analysis!
                </h1>
                <form>
                    <label htmlFor="">
                        Name
                        <br />
                        <input type="text" />
                    </label>
                    <label htmlFor="">
                    Email
                    <br />
                    <input type="text" />
                    </label>
                    <label htmlFor="">
                    Your website URL 
                    <br />
                    <input type="text" />
                    </label>
                    <button type='submit'>
                    Analyse your site
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default CaseForm