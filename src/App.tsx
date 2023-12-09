import { useState } from "react"


function App() {
  const [isShare, setIsShare] = useState<boolean>(false);
  const [deskShow, setDeskShow] = useState<boolean>(false);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> =() =>{
    if(window.innerWidth > 768 ){
      setDeskShow(!deskShow)
    }
    setIsShare(true);
  }

  return (
    <main className="flex w-screen min-h-screen justify-center light-bg items-center ">
      <article className="flex flex-col rounded-lg w-[23em] md:min-w-[50em] md:h-[20em] bg-white  md:flex-row">
        <img className="rounded-tr-lg rounded-tl-lg md:w-[40%]" src="/images/drawers.jpg" alt="Drawer image" />
        <div className="flex flex-col p-6 pb-2 pr-7">
          <h1 className="text-lg font-bold md:text-xl md:pr-10 grayblue-text py-2 pr-5">  
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
          </h1>
          <p className="py-2">  
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
          </p>
          <div className="flex pt-3   items-center w-full justify-between -pr-1">
            <div className="flex py-2 px-1 h-16 w-full">
              <img src="/images/avatar.jpg" 
              className="rounded-full w-15 h-15"
                alt="Michele Appleton"/>
              <div className="px-5">
              <p className="font-bold text-sm w-full">Michell Appleton</p>
                <p className="font-light"> 28 Jun 2020</p>
              </div>
            </div>
              <button className=" flex rounded-full light-bg w-10 h-10 items-center justify-center px-2"
                      onClick={handleClick}>
                <img className="w-5" src="/images/icon-share.svg" alt="share icon" />
              </button>
          </div>
          {deskShow &&
          <div className={` hidden ${ ((window.innerWidth > 768) && deskShow)? "md:flex":""} de-gray-blue p-3 relative bottom-24 left-64  flex-row justify-around rounded-lg w-[13em] `}>
                <span className="text-sm">SHARE</span>
                <a href="https://www.facebook.com"><img className="w-5 h-5" src="/images/icon-facebook.svg" alt="facebook icon" /></a>
                <a href="https://twitter.com"><img className="w-5 h-5" src="/images/icon-twitter.svg" alt="twitter icon" /></a>
                <a href="https://pinterest.com"><img className="w-5 h-5" src="/images/icon-pinterest.svg" alt="pinterest icon" /></a>
              </div>
            }
          { isShare &&
          <div className="flex md:hidden items-center justify-between p-4 py-3 -ml-6 -mb-2 -mt-14 w-[23em] de-gray-blue light-color rounded-bl-lg rounded-br-lg">
            <div className="flex flex-row justify-around w-[70%] ">
              <span className="text-sm">SHARE</span>
              <img className="w-5 h-5" src="/images/icon-facebook.svg" alt="facebook icon" />
              <img className="w-5 h-5" src="/images/icon-twitter.svg" alt="twitter icon" />
              <img className="w-5 h-5" src="/images/icon-pinterest.svg" alt="pinterest icon" />
            </div>
            <button className="flex rounded-full bg-gray-400 text-white w-10 h-10 items-center justify-center px-2"
                    onClick={()=>setIsShare(false)}>
                <img className="w-5 text-white" src="/images/icon-share.svg" alt="share icon" />
            </button>  
          </div>
          }
        </div>
      </article>
     
    </main>
  )
}

export default App
