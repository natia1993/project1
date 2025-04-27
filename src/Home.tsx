import { useState } from 'react'
import Result from './result';
import star from "../public/images/icon-star.svg"
export default function Home() {
  const buttonList: number[] = [1, 2, 3, 4, 5]
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true)
    } else {
      alert('Please select a rating before submitting!')
    }
  }
  return (
    <section className="section">
      <div className="main">
        {!submitted ? (
          <>
         <img className="star" src={star} alt="star" />
          
            <h1 className="greeting">How did we do?</h1>
            
            <p className="text">
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
            <div className="buttons">
              {buttonList.map((num) => (
                <button
                  className={`button ${selected === num ? 'selected' : ''}`}
                  key={num}
                  onClick={() => setSelected(num)}
                >
                  {num}
                </button>
              ))}
            </div>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
       
        <Result selected={selected!} />
        )}
      </div>
    </section>
  )
}
