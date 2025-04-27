import image from "../public/images/illustration-thank-you.svg";
interface ResultProps {
  selected: number; // Selected should be a number
}
export default function Result({selected}: ResultProps) {
  return (
    <div className="thank-you">
    <img className="img" src={image} alt="illustration" />
    <p className="para">You selected {selected} out of 5. </p>
    <h2 className="thank">Thank you!</h2>
    <p className="text1">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    {/* <button className="back" onClick={() => setSubmitted(false)}>Go Back</button> */}
</div>
  )
}
