import { useState, useEffect } from "react"
function App() {

  const [advice, setAdvice] = useState('')
  const [adviceId, setAdviceId] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    setLoading(true);
  const apiUrl = 'https://api.adviceslip.com/advice'

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const {slip} = data;
    setAdviceId(slip.id);
    setAdvice(slip.advice)
    setLoading(false)
  } catch (error) {
    alert(error)
    setLoading(false);
  }
  }


  return (
    <>
      <div className="bg-bg1 flex flex-col items-center w-80 h-96 mt-28 rounded-lg md:w-11/12">
        <h1 className="mt-14 mb-5 text-bg2 font-bold tracking-widest text-xs">ADVICE #<span>{adviceId}</span></h1>
        
        
         {loading ? (
          <div className="text-bg2" role="status">
            <span className="visually-hidden">Loading...</span>
             </div>
         ) : (<p id="advice" className="h-3/6 text-white text-2xl p-6 text-center">
            {advice}
          </p>)}
       

          <div className="mt-10 mb-10">
  <img src="./pattern-divider-mobile.svg" className="block md:hidden" alt="Pattern for mobile"/>
  <img src="./pattern-divider-desktop.svg" className="hidden md:block" alt="Pattern for tablets and desktops"/>
</div>

        <div id="new-advice" className="absolute sm-top md-top w-14 h-14 bg-bg2 rounded-full flex items-center justify-center hover:shadow-green" onClick={getAdvice}>
          <img src="./icon-dice.svg"/>
        </div>

        

      </div>
      <div className="attribution mt-20 text-white">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/Takeda-harsh" className="font-bold">Kofi A. Akyea</a>.
  </div>
    </>
  )
}

export default App
